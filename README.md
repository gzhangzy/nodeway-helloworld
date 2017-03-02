nodeway-helloworld: 第一个用nodeway实现的微服务
===============================================
```
第一个用nodeway实现的微服务，需要安装nodeway运行。
```
Installing
----------
```
# 如果已经安装过nodeway，请跳过此步。
# npm install nodeway -g

# 安装nodeway-helloworld
# npm install nodeway-helloworld
```
Using
-----
```
# 启动微服务
# nodeway --config ~/node_modules/nodeway-helloworld/config.js &
```
Test
----
```
# 本地调用测试
# node ~/node_modules/nodeway-helloworld/test_from_local.js

# 在nodejs中调用测试
# node ~/node_modules/nodeway-helloworld/test_from_nodejs.js

# 使用浏览器调用https://nodeway.org/index.html测试
```
## License

MIT © [May xiaoya zhang](john.zhang@yishizhencang.com)
