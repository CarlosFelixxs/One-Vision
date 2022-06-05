create table Empresa(
idEmpresa int primary key IDENTITY(101,1),
Nome varchar(80),
CNPJ char(14),
CEP char(8),
Numero varchar(45),
Complemento varchar(45),
Email varchar(80),
Senha varchar(50));

-- -----------------------------------------------------
-- Tabela Usuário
create table Usuario(
idUsuario int IDENTITY(1,1),
Nome varchar(80),
Cpf char(11),
sn varchar(50),
Email varchar(50),
Senha varchar(50),
fkEmpresa int,
);

ALTER TABLE [dbo].[Usuario]
ADD CONSTRAINT [PK_usuario] PRIMARY KEY ( [idUsuario] )
GO

ALTER TABLE [dbo].[Usuario]
ADD CONSTRAINT [FK_Empresa]
FOREIGN KEY ( [fkEmpresa] ) REFERENCES [dbo].[Empresa] ( [idEmpresa] )
GO
-- -----------------------------------------------------
-- Tabela Tanques 
create table maquina(
idMaquina int IDENTITY(1,1), 
hostName varchar(50),
fkUsuario int,
fkEmpresa int,
);

ALTER TABLE [dbo].[maquina]
ADD CONSTRAINT [PK_Maquina] PRIMARY KEY ( [idMaquina] )
GO

ALTER TABLE [dbo].[maquina]
ADD CONSTRAINT [FK_Usuario]
FOREIGN KEY ( [fkUsuario] ) REFERENCES [dbo].[Usuario] ( [idUsuario] )
GO

ALTER TABLE [dbo].[maquina]
ADD CONSTRAINT [FK_Empresa_maquina]
FOREIGN KEY ( [fkEmpresa] ) REFERENCES [dbo].[Empresa] ( [idEmpresa] )
GO

-- -----------------------------------------------------

create table componente(
idComponente int IDENTITY(1,1),
nomeComponente varchar(40)
);

ALTER TABLE [dbo].[componente]
ADD CONSTRAINT [PK_componente] PRIMARY KEY ( [idComponente] )
GO

-- -----------------------------------------------------

create table componenteMaquina(
idComponenteMaquina int IDENTITY(1,1),
totalComponente decimal(6,2),
unidadeMedida VARCHAR(5),
fkComponente INT,
fkMaquina int
);

ALTER TABLE [dbo].[componenteMaquina]
ADD CONSTRAINT [PK_componenteMaquina] PRIMARY KEY ( [idComponenteMaquina] )
GO

ALTER TABLE [dbo].[componenteMaquina]
ADD CONSTRAINT [FK_componente_maquina]
FOREIGN KEY ( [fkComponente] ) REFERENCES [dbo].[Componente] ( [idComponente] )
GO

ALTER TABLE [dbo].[componenteMaquina]
ADD CONSTRAINT [FK_Maquina_componente]
FOREIGN KEY ( [fkMaquina] ) REFERENCES [dbo].[Maquina] ( [idMaquina] )
GO
-- -----------------------------------------------------

create table registroComponente(
idRegistroComponente int IDENTITY(1,1),
dataHora datetime,
consumo decimal(6,2),
fkComponenteMaquina int
);

ALTER TABLE [dbo].[registroComponente]
ADD CONSTRAINT [PK_registroComponente] PRIMARY KEY ( [idRegistroComponente] )
GO

ALTER TABLE [dbo].[registroComponente]
ADD CONSTRAINT [FK_componentemaquina_registro]
FOREIGN KEY ( [fkcomponenteMaquina] ) REFERENCES [dbo].[componenteMaquina] ( [idComponenteMaquina] )
GO

-- -----------------------------------------------------
create table programa(
idPrograma int IDENTITY(1,1),
nomePrograma varchar(40),
isProibido TINYINT,
fkMaquina int
);

ALTER TABLE [dbo].[programa]
ADD CONSTRAINT [PK_programa] primary key ( [idPrograma] )
GO

ALTER TABLE [dbo].[programa]
ADD CONSTRAINT [FK_Maquinaprograma]
FOREIGN KEY ( [fkMaquina] ) REFERENCES [dbo].[Maquina] ( [idMaquina] )
GO

-- -----------------------------------------------------
create table registroPrograma(
idRegistroPrograma int IDENTITY(1,1),
consumoCPU decimal(6,2),
consumoMemoria decimal(6,2),
dataHora datetime,
fkPrograma int
);

ALTER TABLE [dbo].[registroPrograma]
ADD CONSTRAINT [PK_registoPrograma] PRIMARY KEY ( [idRegistroPrograma] )
GO

ALTER TABLE [dbo].[registroPrograma]
ADD CONSTRAINT [FK_ProgramaDaMaquina]
FOREIGN KEY ( [fkPrograma] ) REFERENCES [dbo].[programa] ( [idPrograma] )
GO

-- Inserir dados (Empresa)
insert into Empresa (Nome, CNPJ, CEP, Numero, Complemento, Email, Senha) values
('Designers pro',12345432167890, 04447025, 12.500, null, 'empresa@email.com', '123'), -- 101
('Designers pro-league',12345432167820, 05547025, 12.600, null, 'empresa1@email.com', '234'); -- 102
-- -----------------------------------------------------
select*from Empresa;
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Inserir dados (Usuario)

select * from Usuario;

insert into Usuario (Nome, Cpf, sn, Email, Senha) values
('André','49053375856','cpx-sfa-asa','funcionario@email.com','123'),
('Carlos','49053375857','cpx-sfa-asb','anonimo@email.com','345'),
('Paulo','49053375858','cpx-sfa-asc','gestor@email.com','234');

SELECT idMaquina
FROM Maquina
INNER JOIN Usuario
ON fkUsuario = idUsuario where Usuario.Email = 'paulo@email.com';

SELECT idUsuario,fkEmpresa , Email, senha FROM Usuario WHERE Email = 'funcionario@email.com' and Senha = '123';
-- -----------------------------------------------------
-- ------------------------------------------------------
select * from maquina;
insert into maquina (hostName) values
('CPX-114-1309'),
('CPX-114-1390'),
('CPX-114-1378'),
('CPX-114-1356');
-- -----------------------------------------------------
-- -----------------------------------------------------
-- -----------------------------------------------------
-- -----------------------------------------------------
select * from MC;

-- -----------------------------------------------------
-- -----------------------------------------------------
select * from componente;
insert into componente (nomeComponente) values
('Memoria'),
('Disco');
-- -----------------------------------------------------
select * from registroComponente;
insert into registroComponente(dataHora, consumo) values
('2017-05-25 08:30:05', 13.532121),
('2017-05-25 08:30:05', 35.032121),
('2017-05-25 08:30:05', 51.203443),
('2017-05-25 08:30:05', 42.205555);

-- -----------------------------------------------------
-- -----------------------------------------------------
select * from programa;

insert into programa (nomePrograma, isProibido) values
('photoShop', 1),
('Instagram', 0),
('LeagueOfLegends', 0);

select * from [dbo].[registroPrograma];

insert into [dbo].[registroPrograma] (consumoCPU, consumoMemoria, dataHora) values
(11.100000,14.431210,'2022-04-22  20:24:01');