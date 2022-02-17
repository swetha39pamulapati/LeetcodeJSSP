class Interval {
    constructor(start,end) {
        this.start = start
        this.end = end
    }
}
class meetingRooms {

    canAttendMeetings(intervals) {
        // Write your code here
        let starts = new Array(intervals.length);
        let ends = new Array(intervals.length);
        for (let i = 0; i < intervals.length; i++) {
            starts[i] = intervals[i].start;
            ends[i] = intervals[i].end;
        }
        //starts.sort();
        //ends.sort();
        for (let i = 0; i < starts.length-1; i++) {
            if (starts[i + 1] < ends[i])
                return false;
        }
        return true;
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

console.log(p.canAttendMeetings(data));