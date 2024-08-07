let count=1;
let intervalid=setInterval(function()
    {
        let multipleoffive=count*5;
        console.log(multipleoffive);
        count++;
        if(multipleoffive===50)
            clearInterval(intervalid);
    },1000);




