const time = document.getElementById('time');
const day = document.getElementById('date');
const weekday = document.getElementById('weekday');

function showTime() {
    let today = new Date(), hour = today.getHours(), minutes = today.getMinutes(), seconds = today.getSeconds(), 
    dates = today.getDate(), months = today.getMonth()+1, years = today.getFullYear();

    const weekdays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

    time.innerHTML = `${hour}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)}`;
    day.innerHTML = `${addZero(dates)}<span>.</span>${addZero(months)+1}<span>.</span>${years}<span> and it is </span>${weekdays[today.getDay()]}`;   
    
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return(parseInt(n,10) < 10 ? '0' : '') + n;
}

showTime();