# -*- coding: utf-8 -*-

import requests,json

url = 'http://open.iciba.com/dsapi/'   # 目标网站，？wd=后面为参数，可以使用params，不过看起来不舒服
r = requests.get(url)    # 发送请求，将准备好的url与headers参数放入
r = json.loads(r.text)    # 返回url地址
r1 = r['picture4']
r2 = requests.get(r1)
open('./img.jpg', 'wb').write(r2.content)
r3 = r['content']

str="""
$(function(){
        const text = document.querySelector('.texttype');
"""
t="""
        const txt  =["HI, THERE!", "%s"];   
"""%(r3)		
str2="""		
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
});
"""

f = open('roll.js', 'w')
f.write(str)
f.write(t)
f.write(str2)
f.close
