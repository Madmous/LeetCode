/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

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