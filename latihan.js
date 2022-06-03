// const tgl = Date.now('2019-01-02');
// console.log(tgl);

const dates = [
    "2019-01-02", // 1546387200 (epoch time, dalam detik)
    "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
    "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
    "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
    "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
  ];

const tesDate = function (dates, select=NaN) {
    
    let index = 0 ;
    let result = [];
    while (index < dates.length) {
        result.push(Date.parse(dates[index])/1000);
        index++;
    }
    console.log(typeof(select));
    return isNaN(select
        )? result.sort().join('-') : result[select].toString(); 
}

console.log(tesDate(dates, 'a'));