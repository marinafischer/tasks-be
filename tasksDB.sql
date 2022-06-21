CREATE SCHEMA IF NOT EXISTS `tasksDB` ;

USE `tasksDB` ;

CREATE TABLE IF NOT EXISTS `tasksDB`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE IF NOT EXISTS `tasksDB`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `content` VARCHAR(500) NOT NULL,
  `status` INT NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `tasksDB`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
