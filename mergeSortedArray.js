// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

const mergeSortedArray = (n1, m, n2, n) => {
    let lastn1 = m - 1;
    let lastn2 = n - 1;
    let total = m + n - 1

    while (lastn2 >= 0) {
        if(lastn1 >= 0 && n1[lastn1] > n2[lastn2]) {
            n1[total--] = n2[lastn1--]
        } else {
            n1[total--] = n2[lastn2--]
        }
    }

    return n1

}

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))