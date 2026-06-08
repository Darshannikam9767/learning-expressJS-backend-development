var art = require("figlet")
art("DARSHAN",(e,d)=>{
    if(e){
        console.log("Something went wrong...");
        console.dir(e)
        return;
        
    }
    console.log(d);
    
})