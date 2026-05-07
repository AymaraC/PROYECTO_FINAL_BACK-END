# PROYECTO INTEGRADOR FINAL API REST 🚀

# API Gestión de Máquinas Industriales 🏗️

## Descripción

Este proyecto consiste en una API REST desarrollada para la gestión de máquinas industriales.

La aplicación permite registrar usuarios, autenticarse mediante JWT y gestionar máquinas industriales con distintos niveles de permisos según el rol del usuario.

Además, implementa validaciones, protección de contraseñas y soft delete para preservar registros sin eliminarlos físicamente de la base de datos.

---

# Funcionalidades

## Como usuario podés:

- Registrarte
- Iniciar sesión
- Visualizar las máquinas activas

## Como administrador podés:

- Crear máquinas
- Editar máquinas
- Desactivar máquinas (soft delete). Las desactivamos en lugar de borrarlas para tener un registro de las máquinas.

---

# Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- Zod (validaciones)
- Bcrypt (hash de contraseñas)

---

# Requisitos

- Node.js ≥ 18
- npm
- git para clonar el repositorio

Además, se requiere crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=5000

MONGO_URL=tu_url_de_mongodb

JWT_SECRET=tu_clave_secreta
```

# Dependencias principales

El proyecto utiliza las siguientes bibliotecas:

- express
- mongoose
- bcrypt
- jsonwebtoken
- zod
- dotenv
- nodemon (opcional)

---

# Instalación

## Clonar el repositorio

```bash
git clone https://github.com/AymaraC/PROYECTO_FINAL_BACK-END
```

## Entrar a la carpeta del proyecto

```bash
cd API_Gestion_Maquinas_Industriales
```

## Instalar dependencias

```bash
npm install
```

## Crear archivo `.env`

Agregar las variables necesarias:

```env
PORT=5000

MONGO_URL=tu_url

JWT_SECRET=tu_clave
```

---

# Estructura del proyecto

```text
📁 API_Gestion_Maquinas_Industriales

├─ config/
│  └─ database.js

├─ src/
│  ├─ controllers/
│  │  ├─ machineController.js
│  │  └─ userController.js
│  │
│  ├─ middleware/
│  │  └─ authMiddleware.js
│  │
│  ├─ models/
│  │  ├─ machineModel.js
│  │  └─ userModel.js
│  │
│  └─ routes/
│     ├─ authRoutes.js
│     └─ machineRoutes.js
│
├─ server.js
├─ package.json
└─ README.md
```

---

# Endpoints y funcionalidades

# 👤 Usuarios

## Registrar usuario

### POST `/auth/register`

Crea un nuevo usuario.

📌 Respuesta esperada:

```json
{
  "message": "Usuario creado correctamente"
}
```

---

## Iniciar sesión

### POST `/auth/login`

Autentica al usuario y devuelve un token JWT.

📌 Respuesta esperada:

```json
{
  "message": "Login exitoso",
  "token": "jwt_token"
}
```

---

# 🏗️ Máquinas

## Obtener todas las máquinas activas

### GET `/machines`

Devuelve todas las máquinas activas.

---

## Obtener máquina por ID

### GET `/machines/:id`

Devuelve una máquina específica.

---

## Crear máquina

### POST `/machines`

🔐 Requiere autenticación  
👑 Solo administrador

📌 Respuesta esperada:

```json
{
  "name": "Tijera Eléctrica",
  "model": "XLXS"
}
```

---

## Actualizar máquina

### PUT `/machines/:id`

🔐 Requiere autenticación  
👑 Solo administrador

📌 Respuesta esperada:

```json
{
  "message": "Máquina actualizada correctamente"
}
```

---

## Desactivar máquina (soft delete)

### DELETE `/machines/:id`

🔐 Requiere autenticación  
👑 Solo administrador

📌 Importante:

La máquina no se elimina físicamente de la base de datos.  
Simplemente cambia su estado `isActive` a `false`.

📌 Respuesta esperada:

```json
{
  "message": "Máquina desactivada correctamente"
}
```

---
# Colección de Postman

La colección utilizada para realizar pruebas de la API se encuentra incluida en:

```text
GESTION_MAQUINAS_INDUSTRIALES.postman_collection
```


# Seguridad implementada

- Contraseñas protegidas mediante bcrypt (hash seguro)
- Autenticación con JWT
- Middleware de protección de rutas
- Control de roles (`admin` y `user`)
- Los usuarios registrados desde `/auth/register` se crean automáticamente con rol `user`
- El rol `admin` debe asignarse manualmente desde la base de datos por seguridad
- Validaciones implementadas con Zod
- Soft delete para preservar registros sin eliminarlos físicamente
---

# Ejecutar el proyecto

Iniciar el servidor:

```bash
npm run dev
```

El servidor se levantará en:

```text
http://localhost:5000
```

---

# Pruebas realizadas

Se realizaron pruebas de:

- Registro de usuarios
- Login
- Tokens inválidos
- CRUD completo de máquinas
- Soft delete
- Validaciones y manejo de errores

Las pruebas fueron realizadas mediante Postman.

---

# Notas finales

Este proyecto fue desarrollado como trabajo práctico integrador de Backend.

La API sigue una arquitectura organizada utilizando:

- controllers
- models
- routes
- middleware

Además, se implementó MongoDB Atlas como base de datos en la nube.

---

# 👤 Autor

Aymara Belén Cabanal

GitHub: https://github.com/AymaraC