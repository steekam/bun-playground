class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function lengthOf(head) {
  let length = 0;
  for (let node = head; node; node = node.next) length += 1;
  return length;
}

function findIntersectionNode(headA, headB) {
  let a = headA;
  let b = headB;
  let lengthA = lengthOf(headA);
  let lengthB = lengthOf(headB);
  for (; lengthA > lengthB; lengthA -= 1) a = a.next;
  for (; lengthB > lengthA; lengthB -= 1) b = b.next;
  while (a && a !== b) {
    a = a.next;
    b = b.next;
  }
  return a;
}

function validate([listA, listB]) {
  let indexA = listA.length - 1;
  let indexB = listB.length - 1;
  while (indexA >= 0 && indexB >= 0 && listA[indexA] === listB[indexB]) {
    indexA -= 1;
    indexB -= 1;
  }
  return indexA === listA.length - 1 ? null : [indexA + 1, indexB + 1];
}

export { Node, findIntersectionNode, validate };
