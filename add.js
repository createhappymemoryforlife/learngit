console.log(2);

// git checkout -- <filename>
// 把指定文件从暂存区复制到工作区,用来丢弃工作区对该文件的修改

// git checkout HEAD~ -- <filename>
// 如果指定从某个commit恢复指定文件,这会同时改变暂存区与工作区

// git checkout -p
// git checkout -p 表示进入交互模式,只恢复部分变化

// git checkout dev (HEAD标识会移动至dev,HEAD原来的引用值(master的最新提交节点)不变) 然后暂存区域和工作目录中的内容会和HEAD对应的提交节点一致
// checkout只会移动HEAD指针(.git/HEAD)，reset会改变HEAD的引用值(.git/refs/heads/master)

// git log --graph (*表示commit)

// $ git tag v1.0 默认标签是打在最新提交的commit上的 或者使用 git tag -a v1.4 -m "my version 1.4" 附注标签
// git tag 或者 git tag -l "v1.8.5*"

// git fetch origin
// 上述命令从远程refs/heads/命名空间复制所有分支，并把它们存储到本地的refs/remotes/origin/命名空间中
// 远程仓库副本，可以理解为存在于本地的远程仓库缓存。如需更新，可通过git fetch/pull命令获取远程仓库内容
// 工作区=>暂存区=>本地仓库=>远程仓库副本=>远程仓库

// git fetch 并没更改本地仓库的代码，只是拉取了远程 commit 数据，把远程仓库的 commit id 更新为latest。
// 具体的行为你可以尝试看看.git文件夹：./git/refs 里面有三个文件夹：heads、remotes、tags。heads 和 remotes 分别记录的就是本地和远程不同仓库的最新 commit id
// fetch 改变的是 remotes 里面相应分支的 commit id 以及 .git/FETCH_HEAD的commit id。

// 可以使用git pull origin master = git fetch origin master + git merge origin/master

// git branch -r(remote)查看远程分支 git branch -a(all)查看所有分支

// 这是commit
// 取消commit
// this is

// this is we are
// this is we are
