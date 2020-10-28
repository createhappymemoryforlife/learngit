// # 把当前分支的指针倒退三个commit，
// # 并且会改变暂存区
// $ git reset HEAD~3

// # 倒退指针的同时，不改变暂存区
// $ git reset --soft HEAD~3

// # 倒退指针的同时，改变工作区
// $ git reset --hard HEAD~3

// 如果不指定回滚的位置，那么等同于撤销修改:
// # 撤销上一次向暂存区添加的所有文件
// $ git reset

// # 无任何效果
// $ git reset --soft

// # 同时撤销暂存区和工作区的修改，
// # 回复到上一次提交的状态
// $ git reset --hard

// # 撤销上一次向暂存区添加的某个指定文件，
// # 不影响工作区中的该文件
// $ git reset -- <filename> 准备冲突//$ git reset -- frotz.c

// git reset --hard , git reset --soft HEAD~
