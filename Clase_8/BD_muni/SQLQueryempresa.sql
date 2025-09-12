IF DB_ID(N'EmpresaDB') IS NULL
BEGIN
    CREATE DATABASE [EmpresaDB];
END
GO

USE [EmpresaDB]
GO

USE [master]
GO


/****** Object:  Database [EmpresaDB]    Script Date: 6/09/2025 12:12:03 ******/

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [EmpresaDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO


USE [EmpresaDB]
GO


/****** Object:  Table [dbo].[Empleados]    Script Date: 6/09/2025 12:12:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Empleados](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](100) NULL,
	[Puesto] [nvarchar](100) NULL,
	[Edad] [int] NULL,
	[Salario] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


USE [master]
GO
USE [EmpresaDB];
GO

INSERT INTO dbo.Empleados (Nombre, Puesto, Edad, Salario)
VALUES
(N'Pablo Salazar',        N'Aquitecto',     28, 8500.00),
(N'Jonathan Garc�a',     N'Administrador',  30, 8200.00),
(N'Paulina Rosales',   N'Marketing',    27, 5600.00),
(N'Mart�n Gutierrez',    N'Director de tecnolog�a',  30, 8100.00),
(N'Karla Santizo',  N'Recursos Humanos',  29, 5000.00),
(N'Sebastian Hern�ndez',   N'Analista Estrat�gico',  28, 4200.00),
(N'Julia Beltr�n',   N'Contadora',             35, 6800.00),
(N'Andr�s Torres',  N'Desarrollador Junior',  23, 4000.00),
(N'Fernando Higueros',    N'Project Manager',       38, 9000.00),
(N'Arturo D�az',     N'Administrador de Redes',31, 6400.00);
GO


SELECT * FROM�dbo.Empleados;