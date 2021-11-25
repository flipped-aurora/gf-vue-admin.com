---
id: introduce
title: 项目介绍
---
<div align="center">

![](../static/guanwang/gfvalogo.png)

</div>

<div align="center">
<img src="https://img.shields.io/badge/vue-2.6.10-brightgreen"/>
&nbsp;
<img src="https://img.shields.io/badge/element--ui-2.12.0-green"/>
&nbsp;
<img src="https://img.shields.io/badge/golang-1.16-blue"/>
&nbsp;
<img src="https://img.shields.io/badge/goframe-1.15.3-lightBlue"/>
&nbsp;
<img src="https://img.shields.io/badge/gorm-1.20.12-red"/>
</div>

<p></p>

:::tip 缘起

在平时的开发工作中，无论做什么项目，都需要搭建一套后台管理系统，其中鉴权，动态路由，角色等等功能都是大同小异的，并且有大量的重复curd代码，因此下定决心，搞出了现在的gf-vue-admin
:::



GF-VUE-ADMIN是一个基于 [goframe](https://goframe.org/) 和vue开发的全栈前后端分离的后台管理系统，拥有jwt鉴权，动态路由，动态菜单，casbin鉴权，表单生成器，代码生成器等功能，提供了多种示例文件，让大家把更多时间专注在业务开发上。



#### 测试环境

在线测试地址:[http://demo.gf-vue-admin.com/](http://demo.gin-vue-admin.com/) (若环境崩溃请联系微信：SliverHorn, QQ: 503551462)

账号：admin  密码：123456

#### 联系我们

qq群：1040044540(gf-vue-admin开源项目交流群)

微信：SliverHorn 添加后拉你进微信群

:::danger 提示

为了方便大家查看文档，项目会默认打开文档网站页面，如果不需要打开，请将前端目录下package.json

script部分

"serve": "start https://www.gf-vue-admin.com && vue-cli-service serve"

替换为

"serve": "vue-cli-service serve"
:::

