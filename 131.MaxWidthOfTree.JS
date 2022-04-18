class Node
{
    constructor(data)
    {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}



let widthOfBinaryTree = function(root) {
    if(root == null) return 0;
    let max = 1;
    let q = [];
    q.push((root, 0));
    while(q.length > 0) {
        let n = q.length;
        let left = -1, right = -1;
        while(n-- > 0) {
            let cur = q.shift();
            if(left == -1) left = cur.Item2;
            right = cur.Item2;
            if(cur.Item1.left != null) q.Enqueue((cur.Item1.left, 2 * cur.Item2));
            if(cur.Item1.right != null) q.Enqueue((cur.Item1.right, 2 * cur.Item2 + 1));
        }
        max = Math.Max(right - left + 1, max);
    }
    return max;
};