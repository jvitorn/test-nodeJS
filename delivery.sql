create database Delivery;
use Delivery;
/* estruct for table users*/
create table tb_users (
    cd_user int(11) not null auto_increment,
    nm_user varchar(50) not null,
    nm_email varchar(50) not null,
    ds_password varchar(50) not null,
    nm_address varchar(50),
    nm_city  varchar(50) not null,
    nr_number int(10),
    ds_picture varchar(80),
    ds_level char(2),
    primary key (cd_user),
    unique key  nm_email (nm_email)
);
/*estruct for table restaurants*/
create table tb_restaurants (
    cd_restaurant int(11) not null auto_increment,
    id_menu       int(11) not null,
    nm_restaurant varchar(50) not null,
    nm_location   varchar(50) not null,
    nr_cnpj       int(14) not null,
    nm_city       varchar(50) not null,
    nr_number     int(10) not null,
    nm_type       varchar(45) not null,
    ds_level char(2),
    primary key (cd_restaurant),
    unique key nm_restaurant (nm_restaurant)
);
/*estruct for table menu*/
create table tb_menu(
    cd_menu int(11) not null auto_increment,
    vl_prices decimal(10,2) not null,
    hr_preparation time not null,
    primary key (cd_menu)
);
/*estruct for user_delivery*/
create table tb_item_delivery(
    cd_purchase int(15) not null auto_increment,
    id_delivery int(11) not null,
    id_itemdelivery int(11) not null,
    ds_special longtext not null,
    vl_unitary decimal(10,2) not null,
    qt_product int(11) not null,
    vt_total  decimal(10,2) not null,
    primary key (cd_purchase)
);
/*estruct for table item*/ 
create table tb_item(
    cd_item int(11) not null auto_increment,
    nm_item varchar(50) not null,
    id_menu int(11) not null,
    ds_ingredients varchar(150) not null,
    primary key (cd_item),
    key id_menu (id_menu)
);
/*estruct for table delivery*/
create table tb_delivery(
    cd_delivery int(11) not null auto_increment,
    id_user int(11) not null,
    id_restaurant int(11) not null,
    hr_demand time not null,
    hr_preparation_request time not null,
    hr_delivery time not null,
    ic_status varchar(50) not null,
    id_payment_form int(11) not null,
    primary key (cd_delivery),
    key id_user (id_user),
    key id_restaurant (id_restaurant),
    key id_payment_form (id_payment_form)
);
/*estruct for table payment*/ 
create table tb_payment(
    cd_payment int(11) not null auto_increment,
    nm_payment varchar(30) not null,
    primary key (cd_payment)
);
-- alter table for menu 
alter table tb_restaurants
    add constraint tb_restaurants foreign key (id_menu) references tb_menu(cd_menu);
-- alter table for item
alter table tb_item
    add constraint tb_item foreign key (id_menu) references tb_menu(cd_menu);
-- alter table for user_delivery
alter table tb_item_delivery
    add constraint tb_item_delivery1 foreign key (id_itemdelivery) references tb_item(cd_item),
    add constraint tb_item_delivery2 foreign key (id_delivery) references tb_delivery(cd_delivery);
-- alter table for delivery
alter table tb_delivery
    add constraint tb_delivery1 foreign key (id_user) references tb_users(cd_user),
    add constraint tb_delivery2 foreign key (id_restaurant) references tb_restaurants(cd_restaurant),
    add constraint tb_delivery3 foreign key (id_payment_form) references tb_payment(cd_payment);