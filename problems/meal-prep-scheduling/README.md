# Meal-Prep Scheduling

Given non-overlapping-compatible `[start, end]` jobs, return the maximum number
of jobs that can be selected. Jobs sharing an endpoint are compatible.

Pattern: sort by end time and apply activity selection greedily.
