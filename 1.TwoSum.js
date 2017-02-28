/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Approach #1 (Brute Force) - TC: O(n) ; SC = 1
var twoSum = function(nums, target) {
  let number = [];
    
  for (let i = 0; i < nums.length -1; i++) {

    for (let j = i+1; j < nums.length; j++) {

      if (nums[i] + nums[j] === target) {
        number.push(i);
        number.push(j);
            
        break;
      }
    }
  }
  
  return number;
};

// Approach #2 - TC: O(n) ; SC = O(n)
var twoSum = function(nums, target) {
    let number = [];
    
    for (let i = 0; i < nums.length; i++) {
        
        let numToFind = target - nums[i];
        let numsClone = nums.slice();
        
        numsClone[i] = 'a';
        
        let indexOfNumToFind = numsClone.indexOf(numToFind);
        
        if (indexOfNumToFind !== -1) {
            
            number = [i, indexOfNumToFind];
            break;
        }
    }
    
    return number;
};

// Approach #3 - TC: O(n) ; SC = O(n)
var twoSum = function(nums, target) {
    let number = [];
    let numByIndex = {};
    
    for (let i = 0; i < nums.length; i++) {
        numByIndex[nums[i]] = i;
    }
    
    for (let i = 0; i < nums.length; i++) {
        let numToFind = target - nums[i];
        
        if (numByIndex.hasOwnProperty(numToFind) && numByIndex[numToFind] !== i) {
            number = [i, numByIndex[numToFind]];
            break;
        }
    }
    
    return number;
};

// Approach #4 - TC: O(n) ; SC = O(n)
var twoSum = function(nums, target) {
    let number = [];
    let numByIndex = {};
    
    for (let i = 0; i < nums.length; i++) {
        let numToFind = target - nums[i];
        
        if (numByIndex.hasOwnProperty(numToFind)) {
            number = [numByIndex[numToFind], i];
            break;
        }
        
        numByIndex[nums[i]] = i;
    }
    
    return number;
};
