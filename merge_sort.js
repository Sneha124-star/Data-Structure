var merge = function(nums1, m, nums2, n) {
    while (nums1.length > m) {
        nums1.pop();
    }

    let i = 0;
    let j = 0;
    while (i < nums1.length && j < n) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else {
            nums1.splice(i, 1, nums2[j], nums1[i]);
            j++;
        }
    }
    while (j < n) {
        nums1.push(nums2[j]);
        j++;
    }

};
