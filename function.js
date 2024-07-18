let lap1 = 50;
let lap2 = 65;
let lap3 = 43;

// membuat codingan agar tidak lebih panjang atau lebih mempermudah
function getTotalLap(){
    let totalLapTimes = lap1 + lap2 + lap3;
    console.log(totalLapTimes);
}

getTotalLap()

// latihan scrimba
let lapsCompleted = 0;

function incrementLaps(){
    lapsCompleted += 1;
}

incrementLaps()
incrementLaps()
incrementLaps()

console.log(lapsCompleted);
// latihan scrimba