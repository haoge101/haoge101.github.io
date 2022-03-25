# -*- coding: utf-8 -*-

import requests,json

url = 'http://open.iciba.com/dsapi/'   # 目标网站，？wd=后面为参数，可以使用params，不过看起来不舒服
r = requests.get(url)    # 发送请求，将准备好的url与headers参数放入
r=json.loads(r.text)    # 返回url地址
r=r['picture4']
r = requests.get(r)

open('./img.jpg', 'wb').write(r.content)
