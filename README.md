# 北青报投票系统

## 服务器-node

1、部署环境: NodeJs 6.9.1(最低版本) + PM2 + MySql 
2、部署步骤
  a、修下数据连接信息：打开config/conf.db.js ,具体请参数配置文件
  b、修改后台管理员的密码（改完之后要重新才生效）。打开config/conf.admin.js修正其中的name和pwd,默认用户名、密码都是admin
  c、数据库初始：初始脚本在 resources/sql/mysql/下，名为vote.sql
  
3、用pm2启动应用
  a、pm2安装命令(前提是已经安装好的NodeJs环境):npm install -g pm2
  安装好了运行:pm2 list 如果能正常运行则表示安装成功
  b、启动应用: pm2 start /var/nodejs/vote/bin/www
 成功运行后给出相关信息，如：App name,id, pid 等等
  c、关闭应用:pm2 list 找到要关闭的应用id再运行：pm2 stop id
  d、重启应用:pm2 list 找到要关闭的应用id再运行：pm2 restart id
  
4、应用端品修改:应用的默认商品为3000
  停止服务，打开文件/var/nodejs/vote/bin/www 找到3000并修改成你想要的端口再重启服务

## 前端-vue