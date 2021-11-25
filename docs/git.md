---
id: git
title: Git 常用命令 
---

#### 写代码前

`git pull origin [分支名]`

>例如:我要拉取master分支，那就是 git pull origin master
>拉取完成后，还需要进行合并(merge)代码操作  

`git merge origin [分支名]`

#### 写代码后想提交
>重复上面的操作，因为有可能别人的分支上有更新了，所以提交代码前仍需要拉取 + 合并

#### 提交操作

-  `git add .`  
    - git add -A  提交所有变化

    - git add -u  提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)

    - git add .  提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件
>平常用的较多的是git add . `这里的.代表的是当前目录`，所以add .操作一般都在项目的根目录下执行  

-  `git commit -m "本次提交的说明"` 

- `git push`

#### 第一次与远程仓库建立联系时需要

```
git init //初始化本地git仓储
git add .
git commit -m "提交的备注信息"
git remote add origin http://47.101.157.197:3000/CowKol/CowKol.git 
git checkout -b [分支名] //创建自己的本地分支
git push -u origin [分支名]
```

## 修改远程仓库地址

1. 修改命令
```
git remote origin set-url [url]
```

2. 先删后加
```
git remote rm origin
git remote add origin [url]
```