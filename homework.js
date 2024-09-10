const splitter = "\n\n*****************************************************************************************\n"

//---------------------------------------------- Question 1 ----------------------------------------------//
// Given an ordered array of numbers "nums"
// Remove the duplicate elements from the array
// example: [1,2,3,5,1] -> [1,2,3,5]

let removeDuplicates = function (nums) {
    for (let index = 0; index < nums.length; index++) {
        // console.log(nums[index])
        while(nums.includes(nums[index],index+1)){
            nums.splice(index,1)
        }
    }
    // console.log(nums)
    return nums
};

console.assert(JSON.stringify(removeDuplicates([1, 1, 2])) === JSON.stringify([1, 2]), "[ Question:1 ] test case [1,1,2] has failed.")
console.assert(JSON.stringify(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) === JSON.stringify([0, 1, 2, 3, 4]), `[ Question:1 ] test case [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] has failed.` + splitter)


//---------------------------------------------- Question 2 ----------------------------------------------//
// You are given a large number represented as an array
// example : 10024 -> [1,0,0,2,4]
// you are asked to increment the number by 1 ( add 1 to the number )
// return an array of the new number
// example : 10024 + 1 = 10025 -> [1,0,0,2,5]

var plusOne = function (digits) {
    if(digits[digits.length-1]<9)
        digits[digits.length-1] += 1
    else
        {
            let index=1;
            while(digits.at(-index) == 9)
            {
                digits[digits.length-index]=0
                index++
            }
            digits[digits.length-index]++
        } 
    // console.log(digits)
    return digits
};

console.assert(JSON.stringify(plusOne([1, 1, 2])) === JSON.stringify([1, 1, 3]), "[ Question:2 ] test case [1, 1, 2] has failed.")
console.assert(JSON.stringify(plusOne([1, 1, 9])) === JSON.stringify([1, 2, 0]), "[ Question:2 ] test case [1, 1, 9] has failed." + splitter)
// console.log(plusOne([1,9,9,9,9,9,9,9]))

//---------------------------------------------- Question 3 ----------------------------------------------//
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// Merge ( תאחדו ) nums1 and nums2 into a single array sorted in non-decreasing order.

var merge = function(nums1, nums2) {
    const results = []
    let index1=0
    let index2=0
    while(index1< nums1.length || index2<nums2.length){
        // console.log(results)
        if(index1==nums1.length && index2< nums2.length){
            results.push(nums2[index2])
            index2++
            continue
        }
        else
            if(index2==nums2.length && index1< nums1.length){
                results.push(nums1[index1])
                index1++
                continue
        }
        else
            if(nums1[index1]< nums2[index2]){
                if(results[results.length-1]> nums1[index1]){
                    index1++
                    continue
                }
                results.push(nums1[index1])
                index1++
                continue
            }
            else{
                if(results[results.length-1]> nums2[index2]){
                    index2++
                    continue
                }
                results.push(nums2[index2])
                index2++
                continue
            }
    }
    return results
};

console.assert(JSON.stringify(merge([1,2,3,0,0,0], [2,5,6])) === JSON.stringify([1,2,2,3,5,6]), "[ Question:3 ] test case [1,2,3,0,0,0], [2,5,6] has failed.")
console.assert(JSON.stringify(merge([0], [1])) === JSON.stringify([0,1]), "[ Question:3 ] test case [0], [1] has failed.")


//---------------------------------------------- Question 4 ----------------------------------------------//
// Given an array of integers, find all the unique triplets in the array that sum to zero.
// Example: [-1, 0, 1, 2, -1, -4] -> [[-1, 0, 1], [-1, -1, 2]]
// Return the array of triplets.

var threeSum = function (nums) {
    const results = []

    for(let i=0;i<nums.length-2;i++)
        for(let j=i+1;j<nums.length-1;j++)
            for(let k=j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k] === 0)
                {
                    const three = [nums[i],nums[j],nums[k]]
                    three.sort((a,b)=> a-b)
                    // console.log(three)
                    let counter = 0
                    for(arr of results){
                        if(JSON.stringify(arr)==JSON.stringify(three))
                            break
                        counter++
                    }
                    if(counter == results.length)
                        results.push(three)
                }
            }
    // console.log(results)
    return results
};

console.assert(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])) === JSON.stringify([[-1, 0, 1], [-1, -1, 2]]), "[ Question:4 ] test case [-1, 0, 1, 2, -1, -4] has failed.")
console.assert(JSON.stringify(threeSum([0, 1, 1])) === JSON.stringify([]), "[ Question:4 ] test case [0, 1, 1] has failed." + splitter)

//---------------------------------------------- Question 5 ----------------------------------------------//
// Given an array of integers, move all zeros to the end of the array while maintaining the relative order of the non-zero elements.
// Example: [0,1,0,3,12] -> [1,3,12,0,0]
// Return the modified array.

var moveZeroes = function (nums) {
    zeros=0;
    for (let index = 0; index < nums.length; index++) {
        // console.log(nums)
        if(nums[index]==0){
            nums.splice(index,1)
            index--
            zeros++
        }
    }
    while(zeros>0){
        nums.push(0)
        zeros--
    }
    return nums
};

console.assert(JSON.stringify(moveZeroes([0, 1, 0, 3, 12])) === JSON.stringify([1, 3, 12, 0, 0]), "[ Question:5 ] test case [0, 1, 0, 3, 12] has failed.")
console.assert(JSON.stringify(moveZeroes([0])) === JSON.stringify([0]), "[ Question:5 ] test case [0] has failed." + splitter)

//---------------------------------------------- Question 6 ----------------------------------------------//
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// Example: [2, 7, 11, 15], target = 9 -> [0, 1] (because nums[0] + nums[1] = 9)
// Return the array of indices.

var twoSum = function (nums, target) {
    const results=[]
    for(let i=0;i<nums.length-1;i++)
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]== target)
                return [i,j]
    }
    return results
};
console.assert(JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([0, 1]), "[ Question:6 ] test case [2, 7, 11, 15], 9 has failed.")
console.assert(JSON.stringify(twoSum([3, 2, 4], 6)) === JSON.stringify([1, 2]), "[ Question:6 ] test case [3, 2, 4], 6 has failed." + splitter)

//---------------------------------------------- Question 7 ----------------------------------------------//
// Given an array, reverse the order of elements in-place.
// Example: [1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1]
// Return the reversed array.

var reverseArray = function (nums) {
    const results = []
    for(i=nums.length-1;i>=0;i--)
        results.push(nums[i])
    return results
};

console.assert(JSON.stringify(reverseArray([1, 2, 3, 4, 5])) === JSON.stringify([5, 4, 3, 2, 1]), "[ Question:7 ] test case [1, 2, 3, 4, 5] has failed.")
console.assert(JSON.stringify(reverseArray([7, 6, 5])) === JSON.stringify([5, 6, 7]), "[ Question:7 ] test case [7, 6, 5] has failed.")
