numberOfSeries = +prompt("How many series have you seen? ");

const seriesDB = {
    count : numberOfSeries,
    series: {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt("The last series you watched: ");
const b = prompt("Канчалык баа бересин ?: ");
const c = prompt("The last series you watched: ");
const d = prompt("Канчалык баа бересин ?: ");

seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);