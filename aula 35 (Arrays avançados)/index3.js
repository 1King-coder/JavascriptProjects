const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// const nums3 = nums1.concat(nums2, [7, 8, 9, 'Vitor'])

const nums3 = [...nums1, 'Vitor',...nums2, ...[7, 8, 9]]

console.log(nums1, '\n', nums2, '\n ', nums3)