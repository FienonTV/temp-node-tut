const os = require('os') 

//Info about current user

const user = os.userInfo();

console.log(user);


//Get System uptime and in seconds and calculate it in Hours


function getUptime() {
    let rest = os.uptime()
    console.log("Die aktuelle Systemlaufzeit beträgt: ");
    if (rest > 3600) {
        console.log(parseInt(rest/3600) + " Stunden")
        rest %= 3600
    }
    else {
        console.log("0 Stunden");
    }

    if(rest > 60) {
        console.log(parseInt(rest / 60)+ " Minuten")
        rest %=60
    }
    else {
        console.log("0 Minuten"); 
    }
    if(rest > 0) {
        console.log(rest + " Sekunden");
    }    
    else {
        console.log("0 Sekunden"); 
    }
}

getUptime();

//Get OS Information

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem()/(1000*1000) + " MB",
    freeMem:os.freemem()/(1000*1000) + " MB",
}

console.log(currentOS);