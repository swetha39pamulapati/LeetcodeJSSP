let kthSmallest = function(matrix, k) {
    if (matrix == null)
        return 0;

    let n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n- 1][n - 1];

    while (left < right)
    {
        let mid = Math.floor(left + (right - left) / 2);
        let count = 0;

        for (let i = 0; i < n; i++)
            for (let j = n - 1; j >= 0; j--)
                if (matrix[i][j] <= mid)
                    count++;

        if (count < k)
            left = mid + 1;
        else
            right = mid;
    }

    return left;
};
