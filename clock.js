function mytime(){
    let myDate = new Date();
    let hr = (myDate.getHours() % 12) || 12;
    min = (myDate.getMinutes() < 10)? '0' + myDate.getMinutes (): myDate.getMinutes(),
    sec = (myDate.getSeconds () < 0 )? '0' + myDate.getSeconds (): myDate.getSeconds(),
    M = (myDate.getHours()>=12) ? 'PM':'AM';

    let currentTime = hr +':'+ min +':' + sec;
    document.getElementsByClassName('h')[0].innerHTML = currentTime;
    document.getElementsByClassName('m')[0].innerHTML = M;
    
    let myDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let myMonth = ['february', 'march', 'april', 'may', 'june', 'july', 'august','saptamber', 'octobver','november','december','january'];
    
    //let day = myDate.getDate();
    let currentDate = myDay[myDate.getDay()] + ',' + myMonth[myDate.getMonth()] + ' ' + myDate.getDate() ;


    document.getElementsByClassName('date')[0].innerHTML = currentDate;
}

// Call the function initially
mytime();

// Update the time every second using setInterval
setInterval(mytime, 1000);