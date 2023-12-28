
const text = document.querySelector('.texttype');

const txt  =["HI, THERE!", "It is not in the still calm of life, or in the repose of a pacific station, that great characters are formed."];   
		
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
