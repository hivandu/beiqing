/*
Navicat MySQL Data Transfer

Source Server         : vote
Source Server Version : 50518
Source Host           : 61.148.61.78:9011
Source Database       : ticket

Target Server Type    : MYSQL
Target Server Version : 50518
File Encoding         : 65001

Date: 2016-12-09 19:33:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for sub_vote
-- ----------------------------
DROP TABLE IF EXISTS `sub_vote`;
CREATE TABLE `sub_vote` (
  `id` varchar(36) NOT NULL,
  `vote_id` varchar(36) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `position` int(3) DEFAULT '0',
  `type` varchar(2) NOT NULL COMMENT '类型：\r\n01:文本\r\n02:图表\r\n',
  `weighted_value` double NOT NULL,
  `create_date` datetime DEFAULT NULL,
  `create_user_id` varchar(100) DEFAULT NULL,
  `last_update_date` datetime DEFAULT NULL,
  `last_update_user_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sub_vote
-- ----------------------------
INSERT INTO `sub_vote` VALUES ('1', '110', '您认为最具代表性的2016年度新锐品质轿车车型为？', '1', '', '0', '2016-12-08 21:29:51', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('10', '120', '您认为最具代表性的2016年度品质SUV车型为？', '11', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('11', '120', '您认为最具代表性的2016年度紧凑型车车型为？', '12', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('12', '120', '您认为最具代表性的2016年度紧凑型SUV车型为？', '13', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('13', '120', '您认为最具代表性的2016年度互联SUV车型为？', '14', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('14', '120', '您认为最具代表性的2016年度中大型环保SUV车型为？', '16', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('15', '120', '您认为最具代表性的2016年度德系SUV车型为？', '17', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('16', '120', '您认为最具代表性的2016年度都市豪华SUV车型为？', '18', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('17', '110', '您认为最具代表性的2016年度创新豪华旗舰轿车车型为？', '10', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('18', '120', '您认为最具代表性的2016年度中大型SUV车型为？', '15', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('2', '110', '您认为最具代表性的2016年度紧凑型车车型为？', '2', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('3', '110', '您认为最具代表性的2016年度紧凑型运动轿车车型为？', '3', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('4', '110', '您认为最具代表性的2016年度中高级车车型为？', '4', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('5', '110', '您认为最具代表性的2016年度中型环保轿车车型为？', '5', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('6', '110', '您认为最具代表性的2016年度进口旅行轿车车型为？', '6', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('7', '110', '您认为最具代表性的2016年度中大型豪华轿车车型为？', '7', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('8', '110', '您认为最具代表性的2016年度最受期待长轴距轿车车型为？', '8', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');
INSERT INTO `sub_vote` VALUES ('9', '110', '您认为最具代表性的2016年度科技革新轿车车型为？', '9', '', '0', '2016-12-08 21:29:59', 'admin', '2016-12-08 21:29:59', 'admin');

-- ----------------------------
-- Table structure for sub_vote_options
-- ----------------------------
DROP TABLE IF EXISTS `sub_vote_options`;
CREATE TABLE `sub_vote_options` (
  `id` varchar(36) NOT NULL,
  `sub_vote_id` varchar(36) NOT NULL,
  `position` int(3) DEFAULT '0',
  `name` varchar(200) NOT NULL,
  `value` varchar(100) NOT NULL,
  `create_date` datetime DEFAULT NULL,
  `create_user_id` varchar(100) DEFAULT NULL,
  `last_update_date` datetime DEFAULT NULL,
  `last_update_user_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sub_vote_options
-- ----------------------------
INSERT INTO `sub_vote_options` VALUES ('1', '1', '1', '吉利新帝豪', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('10', '3', '2', '东风日产轩逸', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('11', '3', '3', '上汽通用别克英朗', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('12', '3', '4', '广汽丰田雷凌Turbo', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('13', '4', '1', '东风雪铁龙C6', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('14', '4', '2', '一汽-大众全新迈腾', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('15', '4', '3', '东风日产西玛', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('16', '4', '4', '长安福特蒙迪欧', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('17', '5', '1', '广汽本田雅阁锐·混动', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('18', '5', '2', '上汽通用雪佛兰迈锐宝XL', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('19', '5', '3', '东风日产新天籁', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('2', '1', '2', '上汽荣威350', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('20', '5', '4', '广汽丰田凯美瑞双擎', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('21', '6', '1', '宝马2系多功能旅行车', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('22', '6', '2', '进口大众蔚揽', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('23', '6', '3', '沃尔沃V40', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('24', '6', '4', '斯柯达新速尊', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('25', '7', '1', '上汽通用凯迪拉克XTS', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('26', '7', '2', '上汽大众辉昂', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('27', '7', '3', '捷豹XF', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('28', '7', '4', '英菲尼迪Q70', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('29', '8', '1', '奔驰全新长轴距E级轿车', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('3', '1', '3', '东风风行全新景逸S50', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('30', '8', '2', '沃尔沃S90L', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('31', '8', '3', '华晨宝马5系长轴距版', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('32', '8', '4', '一汽-大众奥迪A6L', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('33', '9', '1', '华晨宝马3系', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('34', '9', '2', '一汽-大众奥迪全新A4L', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('35', '9', '3', '北京奔驰C级', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('36', '9', '4', '上汽通用凯迪拉克ATS', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('37', '10', '1', '奇瑞瑞虎7', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('38', '10', '2', '吉利博越', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('39', '10', '3', '一汽丰田RAV4荣放', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('4', '1', '4', '北汽绅宝D50', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('40', '10', '4', '北京现代ix35', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('41', '11', '1', '上汽通用别克昂科威', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('42', '11', '2', '东风日产奇骏', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('43', '11', '3', '现代胜达', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('44', '11', '4', '东风[]本田CR-V', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('45', '12', '1', '上汽大众途观', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('46', '12', '2', '长安福特新翼虎', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('47', '12', '3', '一汽丰田RAV4荣放', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('48', '12', '4', '东风悦达起亚KX5', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('49', '13', '1', '奇瑞艾瑞泽7', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('5', '2', '1', '一汽丰田卡罗拉', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('50', '13', '2', '上汽荣威RX5', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('51', '13', '3', '北京现代ix35', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('52', '13', '4', '东风本田CRV', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('53', '14', '1', '英菲尼迪QX60 Hybrid混动', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('54', '14', '2', '沃尔沃XC90混动', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('55', '14', '3', '雷克萨斯RX 450h', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('56', '14', '4', '比亚迪唐', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('57', '15', '1', '宝沃BX7', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('58', '15', '2', '奔驰GLC', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('59', '15', '3', '宝马X3', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('6', '2', '2', '一汽-大众全新大众速腾', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('60', '15', '4', '奥迪Q5', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('61', '16', '1', '上汽通用XT5', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('62', '16', '2', '奥迪Q5', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('63', '16', '3', '奔驰GLE', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('64', '16', '4', '宝马X3', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('65', '17', '1', '奔驰S级', '', '2016-12-09 18:41:42', 'admin', '2016-12-09 18:41:52', 'admin');
INSERT INTO `sub_vote_options` VALUES ('66', '17', '2', '宝马7系', '', '2016-12-09 18:41:42', 'admin', '2016-12-09 18:41:52', 'admin');
INSERT INTO `sub_vote_options` VALUES ('67', '17', '3', '奥迪A8L', '', '2016-12-09 18:41:42', 'admin', '2016-12-09 18:41:52', 'admin');
INSERT INTO `sub_vote_options` VALUES ('68', '17', '4', '捷豹XJ', '', '2016-12-09 18:41:42', 'admin', '2016-12-09 18:41:52', 'admin');
INSERT INTO `sub_vote_options` VALUES ('69', '18', '1', '广汽丰田汉兰达', '', '2016-12-09 18:41:42', 'admin', '2016-12-09 18:41:52', 'admin');
INSERT INTO `sub_vote_options` VALUES ('7', '2', '3', '东风标致308', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('70', '18', '2', '长安福特锐界', '', '2016-12-09 18:41:42', 'admin', '2016-12-09 18:41:52', 'admin');
INSERT INTO `sub_vote_options` VALUES ('71', '18', '3', '广汽传祺GS8', '', '2016-12-09 18:41:42', 'admin', '2016-12-09 18:41:52', 'admin');
INSERT INTO `sub_vote_options` VALUES ('72', '18', '4', '长城哈弗H9', '', '2016-12-09 18:41:42', 'admin', '2016-12-09 18:41:52', 'admin');
INSERT INTO `sub_vote_options` VALUES ('8', '2', '4', '上汽通用雪佛兰科鲁兹', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');
INSERT INTO `sub_vote_options` VALUES ('9', '3', '1', '东风本田思域', '', '0000-00-00 00:00:00', 'admin', '0000-00-00 00:00:00', 'admin');

-- ----------------------------
-- Table structure for vote
-- ----------------------------
DROP TABLE IF EXISTS `vote`;
CREATE TABLE `vote` (
  `id` varchar(36) NOT NULL,
  `subject` varchar(200) NOT NULL,
  `position` int(3) DEFAULT NULL COMMENT '0',
  `parent_id` varchar(36) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `create_user_id` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `last_update_date` datetime DEFAULT NULL,
  `last_update_user_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vote
-- ----------------------------
INSERT INTO `vote` VALUES ('100', '2016北青年度车评选', '1', null, '北青万名京城市民票选年度车，倾听最懂车的您的想法，评出您心目中的真正好车。', '2016-12-08 21:21:30', 'admin', '2016-12-08 21:21:36', 'admin');
INSERT INTO `vote` VALUES ('110', '轿车车型', '1', '100', '轿车车型', '2016-12-08 21:28:16', 'admin', '2016-12-08 21:28:23', 'admin');
INSERT INTO `vote` VALUES ('120', 'SUV车型', '2', '100', 'SUV车型', '2016-12-08 21:28:16', 'admin', '2016-12-08 21:28:16', 'admin');

-- ----------------------------
-- Table structure for voter
-- ----------------------------
DROP TABLE IF EXISTS `voter`;
CREATE TABLE `voter` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `mobile` varchar(11) DEFAULT NULL,
  `vote_id` varchar(36) DEFAULT NULL,
  `lottery_level` int(3) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `create_user_id` varchar(100) DEFAULT NULL,
  `last_update_date` datetime DEFAULT NULL,
  `last_update_user_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of voter
-- ----------------------------

-- ----------------------------
-- Table structure for vote_result
-- ----------------------------
DROP TABLE IF EXISTS `vote_result`;
CREATE TABLE `vote_result` (
  `id` varchar(36) CHARACTER SET latin1 NOT NULL,
  `voter_id` varchar(100) CHARACTER SET latin1 NOT NULL,
  `sub_vote_id` varchar(36) CHARACTER SET latin1 NOT NULL,
  `vote_result` varchar(400) CHARACTER SET latin1 NOT NULL COMMENT 'sub_vote_options 的id，如果多个则以逗号隔开',
  `create_date` datetime DEFAULT NULL,
  `create_user_id` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_date` datetime DEFAULT NULL,
  `last_update_user_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vote_result
-- ----------------------------
