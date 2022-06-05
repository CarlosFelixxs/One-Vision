create table empresa(
idEmpresa int primary key IDENTITY(101,1),
nome varchar(80),
cnpj char(14),
cep char(8),
numero varchar(45),
complemento varchar(45),
email varchar(80),
senha varchar(50));

-- -----------------------------------------------------
-- Tabela Usuário
create table usuario(
idUsuario int IDENTITY(1,1),
nome varchar(80),
cpf char(11),
sn varchar(50),
Email varchar(50),
senha varchar(50),
fkEmpresa int,
);

ALTER TABLE [dbo].[usuario]
ADD CONSTRAINT [PK_usuario] PRIMARY KEY ( [idUsuario] )
GO

ALTER TABLE [dbo].[usuario]
ADD CONSTRAINT [FK_Empresa]
FOREIGN KEY ( [fkEmpresa] ) REFERENCES [dbo].[empresa] ( [idEmpresa] )
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
FOREIGN KEY ( [fkUsuario] ) REFERENCES [dbo].[usuario] ( [idUsuario] )
GO

ALTER TABLE [dbo].[maquina]
ADD CONSTRAINT [FK_Empresa_maquina]
FOREIGN KEY ( [fkEmpresa] ) REFERENCES [dbo].[empresa] ( [idEmpresa] )
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
