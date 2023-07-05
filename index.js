// In this i found first combination using Map and second combination using backtracking.
// Finding the first combination using a hash map: O(n), where n is the length of the input array.
// Sorting the array: O(n log n), where n is the length of the input array.

// Finding the second combinations using backtracking: O(2^n), where n is the length of the input array. In the worst case, backtracking explores all possible combinations.
// Therefore, the overall time complexity is O(n log n + 2^n).

function findCombinations(array, target) {
    const firstCombination = [];
    const complements = new Map();
  
    for (let i = 0; i < array.length; i++) {
      const complement = target - array[i];
      if (complements.has(complement)) {
        const complementIndex = complements.get(complement);
        firstCombination.push([array[i], array[complementIndex]]);
      }
      complements.set(array[i], i);
    }
  
    const mergedArray = array.slice().sort((a, b) => a - b);
  
    const doubledTarget = target * 2;
    const secondCombinations = [];
  
    findSecondCombinations(mergedArray, doubledTarget, [], 0, secondCombinations);
  
    return [firstCombination, mergedArray, secondCombinations];
  }
  
  function findSecondCombinations(array, target, currentCombination, startIndex, combinations) {
    if (target === 0) {
      combinations.push(currentCombination.slice());
      return;
    }
  
    for (let i = startIndex; i < array.length; i++) {
      if (i > startIndex && array[i] === array[i - 1]) {
        continue;
      }
  
      if (array[i] <= target) {
        currentCombination.push(array[i]);
        findSecondCombinations(array, target - array[i], currentCombination, i + 1, combinations);
        currentCombination.pop();
      } else {
        break;
      }
    }
  }
  
  // Test the function with the given sample input
  const sampleInput = [1, 3, 2, 2, -4, -6, -2, 8];
  const targetValue = 4;
  
  const [resultFirstCombination, mergedArray, resultSecondCombinations] = findCombinations(sampleInput, targetValue);
  
  console.log("First Combination For '4':", resultFirstCombination);
  console.log("Merge Into a single Array:", mergedArray);
  console.log("Second Combination For '8':", resultSecondCombinations);


//   The space required for storing the first combination: O(k), where k is the number of pairs in the first combination. In the worst case, k can be at most n/2, where n is the length of the input array.
// The space required for the hash map: O(n), where n is the length of the input array.
// The space required for the merged array: O(n), where n is the length of the input array.
// The space required for storing the second combinations: O(2^n), where n is the length of the input array. In the worst case, all possible combinations are stored.
// Therefore, the overall space complexity is O(n + 2^n).
  