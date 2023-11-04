
const text = document.querySelector('.texttype');

const txt  =["HI, THERE!", "Eloquent speech is not from lip to ear, but rather from heart to heart."];   
		
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
