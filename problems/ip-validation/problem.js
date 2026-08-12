/*
 * IP ADDRESS VALIDATION — PLAN
 *
 * 1. Validate IPv4 independently:
 *    - exactly four dot-separated decimal octets
 *    - each octet is between 0 and 255
 *    - leading zeroes are not allowed, except for the value "0"
 *
 * 2. Validate IPv6 independently:
 *    - hexadecimal groups contain 1–4 characters
 *    - an uncompressed address contains exactly eight groups
 *    - "::" may appear at most once and must replace at least one group
 *    - uppercase and lowercase hexadecimal characters are both valid
 *    - support the standard IPv4-at-the-end form
 *
 * 3. Classify the input as "IPv4", "IPv6", or "Neither".
 *
 * 4. Prefer this logical flow for IPv6. A single giant regex is possible,
 *    but it is difficult to audit and easy to get subtly wrong.
 */

const IPV4_REGEX = /^(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
const HEX_GROUP_REGEX = /^[0-9a-fA-F]{1,4}$/;

function isIPv4(address) {
  const octets = address.split(".");

  if (octets.length !== 4) return false;

  return octets.every((octet) => {
    if (!/^\d+$/.test(octet)) return false;
    if (octet.length > 1 && octet[0] === "0") return false;

    return Number(octet) <= 255;
  });
}

function ipv4ToIPv6Groups(address) {
  const octets = address.split(".").map(Number);
  const firstGroup = ((octets[0] << 8) | octets[1]).toString(16);
  const secondGroup = ((octets[2] << 8) | octets[3]).toString(16);

  return `${firstGroup}:${secondGroup}`;
}

function isIPv6(address) {
  if (address.length === 0) return false;

  // An embedded IPv4 address occupies two IPv6 groups.
  if (address.includes(".")) {
    const lastColon = address.lastIndexOf(":");
    if (lastColon === -1) return false;

    const embeddedIPv4 = address.slice(lastColon + 1);
    if (!isIPv4(embeddedIPv4)) return false;

    address = `${address.slice(0, lastColon + 1)}${ipv4ToIPv6Groups(embeddedIPv4)}`;
  }

  const compressionParts = address.split("::");
  if (compressionParts.length > 2) return false;

  const hasCompression = compressionParts.length === 2;
  const leftGroups = compressionParts[0] === "" ? [] : compressionParts[0].split(":");
  const rightGroups = hasCompression && compressionParts[1] !== ""
    ? compressionParts[1].split(":")
    : [];
  const groups = [...leftGroups, ...rightGroups];

  if (!groups.every((group) => HEX_GROUP_REGEX.test(group))) return false;

  // "::" must compress at least one group.
  if (hasCompression) return groups.length < 8;

  return groups.length === 8;
}

function validate(address) {
  if (isIPv4(address)) return "IPv4";
  if (isIPv6(address)) return "IPv6";
  return "Neither";
}

/* Regex is useful for IPv4's local rules, but a logical flow stays clearer for IPv6. */
function validateIPRegexAssisted(address) {
  if (IPV4_REGEX.test(address)) return "IPv4";
  if (isIPv6(address)) return "IPv6";
  return "Neither";
}

export { isIPv4, isIPv6, validate, validateIPRegexAssisted };
