console.log(Math.min(10, 100)); // 10
console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
console.log(Math.min(100, 20, 60, 50, 70)); // 20

// 지정한 배열의 요소 중 최소값을 반환
function smallest(nums) {
  // let result = nums[0];
  // for (let i = 0; i < nums.length; i++) {
  //   if (result > nums[i]) {
  //     result = nums[i];
  //   }
  // }
  // return result;

  return Math.min(...nums);

  // return Math.min.apply(this, nums);
}

console.log(smallest([10, 100])); // 10
console.log(smallest([200, 100, 50, 60, 80, 30])); //30
console.log(smallest([100, 20, 60, 50, 70])); // 20
