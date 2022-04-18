let intervalIntersection = function(firstList, secondList) {
    if(firstList == null || secondList == null)
        return 0;
    let res = [];
    let idx1 = 0, idx2 = 0;
    while(idx1 < firstList.length && idx2 < secondList.length) {
        let start1 = firstList[idx1][0];
        let end1 = firstList[idx1][1];

        let start2 = secondList[idx2][0];
        let end2 = secondList[idx2][1];
        if(start1 <= end2 && start2 <= end1)
        {
            let start = Math.max(start1, start2);
            let end = Math.min(end1, end2);
            res.push([start, end]);
        }

        if(end1 <= end2)
            idx1++;
        else
            idx2++;

    }
    return res;

};

let firtList = [[0,2],[5,10],[13,23],[24,25]], seconList = [[1,5],[8,12],[15,24],[25,26]];
console.log(intervalIntersection(firtList,seconList));