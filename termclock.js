function currentTime() //define the function
{
    const date = new Date(); // get date as string
    let hh = date.getHours(); //get the hour variable
    let mm = date.getMinutes(); //get the minute variable
    let ss  =date.getSeconds(); //get the second variable
    let session = ' AM'; //store the AM or PM tag
    
    if (hh == 0)
    {
        hh = 12; //if the time is less or equals to 12 hrs, assign AM
    }

    if (hh > 12)
    {
        hh = hh -12;
        session = ' PM'; //if the time is more than 12 hrs, assign PM
    }

    hh = (hh < 10) ? "0" + hh:hh; //add a 0 for digit less than 10
    mm = (mm < 10) ? "0" + mm:mm; //add a 0 for digit less than 10
    ss = (ss < 10) ? "0" + ss:ss; //add a 0 for digit less than 10
    
    //create a variable to store the time
    let time = hh + ":" + mm + ":" + ss + session;
    //print out the time in console, return carriage
    process.stdout.write('Time: ' + time + "\r"); 
     //set time out to update the value every 1000 ms
    var t = setTimeout(function(){ currentTime() }, 1000); 
   
}
currentTime(); //run the function
console.log('Press Ctrl+C to quit');
