
// Time Complexity:
// Sorting the array: O(n log n), where n is the length of the input array.
// Finding pairs that sum up to the target value: O(n), where n is the length of the input array. This is because we iterate through the array once using two pointers.
// Finding combinations that sum up to the doubled target value: O(n^3), where n is the length of the input array. This is because we have nested loops and iterate through the array multiple times.
// Therefore, the overall time complexity is O(n^3), dominated by the nested loops.

// Space Complexity:

// Storing pairs: O(k), where k is the number of pairs that sum up to the target value. In the worst case, k can be at most n/2, where n is the length of the input array.
// Storing the merged array: O(n), where n is the length of the input array.
// Storing combinations: O(m), where m is the number of combinations that sum up to the doubled target value. In the worst case, m can be at most n^2, where n is the length of the input array.
// Therefore, the overall space complexity is O(n^2), dominated by storing the combinations.


function findCombinations(array, target) {
  // Find pairs that sum up to the target value
  const pairs = [];
  let left = 0;
  let right = array.length - 1;

  array.sort((a, b) => a - b); // Sort the array in ascending order

  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target) {
      pairs.push([array[left], array[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // Merge and sort the array in ascending order
  const mergedArray = array;

  // Double the target value
  target *= 2;

  // Find combinations that sum up to the doubled target value
  const combinations = [];
  const n = array.length;

  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = array[i] + array[j] + array[left] + array[right];
        if (sum === target) {
          combinations.push([array[i], array[j], array[left], array[right]]);
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return [pairs, mergedArray, combinations];
}

//Test the function with the given sample input
const sampleInput = [1, 3, 2, 2, -4, -6, -2, 8];
const targetValue = 4;

const [resultPairs, mergedArray, resultCombinations] = findCombinations(sampleInput, targetValue);

console.log("First Combination For '4':", resultPairs);
console.log("Merge Into a single Array:", mergedArray);
console.log("Second Combination For '8':", resultCombinations);
