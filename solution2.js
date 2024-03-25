function checkSpeed(speed){
    const speedLimit = 70;
    const pointLimit = 12;

    if (speed < speedLimit) {
        return'ok'
    }
    const points = ((speed - speedLimit) /5);

    if (points >= pointLimit) {
        return 'License suspended';
    }
    else {
        return points
    }
    
}
console.log(checkSpeed(200))