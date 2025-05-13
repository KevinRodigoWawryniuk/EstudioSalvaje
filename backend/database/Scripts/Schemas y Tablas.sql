create schema es;
use es;
drop schema es;
create table usuarios(
id int not null  primary key auto_increment,
nombre varchar(20) not null,
apellido varchar(20) not null,
foto longblob not null,
correo varchar(50) not null,
telefono varchar(20),
contraseña varchar(200) not null,
fecha timestamp default current_timestamp,
rol varchar(30) not null
);
create table categorias(
id int not null  primary key auto_increment,
nombre varchar(50) not null,
descripcion text not null
);
create table tallas(
id int not null  primary key auto_increment,
nombre varchar(50) not null,
descripcion text not null
);
create table modelos(
id int not null  primary key auto_increment,
nombre varchar(50) not null,
descripcion text not null
);
create table marcas(
id int not null  primary key auto_increment,
nombre varchar(50) not null,
descripcion text not null
);
create table productos(
id int not null primary key auto_increment,
nombre varchar(50) not null,
descripcion text not null,
precio int not null,
idcategorias int not null,
idtallas int not null,
idmodelos int not null,
idmarcas int not null,
foreign key (idcategorias) references categorias (id),
foreign key (idtallas) references tallas (id),
foreign key (idmodelos) references modelos (id),
foreign key (idmarcas) references marcas (id)
);
create table pedidos(
id int not null auto_increment primary key,
estado varchar(30) not null,
idusuarios int not null,
idproductos int not null,
fecha timestamp default current_timestamp,
foreign key (idusuarios) references usuarios(id),
foreign key (idproductos) references productos(id)
);
create table carritos(
id int not null auto_increment primary key,
idusuarios int not null,
idproductos int not null,
foreign key (idusuarios) references usuarios(id),
foreign key (idproductos) references productos(id)
);
create table comentarios(
id int not null auto_increment primary key,
comentario text not null,
fecha timestamp default current_timestamp,
idusuarios int not null,
idproductos int not null,
foreign key (idusuarios) references usuarios(id),
foreign key (idproductos) references productos(id)
);
create table pagos(
id int not null auto_increment primary key,
idusuarios int not null,
idproductos int not null,
monto int not null,
fecha timestamp default current_timestamp,
foreign key (idusuarios) references usuarios(id),
foreign key (idproductos) references productos(id)
);