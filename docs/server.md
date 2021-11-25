---
id: server
title: server项目
---

> **server文件夹为Golang后端项目,需要有Golang基础,Goframe框架基础**

## server项目结构

```shell
├── app
│   ├── api
│   │   ├── extra
│   │   ├── internal
│   │   ├── request
│   │   ├── response
│   │   └── system
│   ├── model
│   │   ├── extra
│   │   └── system
│   └── service
│       ├── extra
│       └── system
├── boot
│   └── internal
├── cmd
├── config
├── integration
├── interfaces
├── library
├── logs
├── packed
├── public
├── router
├── swagger
├── template
```

| 文件夹       | 说明                    | 描述                        |
| ------------ | ----------------------- | --------------------------- |
| `app` | 业务逻辑层 | 所有的业务逻辑存放目录。 |
| `-api`      | 业务接口               | 接收/解析用户输入参数的入口/接口层。 |
| `--extra` | 扩张模块api层代码 | 文件上传下载,断点续传, 邮件,excel表格导入导出 |
| `--internal` | api层私有代码 | 存放一下只能在api文件夹下 |
| `--request` | 入参 | 接收前端发送到后端的数据结构 |
| `--response` | 出参 | 返回给前端的数据结构 |
| `--system` | 系统模块api层代码 | jwt, casbin, 字典, 角色, 用户, 菜单等等 |
|  |  |  |
| `-model` |  |  |
| `--extra` | 扩张模块 模型结构体 | 文件上传下载,断点续传, 邮件,excel表格导入导出 |
| `--system` | 系统模块 模型结构体 | jwt, casbin, 字典, 角色, 用户, 菜单等等 |
|  |  |  |
| `-service` |  |  |
| `--extra` | 扩张模块 模型结构体 | 文件上传下载,断点续传, 邮件,excel表格导入导出 |
| `--system` | 系统模块 模型结构体 | jwt, casbin, 字典, 角色, 用户, 菜单等等 |
|  |  |  |
| `boot` | 初始化包 | 用于项目初始化参数设置，往往作为`main.go`中第一个被`import`的包。 |
| `-internal` | boot层私有代码 | 自定义gorm的log |
|  |  |  |
| `cmd` | gfva 命令行工具 | 用于初始化数据使用 |
| `integration` | 集成封装 | 比如oss封装, 雪花id等等 |
| interfaces | 接口定义 | 全部接口定义层 |
| `library` | 公共库包 | 公共的功能封装包，往往不包含业务需求实现。 |
| logs | 日志 | goframe 框架产生的所有日志 |
| `packed` | 打包目录            | 将资源文件打包的`Go`文件存放在这里，`boot`包初始化时会自动调用。 |
| public | 静态目录            | 仅有该目录下的文件才能对外提供静态服务访问。                 |
| `router`      | 路由层              | 路由层                                                       |
| `swagger`    | swagger文档目录         | swagger文档目录 |
| `template` | 模板文件 | 代码生成器模板 |
|  |  |  |
| `Dockerfile` | 镜像描述 | 云原生时代用于编译生成Docker镜像的描述文件。 |
| `go.mod` | 依赖管理 | 使用`Go Module`包管理的依赖描述文件。 |
| `main.go` | 入口文件 | 程序入口文件。 |

## 本文使用的环境

- 数据库选择mysql

- Goland(2020.2)

## 1. 初始化server项目

- Goland打开server文件夹
- 设置GOPROXY
	- windows:打开File → settings → Go → Go Modules，将 Environment 项的值设置为`GOPROXY=https://goproxy.io,direct`
	- Mac: 打开Goland→Preferences...→Go → Go Modules,将Environment项的值设置为`GOPROXY=https://goproxy.io,direct`
- 打开go.mod文件,在文件空白处鼠标右键点击`Go Mod Tidy`
- ![](../static/img/GoModTidy.png)

## 2. config.yaml

- 按照 [config的详细说明](./config) 按需修改,

## 3. 数据库初始化

#### V2.3.4~master

配置好 `server/config/config.yaml` 的 `datebase` 下的 `host` ,`name`,  `port`, `user ` ,`pass`,其他的按需修改,我们 [flipped-aurora](https://github.com/flipped-aurora) 团队为各位使用者准备好了脚本

`windows` 用户

方式一(不可见错误报错):

- ```go
  // 开启 Go Modules模式并设置代理
  go env -w GO111MODULE=on
  go env -w GOPROXY=https://goproxy.io,direct
  ```

- 直接运行 `server` 目录下的 `initdb.sh`

方式二(可见错误报错):

- 以server为项目打开的,打开Goland的终端
```shell script
initdb.sh
```

`linux`, `mac` 用户

```shell
# 在server项目下,先构建gfva终端工具, 并进行初始化数据, 如果gfva终端工具构建失败,则不会进行初始化数据
make gfva
```

:::danger 注意

mysql>=5.7版本的数据库，一定情况下会初始化失败，此时注意数据库编码设置为utf8-mb4，忽略掉时间0值校验，即可解决问题。使用命令行工具运行initdb，或者make可以查看到报错内容。

:::

> 说明-今后都会使用gfva终端工具进行初始化数据,理由如下:
- 方便新增数据，而不需要跟以前一样修改 `.sql` 文件
- gva终端初始化数据是通过代码+gorm的事务进行添加数据，大概率不同版本的mysql之间一些问题的，规避了字符集的问题问题而导致数据的导入失败，或者乱码问题

## 4. 启动server项目

- 完成后打开main.go, 在文件空白处鼠标右键点击`运行'go build main.go'`,或者使用图中红色框的右边的快捷键组合进行启动项目或者打开goland的终端,输入命令`go run main.go`
- ![](../static/img/GoRunMain.png)

## 5. 生成swagger自动化API文档

### 5.1 安装 swagger

- 可以翻墙
````
go get -u github.com/swaggo/swag/cmd/swag
````

- 无法翻墙
由于国内没法安装 go.org/x 包下面的东西，推荐使用 [goproxy.io](https://goproxy.io/zh/) 或者 [goproxy.cn/](https://goproxy.cn/)

```bash
# 如果您使用的 Go 版本是 1.13 及以上(推荐)
# 启用 Go Modules 功能
go env -w GO111MODULE=on 
# 配置 GOPROXY 环境变量
go env -w GOPROXY=https://goproxy.io,direct

# 使用如下命令下载swag
go get -v github.com/swaggo/swag/cmd/swag
```

### 5.2 下载gf工具集

[下载教程](https://goframe.org/pages/viewpage.action?pageId=1114260)

### 5.3 生成API文档

````
cd server
gf swagger
````
执行上面的命令后，server目录下会出现docs文件夹，打开浏览器输入 [http://localhost:8888/swaggerl](http://localhost:8888/swagger)，即可查看swagger文档

:::danger 您可能遇到的问题
1. 启动时报数据库启动失败，请检查是否创建qmsql数据库，或者是否是您自行配置的数据库
2. 登录时用户名密码错误，请检查数据库文件是否导入
:::
