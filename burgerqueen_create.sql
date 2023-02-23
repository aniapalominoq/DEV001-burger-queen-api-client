CREATE TABLE Users (
	id_user INT NOT NULL AUTO_INCREMENT,
	name_user varchar(255) NOT NULL,
	email_user varchar(255) NOT NULL,
	state_user BOOLEAN,
	role_id_role INT(255) NOT NULL,
	PRIMARY KEY (id_user)
);

CREATE TABLE Role (
	id_role INT NOT NULL AUTO_INCREMENT,
	name_role varchar(255) NOT NULL,
	PRIMARY KEY (id_role)
);

CREATE TABLE Products (
	id_product INT NOT NULL AUTO_INCREMENT,
	name_product varchar(255) NOT NULL,
	price_product DECIMAL NOT NULL,
	image_product VARCHAR(255) NOT NULL,
	type_product varchar(255) NOT NULL,
	dateEntry_product DATE NOT NULL,
	category_product varchar(255) NOT NULL,
	PRIMARY KEY (id_product)
);

CREATE TABLE Tables (
	id_table INT NOT NULL AUTO_INCREMENT,
	number_table INT NOT NULL AUTO_INCREMENT,
	state_table BOOLEAN NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id_table)
);

CREATE TABLE Orders (
	id_order INT NOT NULL AUTO_INCREMENT,
	date_order DATE NOT NULL,
	hour_order TIME NOT NULL,
	table_id_table varchar(255) NOT NULL,
	user_id_user INT NOT NULL,
	client_id_client INT NOT NULL,
	order_preci_order INT NOT NULL,
	PRIMARY KEY (id_order)
);

CREATE TABLE Client (
	id_client INT NOT NULL AUTO_INCREMENT,
	name_client varchar(255) NOT NULL,
	dni_client varchar(8) NOT NULL,
	PRIMARY KEY (id_client)
);

CREATE TABLE Detalle_Pedido (
	Id_Dtalle_Pedido INT NOT NULL AUTO_INCREMENT,
	Id_Orders INT NOT NULL,
	Id_Products INT NOT NULL,
	PRIMARY KEY (Id_Dtalle_Pedido)
);

CREATE TABLE Flujo_cAJA (
	iD_FLUJO_CAJA BINARY NOT NULL,
	IMPORTE DECIMAL NOT NULL,
	Descuento DECIMAL NOT NULL,
	Inv DECIMAL NOT NULL,
	tipo_pago VARCHAR(255) NOT NULL,
	monto_total VARCHAR(255) NOT NULL,
	id_cajero VARCHAR(255) NOT NULL
);

CREATE TABLE Cashier (
	id_cajero INT NOT NULL AUTO_INCREMENT,
	turno VARCHAR(255) NOT NULL,
	PRIMARY KEY (id_cajero)
);

ALTER TABLE Users ADD CONSTRAINT Users_fk0 FOREIGN KEY (role_id_role) REFERENCES Role(id_role);

ALTER TABLE Orders ADD CONSTRAINT Orders_fk0 FOREIGN KEY (table_id_table) REFERENCES Tables(id_table);

ALTER TABLE Orders ADD CONSTRAINT Orders_fk1 FOREIGN KEY (user_id_user) REFERENCES Users(id_user);

ALTER TABLE Orders ADD CONSTRAINT Orders_fk2 FOREIGN KEY (client_id_client) REFERENCES Client(id_client);

ALTER TABLE Detalle_Pedido ADD CONSTRAINT Detalle_Pedido_fk0 FOREIGN KEY (Id_Orders) REFERENCES Orders(id_order);

ALTER TABLE Detalle_Pedido ADD CONSTRAINT Detalle_Pedido_fk1 FOREIGN KEY (Id_Products) REFERENCES Products(id_product);










