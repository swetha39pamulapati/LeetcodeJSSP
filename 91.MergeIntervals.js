class Interval {
    constructor(start,end) {
        this.start = start
        this.end = end
    }
}
class mergeInter {
    merge(intervals){
        intervals.sort((a, b) => a[0] - b[0])
        const res = [intervals[0]];
        let prev;
        for (let curr of intervals) {
            prev = res[res.length - 1]
            if (prev[1] >= curr[0]) {
                prev[1] = Math.max(curr[1], prev[1])
            } else {
                res.push(curr)
            }
        }
        return res
    }
}
const p =new mergeInter();
let data = [
    new Interval(1, 3),
    new Interval(2, 6),
    new Interval(8, 10),
    new Interval(15,18),
];

console.log(p.merge(data));