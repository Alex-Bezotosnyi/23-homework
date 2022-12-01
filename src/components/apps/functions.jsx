function randomValueBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function getDate(dateMin, dateMax) {
    dateMax = dateMax || new Date().toLocaleDateString();
    dateMin = new Date(dateMin).getTime();
    dateMax = new Date(dateMax).getTime();
    let options = {day: "numeric", month: "numeric", year: "numeric"}
    if (dateMin > dateMax) {
        return new Date(randomValueBetween(dateMax, dateMin)).toLocaleDateString(dateMax, options);
    } else {
        return new Date(randomValueBetween(dateMin, dateMax)).toLocaleDateString(dateMax, options);
    }
}

function DateNow() {
    let options = {day: "numeric", month: "numeric", year: "numeric"}
    return new Date().toLocaleDateString(Date.now(), options);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1
}

export {
    DateNow,
    getDate,
    getRandomNumber,
}