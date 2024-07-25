const nums = [2, 7, 11, 15];
const target = 99;

console.log(twoSum(nums,target))

function twoSum(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(i!=j&&nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
    return []
}
