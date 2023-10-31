// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
        return fare * multiplier
    }
}
function fareDoubler(fare) {
    return createFareMultiplier(2) (fare)
}
function fareTripler(fare) {
    return createFareMultiplier(3) (fare)
}
let selectDifferentDrivers = (drivers, fn) => {
    return fn(drivers)
}