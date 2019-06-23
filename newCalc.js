function moveyy () {
   
    var move1 = document.querySelector('#first');
    var fwidth = window.getComputedStyle(move1, null).getPropertyValue('width');
    var move2 = document.querySelector('#second');
    var move3 = document.getElementsByClassName('smt');

    if (fwidth == '199px') {
        move1.style.width = '23.69px';
        move1.style.fontSize = '7.5px';
        move2.style.width = '210px';
        for(i =0; i<move3.length; i++){
            move3[i].style.fontSize = '14.4px'; 
          
        };

    } else if(fwidth !== "199px") {
        move1.style.width = '199px';
        move1.style.fontSize = '16px';
        move2.style.width = '65px';
        for(i =0; i<move3.length; i++){
            move3[i].style.fontSize = '6px'; 
        };

    }
}
var answer;
var res = true;
function onF (a) {
if (a == 'n') {
    dp.value = "welcome";
} else {
    dp.value = "See you again soon";
    dp.value = "";
}

   
   
    
}

function getNo (n){
    if(dp.value.match('welcome')) {
        dp.value += n;
     var der = dp.value.replace("welcome", "");
     dp.value = der;
          
        } else if ((/\d$|[*|+|\-|/|.]$/).test(dp.value) && res) {
            dp.value += n;
            
            
        } else if ((/\d$/).test(dp.value) && !res) {
      
        dp.value = n;
        res = true;
    }  else if ((/[*|+|\-|/|.]$/).test(dp.value) && !res) {
    
    dp.value += n;
    res = true;
    }
    if ((/[*|+|\-|/|]\d+$/).test(dp.value)) {
        pdp.value = eval(dp.value);
    } 
}

  
    



function getDec (n) {
    
    // if (!(/\./).test(dp.value) || dp.value =="") {
    //     dp.value += n;

    // }  else if ((/\./).test(dp.value) && (/(?=\.)(\D)(\d$)/).test(dp.value)) {
    //         // dp.value += n;
    //         console.log('yeah')
    //     }
    if(!(/\.$/).test(dp.value)) {
    dp.value+= n;


 }
}

function arith (a) {

    if (a == "-") {
        dp.value += a;
        var der = dp.value.replace("welcome", "");
        dp.value = der;
    }
    if (!dp.value.match('welcome')) {
 
    if ((/(?=\d$)/).test(dp.value)) {
        dp.value += a; 
     } else if ((/(?=[^\d]|[.]$)/).test(dp.value)) {
        var bc = dp.value.substr(0, dp.value.length-1);
        dp.value = bc;
        dp.value+= a;
     } 
    
    }
}

function backS () {
    if(dp.value) {
   var bc = dp.value.substr(0, dp.value.length-1);
   dp.value = bc;
    }
}




function equals () {

    if(dp.value) {
   
    if ((/(?=\d$)/).test(dp.value)) {
        dp.value  = eval(dp.value);
   
}else {
dp.value = eval(dp.value.substr(0, dp.value.length-1));
}
 answer = dp.value;
res = false;
   
}
pdp.value ="";

}










