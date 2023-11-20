
const text = document.querySelector('.texttype');

const txt  =["HI, THERE!", "A man, as a general rule, owes very little to what he is born with – a man is what he makes of himself."];   
		
var index=0;
var xiaBiao= 0;
var huan = true;

setInterval(function(){

    if(huan){      
        text.innerHTML = txt[xiaBiao].slice(0,++index);
        console.log(index);
    }
    else{
        text.innerHTML = txt[xiaBiao].slice(0,index--);
        console.log(index);
    }
    if(index==txt[xiaBiao].length+3)
    {
        huan = false;
    }
    else if(index<0)
    {
        index = 0;
        huan = true;
        xiaBiao++;
        if(xiaBiao>=txt.length)
        {
            xiaBiao=0; 
        }
    }
},150)
