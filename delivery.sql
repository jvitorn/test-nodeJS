-- estruct for table users
create table tb_users (
    cd_user int(11) not null auto_increment,
    nm_user varchar(50) not null,
    ds_password varchar(50) not null,
    primary key (cd_user),
    unique key  nm_user (nm_user)
);
-- estruct for table restaurants
create table tb_restaurants (
    cd_restaurant int(11) not null auto_increment,
    nm_restaurant varchar(50) not null,
    nm_location   varchar(50) not null,
    nr_number     int(10) not null,
    nm_type       varchar(45) not null,
    primary key (cd_restaurant),
    unique key nm_restaurant (nm_restaurant)
);
-- estruct for table menu
create table tb_menu(
    cd_menu int(11) not null auto_increment,
    id_restaurant varchar(50) not null,
    id_item varchar(50) not null,
    vl_prices decimal(10,2) not null,
    hr_preparation time(2,2) not null,
    primary key (cd_menu),
    key id_restaurant (id_restaurant),
    key id_item (id_item)
);
create table tb_menu_delivery(
    cd_menu_delivery int(15) not null auto_increment,
    -- complete with information
    -- complete with information
);
create table tb_user_delivery(
    cd_purchase_number int(15) not null auto_increment,
    -- complete with information
);
-- estruct for table item 
create table tb_item(
    cd_item int(11) not null auto_increment,
    nm_item varchar(50) not null,
    ds_ingredients varchar(150) not null,
    primary key (cd_item)
);
-- estruct for table delivery
create table tb_delivery(
    cd_delivery int(11) not null auto_increment,
    id_user varchar(50) not null,
    ic_status not null,
    -- complete with information

);

--alter table for menu 
alter table tb_menu(
    add constraint tb_menu foreign key (id_restaurant) references tb_restaurants(cd_restaurant),
    add constraint tb_menu foreign key (id_item) references tb_item(cd_item)
);
