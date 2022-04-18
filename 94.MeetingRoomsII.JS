class Interval {
    constructor(start,end) {
        this.start = start
        this.end = end
    }
}
class meetingRooms {
     minMeetingRooms = function(intervals){
         let n = intervals.length;
         let start = new Array(n);
         let end = new Array(n);
         for (let k = 0; k < n; k++)
         {
             start[k] = intervals[k].start;
             end[k] = intervals[k].end;
         }
         start.sort();
         end.sort();
         let i = 0, j = 0, res = 0;
         while (i < n)
         {
             if (start[i] < end[j]) i++;
             else if (start[i] > end[j]) j++;
             else
             {
                 i++;
                 j++;
             }
             res = Math.max(res, i - j);
         }
         return res;
     }
}
const p =new meetingRooms();
let data = [
    new Interval(0, 30),
    new Interval(5, 10),
    new Interval(15, 20)

    //new Interval(5,8),
    //new Interval(9,15),
];

console.log(p.minMeetingRooms(data));