(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(106)),i={id:"public",title:"\u5f00\u53d1\u4ecb\u7ecd"},c={unversionedId:"public",id:"public",isDocsHomePage:!1,title:"\u5f00\u53d1\u4ecb\u7ecd",description:"\u9879\u76ee\u76ee\u5f55(2.0)",source:"@site/docs/pubic.md",permalink:"/docs/public"},l=[{value:"\u9879\u76ee\u76ee\u5f55(2.0)",id:"\u9879\u76ee\u76ee\u5f5520",children:[]},{value:"\u914d\u7f6e\u6587\u4ef6(2.0)",id:"\u914d\u7f6e\u6587\u4ef620",children:[]},{value:"\u63a8\u8350\u7684\u5f00\u53d1\u6a21\u5f0f",id:"\u63a8\u8350\u7684\u5f00\u53d1\u6a21\u5f0f",children:[]}],s={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u9879\u76ee\u76ee\u5f5520"},"\u9879\u76ee\u76ee\u5f55(2.0)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"    \u251c\u2500server         \uff08\u540e\u7aef\u6587\u4ef6\u5939\uff09\n    \u2502  \u251c\u2500api            \uff08API\uff09\n    \u2502  \u251c\u2500config         \uff08\u914d\u7f6e\u5305\uff09\n    \u2502  \u251c\u2500core           \uff08\u6838\u5fc3\u6587\u4ef6\uff09\n    \u2502  \u251c\u2500docs           \uff08swagger\u6587\u6863\u76ee\u5f55\uff09\n    \u2502  \u251c\u2500global         \uff08\u5168\u5c40\u5bf9\u8c61\uff09\n    \u2502  \u251c\u2500initialiaze    \uff08\u521d\u59cb\u5316\uff09\n    \u2502  \u251c\u2500middleware     \uff08\u4e2d\u95f4\u4ef6\uff09\n    \u2502  \u251c\u2500model          \uff08\u7ed3\u6784\u4f53\u5c42\uff09\n    \u2502  \u251c\u2500resource       \uff08\u8d44\u6e90\uff09\n    \u2502  \u251c\u2500router         \uff08\u8def\u7531\uff09\n    \u2502  \u251c\u2500service         (\u670d\u52a1)\n    \u2502  \u2514\u2500utils          \uff08\u516c\u5171\u529f\u80fd\uff09\n    \u2514\u2500web            \uff08\u524d\u7aef\u6587\u4ef6\uff09\n        \u251c\u2500public        \uff08\u53d1\u5e03\u6a21\u677f\uff09\n        \u2514\u2500src           \uff08\u6e90\u7801\u5305\uff09\n            \u251c\u2500api       \uff08\u5411\u540e\u53f0\u53d1\u9001ajax\u7684\u5c01\u88c5\u5c42\uff09\n            \u251c\u2500assets    \uff08\u9759\u6001\u6587\u4ef6\uff09\n            \u251c\u2500components\uff08\u7ec4\u4ef6\uff09\n            \u251c\u2500router    \uff08\u524d\u7aef\u8def\u7531\uff09\n            \u251c\u2500store     \uff08vuex \u72b6\u6001\u7ba1\u7406\u4ed3\uff09\n            \u251c\u2500style     \uff08\u901a\u7528\u6837\u5f0f\u6587\u4ef6\uff09\n            \u251c\u2500utils     \uff08\u524d\u7aef\u5de5\u5177\u5e93\uff09\n            \u2514\u2500view      \uff08\u524d\u7aef\u9875\u9762\uff09\n\n")),Object(o.b)("h2",{id:"\u914d\u7f6e\u6587\u4ef620"},"\u914d\u7f6e\u6587\u4ef6(2.0)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Gin-Vue-Admin Global Configuration\n\n# casbin configuration\ncasbin:\n    model-path: './resource/rbac_model.conf'\n\n# jwt configuration\njwt:\n    signing-key: 'qmPlus'\n\n# mysql connect configuration\nmysql:\n    username: root\n    password: 'Aa@6447985'\n    path: '127.0.0.1:3306'\n    db-name: 'qmPlus'\n    config: 'charset=utf8&parseTime=True&loc=Local'\n    max-idle-conns: 10\n    max-open-conns: 10\n    log-mode: true\n#sqlite \u914d\u7f6e\nsqlite:\n    path: db.db\n    log-mode: true\n    config: 'loc=Asia/Shanghai'\n# oss configuration\nqiniu:\n    access-key: '25j8dYBZ2wuiy0yhwShytjZDTX662b8xiFguwxzZ'\n    secret-key: 'pgdbqEsf7ooZh7W3xokP833h3dZ_VecFXPDeG5JY'\n\n# redis configuration\nredis:\n    addr: '127.0.0.1:6379'\n    password: ''\n    db: 0\n\n# system configuration\nsystem:\n    use-multipoint: false\n    env: 'public'  # Change to \"develop\" to skip authentication for development mode\n    addr: 8888\n    db-type: \"mysql\"  # support mysql/sqlite\n    need-init-data: false # \u662f\u5426\u521d\u59cb\u5316\u9879\u76ee\n\n# captcha configuration\ncaptcha:\n    key-long: 4\n    img-width: 120\n    img-height: 40\n\n# logger configuration\nlog:\n    prefix: '[GIN-VUE-ADMIN]'\n    log-file: true\n    stdout: 'DEBUG'\n    file: 'DEBUG'\n\n")),Object(o.b)("h2",{id:"\u63a8\u8350\u7684\u5f00\u53d1\u6a21\u5f0f"},"\u63a8\u8350\u7684\u5f00\u53d1\u6a21\u5f0f"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u8fd0\u884c\u9879\u76ee\uff0c\u8fdb\u5165\u7cfb\u7edf\u5de5\u5177->\u4ee3\u7801\u751f\u6210\u5668"),Object(o.b)("li",{parentName:"ol"},"\u8bbe\u8ba1\u57fa\u7840\u7ed3\u6784\u4f53\u6a21\u578b\uff0c\u70b9\u51fb\u751f\u6210\u4ee3\u7801\u5305 \u83b7\u53d6\u524d\u540e\u7aef\u57fa\u7840\u4ee3\u7801"),Object(o.b)("li",{parentName:"ol"},"\u524d\u7aef\u4ee3\u7801\u6dfb\u52a0\u8fdb\u5165api\u5e76\u81ea\u884c\u91cd\u547d\u540d\uff0c\u540e\u7aef\u4ee3\u7801\u653e\u5165\u9002\u5408\u81ea\u5df1\u5f00\u53d1\u8def\u5f84\u4e2d \u5e76\u6ce8\u518c\u7ed3\u6784\u4f53\u5230\u6570\u636e\u5e93\uff0c\u6ce8\u518c\u8def\u7531\u5230inirRouter\uff08\u5f00\u53d1\u6a21\u5f0f\u4e0b\uff0c\u8bf7\u81ea\u884c\u6ce8\u91ca\u6389\u81ea\u52a8\u751f\u6210\u4ee3\u7801\u4e2d\u7684\u9274\u6743\u4e2d\u95f4\u4ef6 .Use(middleware.JWTAuth()).Use(middleware.CasbinHandler())  )\u65b9\u4fbf\u5f00\u53d1"),Object(o.b)("li",{parentName:"ol"},"\u524d\u7aef\u521b\u5efavue\u6587\u4ef6\uff0c\u5e76\u5230\u8d85\u7ea7\u7ba1\u7406\u5458->\u83dc\u5355\u7ba1\u7406->\u5c06\u5bf9\u5e94\u8def\u5f84\u6dfb\u52a0\u8fdb\u884c\u83dc\u5355\uff0c\u8fdb\u5165\u89d2\u8272\u7ba1\u7406\uff0c\u5c06\u521a\u914d\u7f6e\u7684\u83dc\u5355\u6dfb\u52a0\u8fdb\u5165\uff0c\u91cd\u542f\u524d\u7aef\u9879\u76ee\uff0c\u5f00\u59cb\u7ed8\u5236\u9875\u9762\uff0c\u4e66\u5199\u4ea4\u4e92\u3002"),Object(o.b)("li",{parentName:"ol"},"\u63a5\u53e3\u8c03\u901a\u4ee5\u540e\uff0c\u5230\u8d85\u7ea7\u7ba1\u7406\u5458->api\u7ba1\u7406\u4e2d\u6dfb\u52a0\u5df2\u7ecf\u8c03\u901a\u7684\u8def\u7531\uff0c\u8fdb\u5165\u89d2\u8272\u7ba1\u7406\uff0c\u5c06\u8c03\u901a\u7684\u8def\u7531\u914d\u7f6e\u8fdb\u5165\u89d2\u8272\u6743\u9650\u3002"),Object(o.b)("li",{parentName:"ol"},"\u7b80\u5355\u51e0\u6b65\u8fc7\u540e\uff0c\u4e00\u4e2a\u5305\u542b\u9274\u6743\uff0c\u52a8\u6001\u83dc\u5355\u7684\u524d\u540e\u7aef\u5168\u6808\u529f\u80fd\u5c31\u641e\u5b9a\u4e86\u3002")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u63d0\u793a")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"\u76ee\u524d\u4ee3\u7801\u751f\u6210\u5668\u4ec5\u652f\u6301\u5355\u8868\uff0c\u540e\u671f\u4f1a\u9010\u6b65\u652f\u6301\u5173\u8054\u8868\u6a21\u5f0f\uff0c\u590d\u6742\u6570\u636e\u7ed3\u6784\u76ee\u524d\u8fd8\u9700\u8981\u8f9b\u82e6\u5927\u5bb6\u81ea\u884c\u8bbe\u8ba1"))))}u.isMDXComponent=!0}}]);