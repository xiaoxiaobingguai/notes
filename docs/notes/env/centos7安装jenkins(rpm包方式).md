# centos7安装jenkins(rpm包方式)

::: tip 版本
   os: centos7
   jdk: jdk-8u211-linux-x64.tar.gz
   rpm: jenkins-2.182-1.1.noarch.rpm
:::

### 1.安装jdk
```shell
   # 删除自带的jdk
   # 查看名称含有java的rpm包
   rpm -qa | grep java 
   # 卸载rpm包
   # ps：xxxxx 上一个命令查询的rpm包名称
   rpm -e --nodeps xxxxx 

   # 创建java目录
   mkdir /usr/local/java
   # 解压jdk
   tar -zxvf jdk-8u211-linux-x64.tar.gz
   # 转移目录文件
   # ps：jdk1.8.0_211是我的jdk解压版本请自行调整
   mv jdk1.8.0_211/ /usr/local/java/
   # 修改profile文件
   vi /etc/profile
   # 文件末尾添加以下内容
   export JAVA_HOME=/usr/local/java/jdk1.8.0_211
   export JRE_HOME=/usr/local/java/jdk1.8.0_211/jre
   export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
   export PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH:$HOME/bin
   # 使profile文件生效
   source /etc/profile

   # 查看java版本
   java -version

```

### 2.安装jenkins

```shell
   # 安装jenkins
   rpm -ih jenkins-2.182-1.1.noarch.rpm

   # 创建软链接
   # ps：需要通过软链接访问java命令
   ln -s $JAVA_HOME/bin/java /usr/bin/java

   # 启动jenkins
   systemctl start jenkins

   # 临时开放8080端口
   # ps：jenkins集成需要开发50000端口
   /sbin/iptables -I INPUT -p tcp --dport 8080 -j ACCEPT

   # 永久开发8080端口
   # ps：防火墙关闭请用命令systemctl start firewalld开启防火墙
   firewall-cmd --zone=public --add-port=8080/tcp --permanent
   # 重启防火墙
   firewall-cmd --reload
   # 查看所有端口状态
   netstat -ntlp

   # 浏览器登录jenkins
   # ps：172.168.56.31是我的虚拟机地址请自行调整
   [ http://172.168.56.31](http://172.168.56.31:8080/)

   # 初始化登录密码的路径/var/lib/jenkins/secrets/initialAdminPassword
   cat /var/lib/jenkins/secrets/initialAdminPassword

   # 安装插件可以选着默认
   # 这里选择自定义插件
   # 除了默认还有两个插件要勾选上
   # Dashboard View
   # Publish Over SSH 
   # Simple Theme 
   # Blue Ocean

```

### 3.jenkins使用
