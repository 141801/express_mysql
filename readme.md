# mysql数据库环境搭建
* https://www.digitalocean.com/community/tutorials/how-to-install-the-latest-mysql-on-debian-10

# 准备测试用数据
```
mysql -u root -p
mysql> CREATE DATABASE express_db
mysql> CREATE TABLE users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL)
mysql> insert into users values (1, 'Yamada', 'test@gmail.com');
mysql> insert into users values (2, 'zhang', 'zhang@gmail.com');
```

# nodejs，express环境搭建
* https://reffect.co.jp/node-js/express-js-connect-mysql

# demo
* http://34.84.63.114/
