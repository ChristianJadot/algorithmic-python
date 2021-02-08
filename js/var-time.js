var sec = new Date();
    var hours = sec.getHours()*(60*60);
    var minutes = sec.getMinutes()*60;
    var seconds = sec.getSeconds();
    var secSinceMidnight = hours+minutes+seconds;
    console.log(secSinceMidnight);