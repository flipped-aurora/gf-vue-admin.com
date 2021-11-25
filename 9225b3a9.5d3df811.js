(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{106:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var j=r.a.createContext({}),s=function(t){var e=r.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return r.a.createElement(j.Provider,{value:e},t.children)},O={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,b=t.originalType,c=t.parentName,j=i(t,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(c,".").concat(m)]||p[m]||O[m]||b;return a?r.a.createElement(d,l(l({ref:e},j),{},{components:a})):r.a.createElement(d,l({ref:e},j))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=a.length,c=new Array(b);c[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:n,c[1]=l;for(var j=2;j<b;j++)c[j]=a[j];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return l})),a.d(e,"rightToc",(function(){return i})),a.d(e,"default",(function(){return s}));var n=a(2),r=a(6),b=(a(0),a(106)),c={id:"config",title:"server/config.yaml"},l={unversionedId:"config",id:"config",isDocsHomePage:!1,title:"server/config.yaml",description:"JWT",source:"@site/docs/config.md",permalink:"/docs/config",sidebar:"firstSidebar",previous:{title:"server\u9879\u76ee",permalink:"/docs/server"},next:{title:"\u4f7f\u7528\u6307\u5357",permalink:"/docs/auto_code"}},i=[{value:"JWT",id:"jwt",children:[{value:"yaml",id:"yaml",children:[]},{value:"struct",id:"struct",children:[]},{value:"description",id:"description",children:[]}]},{value:"Redis",id:"redis",children:[{value:"yaml",id:"yaml-1",children:[]},{value:"struct",id:"struct-1",children:[]},{value:"description",id:"description-1",children:[]}]},{value:"Email",id:"email",children:[{value:"yaml",id:"yaml-2",children:[]},{value:"struct",id:"struct-2",children:[]},{value:"description",id:"description-2",children:[]}]},{value:"Casbin",id:"casbin",children:[{value:"yaml",id:"yaml-3",children:[]},{value:"struct",id:"struct-3",children:[]},{value:"description",id:"description-3",children:[]}]},{value:"System",id:"system",children:[{value:"yaml",id:"yaml-4",children:[]},{value:"struct",id:"struct-4",children:[]},{value:"description",id:"description-4",children:[]}]},{value:"captcha",id:"captcha",children:[{value:"yaml",id:"yaml-5",children:[]},{value:"struct",id:"struct-5",children:[]},{value:"description",id:"description-5",children:[]}]},{value:"Local",id:"local",children:[{value:"yaml",id:"yaml-6",children:[]},{value:"struct",id:"struct-6",children:[]},{value:"description",id:"description-6",children:[]}]},{value:"Qiniu",id:"qiniu",children:[{value:"yaml",id:"yaml-7",children:[]},{value:"struct",id:"struct-7",children:[]},{value:"description",id:"description-7",children:[]}]},{value:"Minio",id:"minio",children:[{value:"yaml",id:"yaml-8",children:[]},{value:"struct",id:"struct-8",children:[]},{value:"description",id:"description-8",children:[]}]},{value:"Aliyun",id:"aliyun",children:[{value:"yaml",id:"yaml-9",children:[]},{value:"struct",id:"struct-9",children:[]},{value:"description",id:"description-9",children:[]}]}],j={rightToc:i};function s(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(n.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"jwt"},"JWT"),Object(b.b)("h3",{id:"yaml"},"yaml"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# jwt configuration\njwt:\n  expires-at: 1 # 3600000000000\u79d2 == 1\u5929 \u9ed8\u8ba4\u8bbe\u7f6e\u4e3a1\u5929\n  refresh-at: 168 # 3600000000000\u79d2 == 1\u5929 , 24 * 7 = 168 \u5237\u65b0\u7684token\u8bbe\u7f6e\u4e3a\u4e00\u661f\u671f\n  signing-key: 'SliverHorn'\n")),Object(b.b)("h3",{id:"struct"},"struct"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'type Jwt struct {\n    ExpiresAt  int    `mapstructure:"expires-at" json:"expiresAt" yaml:"expires-at"`\n    RefreshAt  int    `mapstructure:"refresh-at" json:"refreshAt" yaml:"refresh-at"`\n    SigningKey string `mapstructure:"signing-key" json:"signingKey" yaml:"signing-key"`\n}\n')),Object(b.b)("h3",{id:"description"},"description"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u914d\u7f6e\u540d"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"expires-at"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8fc7\u671f\u65f6\u95f4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"refresh-at"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5237\u65b0\u65f6\u95f4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"signing-key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"jwt\u7684\u7b7e\u540d")))),Object(b.b)("h2",{id:"redis"},"Redis"),Object(b.b)("h3",{id:"yaml-1"},"yaml"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# redis configuration\nredis:\n  db: 0\n  address: '127.0.0.1:6379'\n  password: ''\n")),Object(b.b)("h3",{id:"struct-1"},"struct"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'type Redis struct {\n    DB       int    `mapstructure:"db" json:"db" yaml:"db"`\n    Address  string `mapstructure:"address" json:"address" yaml:"address"`\n    Password string `mapstructure:"password" json:"password" yaml:"password"`\n}\n')),Object(b.b)("h3",{id:"description-1"},"description"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u914d\u7f6e\u540d"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"db"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"redis\u7684\u54ea\u4e2a\u6570\u636e\u5e93")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"address"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"redis\u8fde\u63a5\u5730\u5740\u53ca\u7aef\u53e3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"password"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5bc6\u7801")))),Object(b.b)("h2",{id:"email"},"Email"),Object(b.b)("h3",{id:"yaml-2"},"yaml"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# email configuration\nemail:\n  to: 'xxx@qq.com'\n  port: 465\n  from: 'xxx@163.com'\n  host: 'smtp.163.com'\n  is-ssl: true\n  secret: 'xxx'\n  nickname: 'test'\n")),Object(b.b)("h3",{id:"struct-2"},"struct"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'type Email struct {\n    To       string `mapstructure:"to" json:"to" yaml:"to"`\n    Port     int    `mapstructure:"port" json:"port" yaml:"port"`\n    From     string `mapstructure:"from" json:"from" yaml:"from"`\n    Host     string `mapstructure:"host" json:"host" yaml:"host"`\n    IsSSL    bool   `mapstructure:"is-ssl" json:"isSSL" yaml:"is-ssl"`\n    Secret   string `mapstructure:"secret" json:"secret" yaml:"secret"`\n    Nickname string `mapstructure:"nickname" json:"nickname" yaml:"nickname"`\n}\n')),Object(b.b)("h3",{id:"description-2"},"description"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u914d\u7f6e\u540d"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"to"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u90ae\u4ef6\u63a5\u6536\u8005,\u53ef\u4ee5\u662f\u591a\u4e2a,",Object(b.b)("br",null),"\u4ee5\u82f1\u6587\u9017\u53f7(,)\u8fdb\u884c\u533a\u5206,\u6700\u597d\u522b\u5e26\u7a7a\u683c,\u5982\u679c\u662f\u4e00\u4e2a\u90ae\u7bb1\u6700\u540e\u8bf7\u4e0d\u8981\u52a0\u82f1\u6587\u9017\u53f7(,)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"port"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u90ae\u4ef6\u670d\u52a1\u7aef\u53e3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"from"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7528\u6237\u540d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"host"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u90ae\u7bb1\u7684\u4e3b\u670d\u52a1\u5668\u5730\u5740")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"is-ssl"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u4f7f\u7528ssl")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"secret"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5bc6\u7801")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nickname"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5bf9\u65b9\u6536\u5230\u7684\u6635\u79f0")))),Object(b.b)("h2",{id:"casbin"},"Casbin"),Object(b.b)("h3",{id:"yaml-3"},"yaml"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# casbin configuration\ncasbin:\n  model-path: './public/rbac_model.conf'\n")),Object(b.b)("h3",{id:"struct-3"},"struct"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'type Casbin struct {\n    ModelPath string `mapstructure:"model-path" json:"modelPath" yaml:"model-path"`\n}\n')),Object(b.b)("h3",{id:"description-3"},"description"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u914d\u7f6e\u540d"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5efa\u8bae\u662f\u5426\u4fee\u6539"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"model-path"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5b58\u653ecasbin\u6a21\u578b\u7684\u76f8\u5bf9\u8def\u5f84",Object(b.b)("br",null),"\u9ed8\u8ba4\u503c\u4e3a",Object(b.b)("inlineCode",{parentName:"td"},"./resource/rbac_model.conf")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4e0d\u63a8\u8350\u4fee\u6539")))),Object(b.b)("h2",{id:"system"},"System"),Object(b.b)("h3",{id:"yaml-4"},"yaml"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# system configuration\nsystem:\n  env: 'public' # Change to 'develop' to skip authentication for development mode\n  db-type: 'mysql'\n  oss-type: 'local'\n  error-to-email: false\n  use-multipoint: false\n")),Object(b.b)("h3",{id:"struct-4"},"struct"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'type System struct {\n    Env           string `mapstructure:"env" json:"env" yaml:"env"`\n    DbType        string `mapstructure:"db-type" json:"dbType" yaml:"db-type"`\n    OssType       string `mapstructure:"oss-type" json:"ossType" yaml:"oss-type"`\n    ErrorToEmail  bool   `mapstructure:"error-to-email" json:"errorToEmail" yaml:"error-to-email"`\n    UseMultipoint bool   `mapstructure:"use-multipoint" json:"UseMultipoint" yaml:"use-multipoint"`\n}\n')),Object(b.b)("h3",{id:"description-4"},"description"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u914d\u7f6e\u540d"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"env"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u66f4\u6539\u4e3a\u201cdevelop\u201d\u4ee5\u8df3\u8fc7\u5f00\u53d1\u6a21\u5f0f\u7684\u8eab\u4efd\u9a8c\u8bc1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"addr"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u540e\u7aef\u7aef\u53e3,\u9ed8\u8ba48888")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"db-type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u53ef\u4ee5\u4f7f\u7528mysql/postgresql/sqlite/sqlserver,",Object(b.b)("br",null),"mysql: \u5b8c\u7f8e\u652f\u6301",Object(b.b)("br",null),"postgresql:\u53ef\u4ee5\u81ea\u884c\u914d\u7f6e,\u4f46\u6709\u4ee3\u7801\u4e0d\u517c\u5bb9,\u9700\u81ea\u884c\u6d4b\u8bd5\u5e76\u4fee\u6539",Object(b.b)("br",null),"sqlite:sqlite\u9700\u8981gcc\u652f\u6301 windows\u7528\u6237\u9700\u8981\u81ea\u884c\u5b89\u88c5gcc,",Object(b.b)("br",null),"\u8fd8\u9700\u8981\u5728server/core/gorm.go\u628a\u6ce8\u518c\u7684\u521d\u59cb\u5316sqlite\u7684\u65b9\u6cd5",Object(b.b)("br",null),"sqlserver:\u53ef\u4ee5\u81ea\u884c\u914d\u7f6e,\u53ef\u80fd\u6709\u4ee3\u7801\u4e0d\u517c\u5bb9,\u9700\u81ea\u884c\u6d4b\u8bd5\u5e76\u4fee\u6539")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"oss-type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u53ef\u4ee5\u6307\u5b9a\u4e0a\u4f20\u5934\u50cf\u7684oss\u4e3alocal/qiniu/aliyun/minio",Object(b.b)("br",null),"local:\u672c\u5730\u7684 ",Object(b.b)("inlineCode",{parentName:"td"},"local.path")," \u76ee\u5f55",Object(b.b)("br",null),"qiniu:\u4e03\u725b\u4e91",Object(b.b)("br",null),"aliyun\u4e0eminio\u53ef\u80fd\u6846\u67b6\u4e0d\u4f1a\u96c6\u6210,\u9700\u81ea\u5df1\u6dfb\u52a0,\u6216\u8005\u53c2\u8003 ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"oss"}),"\u989d\u5916\u529f\u80fd"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"error-to-email"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u9519\u8bef\u53d1\u9001\u90ae\u7bb1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"use-multipoint"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5355\u70b9\u767b\u5f55,\u9ed8\u8ba4\u4e3a\u5173\u95ed")))),Object(b.b)("h2",{id:"captcha"},"captcha"),Object(b.b)("h3",{id:"yaml-5"},"yaml"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# captcha configuration\ncaptcha:\n  key-long: 6\n  image-width: 240\n  image-height: 80\n  captcha-in-redis: false\n")),Object(b.b)("h3",{id:"struct-5"},"struct"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'type Captcha struct {\n    KeyLong         int  `mapstructure:"key-long" json:"keyLong" yaml:"key-long"`\n    ImageWidth      int  `mapstructure:"image-width" json:"imageWidth" yaml:"image-width"`\n    ImageHeight     int  `mapstructure:"image-height" json:"imageHeight" yaml:"image-height"`\n    CaptchaInRedis  bool  `mapstructure:"captcha-in-redis" json:"captcha_in_redis" yaml:"captcha-in-redis"`\n}\n')),Object(b.b)("h3",{id:"description-5"},"description"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u914d\u7f6e\u540d"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key-long"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u7801\u957f\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"img-width"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u7801\u5bbd\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"img-height"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u7801\u9ad8\u5ea6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"captcha-in-redis"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u7801\u4fe1\u606f\u5b58\u5165redis")))),Object(b.b)("h2",{id:"local"},"Local"),Object(b.b)("h3",{id:"yaml-6"},"yaml"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# local configuration\nlocal:\n  path: 'uploads/file'\n")),Object(b.b)("h3",{id:"struct-6"},"struct"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'type Local struct {\n    Path string `mapstructure:"path" json:"path" yaml:"path" `\n}\n')),Object(b.b)("h3",{id:"description-6"},"description"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u914d\u7f6e\u540d"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u672c\u5730\u5b58\u653e\u8def\u5f84")))),Object(b.b)("h2",{id:"qiniu"},"Qiniu"),Object(b.b)("h3",{id:"yaml-7"},"yaml"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# qiniu configuration (\u8bf7\u81ea\u884c\u4e03\u725b\u7533\u8bf7\u5bf9\u5e94\u7684 \u516c\u94a5 \u79c1\u94a5 bucket \u548c \u57df\u540d\u5730\u5740)\nqiniu:\n  zone: 'ZoneHuadong'\n  bucket: 'qm-plus-img'\n  img-path: 'http://qmplusimg.henrongyi.top'\n  use-https: false\n  access-key: '25j8dYBZ2wuiy0yhwShytjZDTX662b8xiFguwxzZ'\n  secret-key: 'pgdbqEsf7ooZh7W3xokP833h3dZ_VecFXPDeG5JY'\n  use-cdn-domains: false\n")),Object(b.b)("h3",{id:"struct-7"},"struct"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'type Qiniu struct {\n    Zone          string `mapstructure:"zone" json:"zone" yaml:"zone"`\n    Bucket        string `mapstructure:"bucket" json:"bucket" yaml:"bucket"`\n    ImgPath       string `mapstructure:"img-path" json:"imgPath" yaml:"img-path"`\n    UseHTTPS      bool   `mapstructure:"use-https" json:"useHttps" yaml:"use-https"`\n    AccessKey     string `mapstructure:"access-key" json:"accessKey" yaml:"access-key"`\n    SecretKey     string `mapstructure:"secret-key" json:"secretKey" yaml:"secret-key"`\n    UseCdnDomains bool   `mapstructure:"use-cdn-domains" json:"useCdnDomains" yaml:"use-cdn-domains"`\n}\n')),Object(b.b)("h3",{id:"description-7"},"description"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u914d\u7f6e\u540d"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zone"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5b58\u50a8\u533a\u57df ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/qiniu/api.v7/blob/master/storage/zone.go"}),"Zone")," ,\u53ef\u914d\u7f6e\u9009\u9879\u4e3a ",Object(b.b)("inlineCode",{parentName:"td"},"ZoneHuadong")," / ",Object(b.b)("inlineCode",{parentName:"td"},"ZoneHuabei")," / ",Object(b.b)("inlineCode",{parentName:"td"},"ZoneHuanan")," / ",Object(b.b)("inlineCode",{parentName:"td"},"ZoneBeimei")," / ",Object(b.b)("inlineCode",{parentName:"td"},"ZoneXinjiapo"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bucket"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5b58\u50a8\u7a7a\u95f4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"img-path"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CDN \u52a0\u901f\u57df\u540d")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"use-https"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u4f7f\u7528https")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"access-key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u79d8\u94a5AK")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"secret-key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u79d8\u94a5SK")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"use-cdn-domains"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u4e0a\u4f20\u662f\u5426\u4f7f\u7528CDN\u4e0a\u4f20\u52a0\u901f")))),Object(b.b)("h2",{id:"minio"},"Minio"),Object(b.b)("h3",{id:"yaml-8"},"yaml"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# minio configuration\nminio:\n  id: 'minio'\n  path: 'http://localhost:9000'\n  token: ''\n  bucket: 'public'\n  use-ssl: false\n  secret: 'minio'\n  endpoint: 'localhost:9000'\n")),Object(b.b)("h3",{id:"struct-8"},"struct"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'type Minio struct {\n    Id       string `mapstructure:"id" json:"id" yaml:"id"`\n    Path     string `mapstructure:"path" json:"path" yaml:"path"`\n    Token    string `mapstructure:"token" json:"token" yaml:"token"`\n    Bucket   string `mapstructure:"bucket" json:"bucket" yaml:"bucket"`\n    UseSsl   bool   `mapstructure:"use-ssl" json:"useSsl" yaml:"use-ssl"`\n    Secret   string `mapstructure:"secret" json:"secret" yaml:"secret"`\n    Endpoint string `mapstructure:"endpoint" json:"endpoint" yaml:"endpoint"`\n}\n')),Object(b.b)("h3",{id:"description-8"},"description"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u914d\u7f6e\u540d"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u50a8\u5b58\u6876")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"path"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"minio\u5730\u5740 path")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"token"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"minio token")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"use-ssl"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u4f7f\u7528ssl")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bucket"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u516c\u5f00or\u79c1\u6709")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Secret"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Secret")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Endpoint"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Endpoint")))),Object(b.b)("h2",{id:"aliyun"},"Aliyun"),Object(b.b)("h3",{id:"yaml-9"},"yaml"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# aliyun configuration\naliyun:\n  path: 'https://xxx.oss-cn-beijing.aliyuncs.com'\n  bucket: ''\n  acl-type: ''\n  endpoint: 'https://oss-cn-beijing.aliyuncs.com'\n  access-key-id: ''\n  secret-access-key: ''\n  storage-class-type: 'Standard' # \u914d\u7f6e\u8bf7\u770bserver/integration/upload/internal/aliyun.go\n")),Object(b.b)("h3",{id:"struct-9"},"struct"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'type Aliyun struct {\n    Path             string `mapstructure:"path" json:"path" yaml:"path"`\n    Bucket           string `mapstructure:"bucket" json:"bucket" yaml:"bucket"`\n    AclType          string `mapstructure:"acl-type" json:"aclType" yaml:"acl-type"`\n    Endpoint         string `mapstructure:"endpoint" json:"endpoint" yaml:"endpoint"`\n    AccessKeyID      string `mapstructure:"access-key-id" json:"accessKeyId" yaml:"access-key-id"`\n    SecretAccessKey  string `mapstructure:"secret-access-key" json:"secretAccessKey" yaml:"secret-access-key"`\n    StorageClassType string `mapstructure:"storage-class-type" json:"storageClassType" yaml:"storage-class-type"`\n}\n')),Object(b.b)("h3",{id:"description-9"},"description"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u914d\u7f6e\u540d"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"path"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"path")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bucket"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bucket")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"acl-type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"acl-type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"endpoint"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"endpoint")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"access-key-id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"access-key-id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"secret-access-key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"secret-access-key")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"storage-class-type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bucket\u50a8\u5b58\u5f0f")))))}s.isMDXComponent=!0}}]);