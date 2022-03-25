# -*- coding: utf-8 -*-

import requests,json

url = 'http://open.iciba.com/dsapi/'   # 目标网站，？wd=后面为参数，可以使用params，不过看起来不舒服
r = requests.get(url)    # 发送请求，将准备好的url与headers参数放入
r = json.loads(r.text)    # 返回url地址
r1 = r['picture4']
r2 = requests.get(r1)
open('./img.jpg', 'wb').write(r2.content)
r3 = r['content']

str = """
<!DOCTYPE HTML>
<html>
	<head>
		<title>Ding Zihao</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<link rel="shortcut icon" href="https://www.dingzihao.cn/images/c.png" />
		<link rel="stylesheet" href="https://www.dingzihao.cn/assets/css/main.css">
		<noscript><link rel="stylesheet" href="https://www.dingzihao.cn/assets/css/noscript.css"></noscript>
		<style>
        .text{
          display: inline-block;
          position: relative;
          font-size: 40px;
          height: 60px;
          line-height: 60px;
          color: rgb(245, 245, 245);
        }
        .text::after{
            content: '';
            position: relative;
            right: -10px;
            top: 5px;
            height: 50px;
            width: 3px;     
            background-color: #fff;
            animation: san 0.5s steps(1) infinite;
        }
	@keyframes san{
            0%,100%{
                background-color: #fff;
            }
            50%{
               background-color: transparent;
            }
        }
    </style>
	</head>
	<body class="is-preload">
		<!-- Wrapper -->
			<div id="wrapper">
				<!-- Header -->
					<header id="header">
						<div class="logo">
							<span class="icon fa-gem"></span>
						</div>
						<div class="content">
							<div class="inner">
								<h1>Ding Zihao's Personnel WebSite</h1>
								<h5><span class="text" ></span></h5>
							</div>
						</div>
						<nav>
							<ul>
								<li><a href="#intro">What Are You Thinking?</a></li>
							
								<!--<li><a href="#elements">Elements</a></li>-->
							</ul>
						</nav>
					</header>
				<!-- Main -->
					<div id="main">
						<!-- Intro -->
							<article id="intro">
								<h2 class="major">Anonymous</h2>
								<span class="image main"><img src="https://www.dingzihao.cn/images/pic01.jpg" alt=""></span>
								<p>Nothing is here.</p>
							</article>
						
					</div>
				<!-- Footer -->
					<footer id="footer">
						<p class="copyright">&copy; Welcome to <a href="https://www.dingzihao.cn/" target="_blank" title="Ding Zihao's personnel website">DingZihao.cn</a> - This website hosted on <a href="https://www.github.com/" title="Github" target="_blank">Github</a></p>
					</footer>
			</div>
		<!-- BG -->
			<div id="bg"></div>
			
		<!-- Scripts -->
			<script src="https://www.dingzihao.cn/assets/js/jquery.min.js"></script>
			<script src="https://www.dingzihao.cn/assets/js/browser.min.js"></script>
			<script src="https://www.dingzihao.cn/assets/js/breakpoints.min.js"></script>
			<script src="https://www.dingzihao.cn/assets/js/util.js"></script>
			<script src="https://www.dingzihao.cn/assets/js/main.js"></script>
			<script>
        const text = document.querySelector('.text');
"""

t = '        const txt  =["%s", "%s"];'%('HI, THERE!', r3) 

str2 = """       
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
    </script>
			
	</body>
</html>
"""
f = open('index.html', 'w')
f.write(str)
f.write(t)
f.write(str2)
f.close
