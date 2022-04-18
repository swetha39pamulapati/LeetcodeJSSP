let LeastInterval = function(tasks,  n) {

    let maxFreq = 0, interval = 0, cnt = 0;
   let freq = new Array(26).fill(0);
   tasks.forEach(function(t) {
        freq[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;

        if (freq[t.charCodeAt(0) - 'A'.charCodeAt(0)] > maxFreq)
        {
            maxFreq = freq[t.charCodeAt(0) - 'A'.charCodeAt(0)];
            cnt = 1;
        }
        else if (freq[t.charCodeAt(0) - 'A'.charCodeAt(0)] == maxFreq)
            cnt++;
    })
    interval = (maxFreq - 1) * (n + 1) + cnt;
    return interval < tasks.length ? tasks.length : interval;
}
tasks = ["A","A","A","B","B","B"], n = 2
console.log(LeastInterval(tasks,n));