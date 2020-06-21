前端微信小程序
后端springboot
做了一个财务单据的增删改查
后端代码：
https://github.com/zengweidaren/MyEasyBuy
开发工具：IDEA
如果alibaba的json包引用不到，请去官网复制新的依赖到pom.xml
表：
CREATE TABLE `product` (
  `id` int(11) NOT NULL auto_increment,
  `pname` varchar(30) default NULL,
  `pprice` varchar(50) default NULL,
  `pcount` varchar(50) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

这里感谢流红艳紫的提供的帮助

