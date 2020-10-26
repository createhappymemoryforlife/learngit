console.log(1);
// 1.git init
// learngit下的隐藏文件.git就是版本库(Repository)
// .git版本库内最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD。
// 2.git add . 3.git commit -m 'desc'
// 4.git remote add origin git@github.com:createhappymemoryforlife/learngit.git
// 添加后，远程库的名字就是origin，"origin"就是指向某一个远程库repository(git@github.com:createhappymemoryforlife/learngit.git)的指针
// $git push A B:C     其中A和C是分别remote端的一个repository的名字和branch的名字，B是本地端branch的名字
// 意思是把本地的B推送到remotes/A/C下。当B=C时可以直接省略为：git push A B。
// 5.git push -u origin master
// 加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。
// 推送失败需要把本地的公钥放在远程的ssh key内,再进行git push -u origin master,显示Branch 'master' set up to track remote branch 'master' from 'origin'关联.

// 6.git checkout -b dev (git branch dev ,git checkout dev)
// HEAD指向的是当前的分支, git checkout dev 后，HEAD 指向的就是 dev 分支了，可以查看 .git/HEAD 这个文件知道 HEAD 指向
// master或者dev指向的是各自分支的最新提交
// head(小写)是commit对象的引用，在任何时候，只要这个head被选择为”current head“，那么这个head就变为了HEAD,总是大写
