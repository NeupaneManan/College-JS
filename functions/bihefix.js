let status1=prompt("k tapai employed hoo")
let sampati1=prompt("Tapai ko bankbalance kati xaa?")

function decision(status, sampati){
    if(status==true && sampati>=10000000){
        console.log("Daddy pandit bolaunu aile naii bihe garxu");
    }
    else if(status== false && sampati>=10000000){
        console.log("Daddy ma yeii kta sangha bihe garne")
    }
    else if(status== true && sampati < 10000000){
        console.log("Ekdui din paxi vanxu lah");
    }
    else{
        console.log("Sorry lah you're not eligible")
    }
}
    decision (status1, sampati1);
