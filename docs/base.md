---
id: base
title: 快速了解
---

## 项目介绍

GIN-VUE-ADMIN 是一款基于GIN+VUE+ElementUI开发的后台管理系统快速开发脚手架

* GitHub地址: [https://github.com/flipped-aurora/gf-vue-admin](https://github.com/flipped-aurora/gf-vue-admin)
* Gitee地址: [https://gitee.com/flipped-aurora/gf-vue-admin](https://gitee.com/flipped-aurora/gf-vue-admin)
* 在线测试地址: [http://demo.gf-vue-admin.com/](http://demo.gf-vue-admin.com/)
* 用户名：admin 
* 密码：123456

GF-VUE-ADMIN是一个基于 [goframe](https://goframe.org) 和vue开发的全栈前后端分离的后台管理系统，拥有jwt鉴权，动态路由，动态菜单，casbin鉴权，表单生成器，代码生成器等功能，提供了多种示例文件，让大家把更多时间专注在业务开发上。

## 视频教程

- 待更新


## 技术选型

- 前端：用基于`vue`的`Element-UI`构建基础页面。
- 后端：用`Goframe`快速搭建基础restful风格API，`Goframe` 是一个go语言编写的Web框架。
- 数据库：采用`MySql`(8.0.13)版本，使用`gdb` 与`gorm` 实现对数据库的增删改查操作。
- 缓存：使用`Redis`实现记录当前活跃用户的`jwt`令牌并实现多点登录限制。
- API文档：使用`Swagger`构建自动化文档。
- 配置文件：使用`fsnotify`和`viper`实现`yaml`格式的配置文件。
- 日志：使用`glog`实现日志记录。

## 主要功能
- 权限管理：基于`jwt`和`casbin`实现的权限管理 
- 文件上传下载：实现基于`七牛云` `本地` `阿里云` `Minio` 的文件上传操作
- 分页封装：前端使用mixins封装分页，分页方法调用mixins即可 
- 用户管理：系统管理员分配用户角色和角色权限。
- 角色管理：创建权限控制的主要对象，可以给角色分配不同api权限和菜单权限。
- 菜单管理：实现用户动态菜单配置，实现不同角色不同菜单。
- api管理：不同用户可调用的api接口的权限不同。
- 配置管理：配置文件可前台修改（测试环境不开放此功能）。
- 富文本编辑器：MarkDown编辑器功能嵌入。
- 条件搜索：增加条件搜索示例。
- restful示例：可以参考用户管理模块中的示例API。 
```
前端文件参考: src\view\superAdmin\api\api.vue 
后台文件参考: model\dnModel\api.go 
```
- 多点登录限制：需要在`config.yaml`中把`system`中的`useMultipoint`修改为true (需要自行配置Redis和Config中的Redis参数, 有bug请及时反馈)。
- 分片长传：提供文件分片上传和大文件分片上传功能示例。
- 表单生成器：表单生成器借助 [@form-generator](https://github.com/JakHuang/form-generator)。
- 代码生成器：后台基础逻辑以及简单curd的代码生成器。 

## 项目架构

### 系统架构图

![系统架构图](../static/guanwang/gin-vue-admin.png)

### 前端详细设计图 （提供者:<a href="https://github.com/baobeisuper">baobeisuper</a>）

![前端详细设计图](../static/guanwang/naotu.png)

## 部署教学

### 前端

在web目录下执行 npm run build 得到 dist文件夹 将dist文件夹上传到服务器 建议使用nginx进行代理 并且设置 proxy 把请求代理到后端

### 后端

在 server下 go build 得到一个可执行文件 然后将可执行文件和config.ymal 以及 resource 文件夹上传至服务器 三者最好放在同一路径下 最终服务器目录结构可能如下 

```shell

    ├── breakpointDir  // 后续断点续传自动生成
    ├── chunk   // 后续断点续传自动生成
    ├── fileDir   // 后续断点续传自动生成
    ├── finish   // 后续断点续传自动生成
    ├── resource
    │   └── 子目录文件					
    ├── dist
    │   └── 子目录文件
    ├── gf-vue-admin
    ├── config.ymal
    
```