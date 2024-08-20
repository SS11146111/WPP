var countDays = function()
{
    let today = new Date();
    let christmas = new Date("2024-12-25");

    let timeDiff=christmas.getTime()-today.getTime();

    let secondsInDay = 24*60*60*1000;

    let noOfDays=Math.ceil(timeDiff/secondsInDay);

    console.log("Number of days left until Christmas : ",noOfDays);
}

countDays();