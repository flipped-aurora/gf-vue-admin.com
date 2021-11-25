---
id: config
title: server/config.yaml
---

## JWT

### yaml

```yaml
# jwt configuration
jwt:
  expires-at: 1 # 3600000000000秒 == 1天 默认设置为1天
  refresh-at: 168 # 3600000000000秒 == 1天 , 24 * 7 = 168 刷新的token设置为一星期
  signing-key: 'SliverHorn'
```

### struct

```go
type Jwt struct {
	ExpiresAt  int    `mapstructure:"expires-at" json:"expiresAt" yaml:"expires-at"`
	RefreshAt  int    `mapstructure:"refresh-at" json:"refreshAt" yaml:"refresh-at"`
	SigningKey string `mapstructure:"signing-key" json:"signingKey" yaml:"signing-key"`
}
```

### description

| 配置名      | 类型   | 说明      |
| :---------- | :----- | :-------- |
| expires-at  | int    | 过期时间  |
| refresh-at  | int    | 刷新时间  |
| signing-key | string | jwt的签名 |

## Redis

### yaml

```yaml
# redis configuration
redis:
  db: 0
  address: '127.0.0.1:6379'
  password: ''
```

### struct

```go
type Redis struct {
	DB       int    `mapstructure:"db" json:"db" yaml:"db"`
	Address  string `mapstructure:"address" json:"address" yaml:"address"`
	Password string `mapstructure:"password" json:"password" yaml:"password"`
}
```

### description

| 配置名   | 类型   | 说明                |
| -------- | ------ | ------------------- |
| db       | int    | redis的哪个数据库   |
| address  | string | redis连接地址及端口 |
| password | string | 密码                |

## Email

### yaml

```yaml
# email configuration
email:
  to: 'xxx@qq.com'
  port: 465
  from: 'xxx@163.com'
  host: 'smtp.163.com'
  is-ssl: true
  secret: 'xxx'
  nickname: 'test'
```

### struct

```go
type Email struct {
	To       string `mapstructure:"to" json:"to" yaml:"to"`
	Port     int    `mapstructure:"port" json:"port" yaml:"port"`
	From     string `mapstructure:"from" json:"from" yaml:"from"`
	Host     string `mapstructure:"host" json:"host" yaml:"host"`
	IsSSL    bool   `mapstructure:"is-ssl" json:"isSSL" yaml:"is-ssl"`
	Secret   string `mapstructure:"secret" json:"secret" yaml:"secret"`
	Nickname string `mapstructure:"nickname" json:"nickname" yaml:"nickname"`
}
```

### description

| 配置名   | 类型   | 说明                                                         |
| -------- | ------ | ------------------------------------------------------------ |
| to       | string | 邮件接收者,可以是多个,<br />以英文逗号(,)进行区分,最好别带空格,如果是一个邮箱最后请不要加英文逗号(,) |
| port     | int    | 邮件服务端口                                                 |
| from     | string | 用户名                                                       |
| host     | string | 邮箱的主服务器地址                                           |
| is-ssl   | bool   | 是否使用ssl                                                  |
| secret   | string | 密码                                                         |
| nickname | string | 对方收到的昵称                                               |

## Casbin

### yaml

```yaml
# casbin configuration
casbin:
  model-path: './public/rbac_model.conf'
```

### struct

```go
type Casbin struct {
	ModelPath string `mapstructure:"model-path" json:"modelPath" yaml:"model-path"`
}
```

### description

| 配置名     | 类型   | 说明                                                         | 建议是否修改 |
| ---------- | ------ | ------------------------------------------------------------ | ------------ |
| model-path | string | 存放casbin模型的相对路径<br />默认值为`./resource/rbac_model.conf` | 不推荐修改   |

## System

### yaml

```yaml
# system configuration
system:
  env: 'public' # Change to 'develop' to skip authentication for development mode
  db-type: 'mysql'
  oss-type: 'local'
  error-to-email: false
  use-multipoint: false
```

### struct

```go
type System struct {
	Env           string `mapstructure:"env" json:"env" yaml:"env"`
	DbType        string `mapstructure:"db-type" json:"dbType" yaml:"db-type"`
	OssType       string `mapstructure:"oss-type" json:"ossType" yaml:"oss-type"`
	ErrorToEmail  bool   `mapstructure:"error-to-email" json:"errorToEmail" yaml:"error-to-email"`
	UseMultipoint bool   `mapstructure:"use-multipoint" json:"UseMultipoint" yaml:"use-multipoint"`
}
```

### description

| 配置名         | 类型   | 说明                                                         |
| -------------- | ------ | ------------------------------------------------------------ |
| env            | string | 更改为“develop”以跳过开发模式的身份验证                      |
| addr           | int    | 后端端口,默认8888                                            |
| db-type        | string | 可以使用mysql/postgresql/sqlite/sqlserver,<br />mysql: 完美支持<br />postgresql:可以自行配置,但有代码不兼容,需自行测试并修改<br />sqlite:sqlite需要gcc支持 windows用户需要自行安装gcc,<br />还需要在server/core/gorm.go把注册的初始化sqlite的方法<br />sqlserver:可以自行配置,可能有代码不兼容,需自行测试并修改 |
| oss-type       | string | 可以指定上传头像的oss为local/qiniu/aliyun/minio<br />local:本地的 `local.path` 目录<br />qiniu:七牛云<br />aliyun与minio可能框架不会集成,需自己添加,或者参考 [额外功能](oss) |
| error-to-email | bool   | 错误发送邮箱                                                 |
| use-multipoint | bool   | 单点登录,默认为关闭                                          |

## captcha

### yaml

```yaml
# captcha configuration
captcha:
  key-long: 6
  image-width: 240
  image-height: 80
  captcha-in-redis: false
```

### struct

```go
type Captcha struct {
	KeyLong         int  `mapstructure:"key-long" json:"keyLong" yaml:"key-long"`
	ImageWidth      int  `mapstructure:"image-width" json:"imageWidth" yaml:"image-width"`
	ImageHeight     int  `mapstructure:"image-height" json:"imageHeight" yaml:"image-height"`
	CaptchaInRedis  bool  `mapstructure:"captcha-in-redis" json:"captcha_in_redis" yaml:"captcha-in-redis"`
}
```

### description

| 配置名           | 类型 | 说明                |
| ---------------- | ---- | ------------------- |
| key-long         | int  | 验证码长度          |
| img-width        | int  | 验证码宽度          |
| img-height       | int  | 验证码高度          |
| captcha-in-redis | bool | 验证码信息存入redis |

## Local

### yaml

```yaml
# local configuration
local:
  path: 'uploads/file'
```

### struct

```go
type Local struct {
	Path string `mapstructure:"path" json:"path" yaml:"path" `
}
```

### description

| 配置名 | 类型   | 说明         |
| ------ | ------ | ------------ |
| Path   | string | 本地存放路径 |

## Qiniu

### yaml

```yaml
# qiniu configuration (请自行七牛申请对应的 公钥 私钥 bucket 和 域名地址)
qiniu:
  zone: 'ZoneHuadong'
  bucket: 'qm-plus-img'
  img-path: 'http://qmplusimg.henrongyi.top'
  use-https: false
  access-key: '25j8dYBZ2wuiy0yhwShytjZDTX662b8xiFguwxzZ'
  secret-key: 'pgdbqEsf7ooZh7W3xokP833h3dZ_VecFXPDeG5JY'
  use-cdn-domains: false
```

### struct

```go
type Qiniu struct {
	Zone          string `mapstructure:"zone" json:"zone" yaml:"zone"`
	Bucket        string `mapstructure:"bucket" json:"bucket" yaml:"bucket"`
	ImgPath       string `mapstructure:"img-path" json:"imgPath" yaml:"img-path"`
	UseHTTPS      bool   `mapstructure:"use-https" json:"useHttps" yaml:"use-https"`
	AccessKey     string `mapstructure:"access-key" json:"accessKey" yaml:"access-key"`
	SecretKey     string `mapstructure:"secret-key" json:"secretKey" yaml:"secret-key"`
	UseCdnDomains bool   `mapstructure:"use-cdn-domains" json:"useCdnDomains" yaml:"use-cdn-domains"`
}
```

### description

| 配置名          | 类型   | 说明                                                         |
| --------------- | ------ | ------------------------------------------------------------ |
| zone            | string | 存储区域 [Zone](https://github.com/qiniu/api.v7/blob/master/storage/zone.go) ,可配置选项为 `ZoneHuadong` / `ZoneHuabei` / `ZoneHuanan` / `ZoneBeimei` / `ZoneXinjiapo` |
| bucket          | string | 存储空间                                                     |
| img-path        | string | CDN 加速域名                                                 |
| use-https       | bool   | 是否使用https                                                |
| access-key      | string | 秘钥AK                                                       |
| secret-key      | string | 秘钥SK                                                       |
| use-cdn-domains | bool   | 上传是否使用CDN上传加速                                      |

## Minio

### yaml

```yaml
# minio configuration
minio:
  id: 'minio'
  path: 'http://localhost:9000'
  token: ''
  bucket: 'public'
  use-ssl: false
  secret: 'minio'
  endpoint: 'localhost:9000'
```

### struct

```go
type Minio struct {
	Id       string `mapstructure:"id" json:"id" yaml:"id"`
	Path     string `mapstructure:"path" json:"path" yaml:"path"`
	Token    string `mapstructure:"token" json:"token" yaml:"token"`
	Bucket   string `mapstructure:"bucket" json:"bucket" yaml:"bucket"`
	UseSsl   bool   `mapstructure:"use-ssl" json:"useSsl" yaml:"use-ssl"`
	Secret   string `mapstructure:"secret" json:"secret" yaml:"secret"`
	Endpoint string `mapstructure:"endpoint" json:"endpoint" yaml:"endpoint"`
}
```

### description

| 配置名   | 类型   | 说明           |
| -------- | ------ | -------------- |
| id       | string | 储存桶         |
| path     | string | minio地址 path |
| token    | string | minio token    |
| use-ssl  | bool   | 是否使用ssl    |
| bucket   | string | 公开or私有     |
| Secret   | string | Secret         |
| Endpoint | string | Endpoint       |

## Aliyun

### yaml

```yaml
# aliyun configuration
aliyun:
  path: 'https://xxx.oss-cn-beijing.aliyuncs.com'
  bucket: ''
  acl-type: ''
  endpoint: 'https://oss-cn-beijing.aliyuncs.com'
  access-key-id: ''
  secret-access-key: ''
  storage-class-type: 'Standard' # 配置请看server/integration/upload/internal/aliyun.go
```

### struct

```go
type Aliyun struct {
	Path             string `mapstructure:"path" json:"path" yaml:"path"`
	Bucket           string `mapstructure:"bucket" json:"bucket" yaml:"bucket"`
	AclType          string `mapstructure:"acl-type" json:"aclType" yaml:"acl-type"`
	Endpoint         string `mapstructure:"endpoint" json:"endpoint" yaml:"endpoint"`
	AccessKeyID      string `mapstructure:"access-key-id" json:"accessKeyId" yaml:"access-key-id"`
	SecretAccessKey  string `mapstructure:"secret-access-key" json:"secretAccessKey" yaml:"secret-access-key"`
	StorageClassType string `mapstructure:"storage-class-type" json:"storageClassType" yaml:"storage-class-type"`
}
```

### description

| 配置名             | 类型   | 说明              |
| ------------------ | ------ | ----------------- |
| path               | string | path              |
| bucket             | string | bucket            |
| acl-type           | string | acl-type          |
| endpoint           | string | endpoint          |
| access-key-id      | string | access-key-id     |
| secret-access-key  | string | secret-access-key |
| storage-class-type | string | bucket储存式      |

