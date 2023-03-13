create table country (
	countryId int4 unsigned primary key auto_increment,
	title varchar(256) not null unique,
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp
);

create table city (
  cityId int4 unsigned primary key auto_increment,
  title varchar(256) not null,
  countryId int4 unsigned not null,
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  foreign key (countryId) references country(countryId)
);

create table image (
	imageId int4 unsigned primary key auto_increment,
	src varchar(256) not null,
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp
);

create table user (
  userId int4 unsigned primary key auto_increment,
  email varchar(64) not null unique,
  password varchar(64) not null,
  name varchar(64) not null,
  surname varchar(64) not null,
  mobile varchar(16) not null,
  imageId int4 unsigned not null unique,
  role enum ('USER', 'ADMIN') default 'USER',
  createdAt timestamp default current_timestamp,
  updatedAt timestamp default current_timestamp on update current_timestamp,
  foreign key (imageId) references image(imageId)
);

create table house (
	houseId int4 unsigned primary key auto_increment,
	address varchar(256) not null,
  userId int4 unsigned not null,
  cityId int4 unsigned not null,
  price float4 unsigned not null,
	createdAt timestamp default current_timestamp,
	updatedAt timestamp default current_timestamp on update current_timestamp,
  foreign key (userId) references user(userId),
  foreign key (cityId) references city(cityId)
);

create table user_liked_house (
	houseId int4 unsigned not null,
	userId int4 unsigned not null,
  foreign key (houseId) references house(houseId),
  foreign key (userId) references user(userId),
  primary key (houseId, userId)
);

create table user_house_rating (
	houseId int4 unsigned not null,
	userId int4 unsigned not null,
  amount int1 unsigned not null,
  foreign key (houseId) references house(houseId),
  foreign key (userId) references user(userId),
  primary key (houseId, userId)
);

create table house_image (
	houseId int4 unsigned not null,
	imageId int4 unsigned not null primary key,
  foreign key (houseId) references house(houseId),
  foreign key (imageId) references image(imageId)
);

