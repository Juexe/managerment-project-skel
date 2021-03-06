# nextjs-project-skel

## 关于

优趣nextjs开发框架：一个基于nodejs+reactjs的快速项目开发框架。
它包含了开发库，开发环境，部署支持几个方面。


### 开发库

它集成了以下开发库

- 它集成 [next.js](https://nextjs.org/) 作为后端开发语言
- 它集成 [React](https://reactjs.org) 作为前端开发语言
- 它集成 [Redux](https://redux.js.org/) 进行状态管理
- 它集成 [Redux saga](https://redux-saga.js.org/) 进行浏览器端的异步管理控制
- 它集成 [bootstrap 4](https://getbootstrap.com/) 来方便你快速定义样式
- 它集成 [knex](https://knexjs.org/) 来管理数据库
- 它支持 [Postgres](https://www.postgresql.org/) 和[SQLite 3](https://sqlite.org/index.html) 数据库

此外，你还可以通过管理工具集成更多的开发库及扩展更多支持

### 开发环境

它能帮助你自动构建docker开发环境，解决开发团队中不同开发环境开发导致的环境不统一的问题


### 部署支持

它能快速协助你自动地将项目部署到kubernates集群上


## 安装步骤

0. 准备工作

- 在你的机器上安装好docker并启动

1. 克隆仓库

```
git clone https://github.com/QUSEIT/nextjs-project-skel.git
```

2. 进入对应目录

```
cd nextjs-project-skel
```

3. 安装相应库及构建docker镜像

```
make install
```

4. 启动docker

```
make up
```

5. 数据库配置

如修改过knex数据库定义文件, 需要进行migrate
```
make migrate
```

## 如何开发


## 如何部署到生产环境


## 附：如何扩展

**如何扩展更多的开发库进去**

**如何扩展更多部署方式**

## 2019/03/04 前端任务整理

发布帖子topicPublic

- 发布付费帖子，还有点问题，需要完善

components里面部分组件的scss样式文件，还需要放在styles文件夹中