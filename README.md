# Evaluacion-Fullstack

# Proyecto Pequeño


# INSTRUCCIONES

LEER Y SEGUIR LOS PROCESOS EN ESTA SECCIÓN PARA PODER INSTALAR Y CORRER LA APLICACIÓN EXITOSAMENTE.

Es importante tener minimo Python y node js instalados

De igual forma se necesita crear una base de datos en PostgreSql con el siguiente nombre:
```
dbTask
```
Para cualquier modificacion de los atributos de la base de datos, se estan usando los valores por defecto a excepción del usuario y la contraseña, es necesario crear un archivo al nivel de "manage.py" llamada ".env".

En el .env deberan copiar y pegar lo siguiente:
```
DB_NAME=dbTask
DB_USER=postgres
DB_PASSWORD=mypassword
```


Por si es necesario igual dejo la configuración por defecto que indica la documentación.
```
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "dbTask",
        "USER": "mydatabaseuser",  # Usuario de la base de datos
        "PASSWORD": "mypassword",  # Contraseña del usuario
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }
}
```



Primero comienza configurando el backend.
1. Crear entorno virtual de python e instalar paquetes necesarios

(!IMPORTANTE en caso de no poder crear el entorno virtual en python puede ser que haya problemas con los permisos, prueba ejecutar estos comandos en caso de algun error, si aún no funciona el entorno virtual se puede instalar directo a la computadora aunque esto no es lo recomendado)

(
  #### Temp
```bash
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```
#### Permanent
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
)

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate.ps1
pip install Django
pip install django-cors-headers djangorestframework psycopg2
```

2. Crear las migraciones del programa
```bash
python manage.py makemigrations
python manage.py migrate
```

4. Correr el servidor
```bash
python manage.py runserver
```

### Rutas

La mayoria de las operaciones CRUD se pueden realizar desde la aplicación de React, en caso de querer probarlas individualmente en un entorno separado se incluyen las siguientes rutas:

##### Crear un usuario

```
URL = http://127.0.0.1:8000/register/
Metodo: POST
Body 
{
    "username": "miguel1234",
    "email": "test@gmail.com",
    "password": "1234",
    "first_name": "Miguel",
    "last_name": "Tostado"
}
response:
{
    "user": {
        "id": 1,
        "username": "miguel1234",
        "first_name": "Miguel",
        "last_name": "Tostado",
        "email": "test@gmail.com",
        "password": "1234"
    },
    "token": "121266c80f4c29b106e6083a9df62dc6789cb887"
}
```

##### Login de usuario

```
URL = http://127.0.0.1:8000/login/ 
Metodo: POST
body
{
    "username": "miguel1234",
    "password": "1234"
}
response:
{
    "user": {
        "id": 1,
        "username": "miguel1234",
        "first_name": "Miguel",
        "last_name": "Tostado",
        "email": "test@gmail.com",
        "password": "pbkdf2_sha256$1000000$u8YarYXLXnN1dVsyLyPMtA$G7oO9TsuacNUmEj27qwrM2ybpGMCbwWMdfW+iWL8VCI="
    },
    "token": "121266c80f4c29b106e6083a9df62dc6789cb887"
}
```


#### CRUD de tareas

Las rutas de las tareas están protegidas por el token del usuario, es necesario guardar el token generado por el "login" o el "registro" y mandarlo por los "Headers" de la siguiente forma:

```
Headers { Authorization: Token {token_here}}

ejem: Headers { Authorization: Token 121266c80f4c29b106e6083a9df62dc6789cb887}
```

#### OBTENER TODAS LAS TAREAS EN LA BASE DE DATOS

```
URL = http://127.0.0.1:8000/tasks/
Metodo: GET
Headers { Authorization: Token {token_here}}
```

#### Obtener las tareas especificas de un usuario
```
URL = http://127.0.0.1:8000/tasks/userTasks/{id_usuario}/
Metodo: GET
Headers { Authorization: Token {token_here}}
```


### Crear una tarea

```
URL = http://127.0.0.1:8000/tasks/
Metodo: POST
Headers { Authorization: Token {token_here}}
body:
{
    "titulo": "primera tarea",
    "descripcion": "una descripcion breve",
    "estado_actual": "Pendiente",
    "usuario": 1
}
response:
{
    "id": 1,
    "titulo": "primera tarea",
    "descripcion": "una descripcion breve",
    "estado_actual": "Pendiente",
    "usuario": 1
}
```


#### Editar una tarea
```
URL = http://127.0.0.1:8000/tasks/{id_usuario}/
Metodo: PUT
Headers { Authorization: Token {token_here}}
body:
{
    "titulo": "primera tarea",
    "descripcion": "una descripcion breve editada",
    "estado_actual": "Pendiente",
    "usuario": 1
}
response:
{
    "id": 1,
    "titulo": "primera tarea",
    "descripcion": "una descripcion breve editada",
    "estado_actual": "Pendiente",
    "usuario": 1
}
```

#### Borrar una tarea
```
URL = http://127.0.0.1:8000/tasks/{id_usuario}/
Metodo: DELETE
Headers { Authorization: Token {token_here}}
```

## FRONTEND

Para configurar el frontend es necesario realizar los siguientes comandos:

```bash
cd .\frontend\TaskManager\
```

2. instalamos dependencias
```bash
npm i
```

3. Corremos la app
```bash
npm run dev
```



# Descripcion del proyecto

Desarrolla una aplicación web llamada "Task Manager" que permita a los usuarios gestionar sus tareas
diarias. La aplicación debe incluir las siguientes características:

## Frontend

### - Interfaz del usuario
- Página de inicio que muestre una lista de tareas.
- Formulario para agregar nuevas tareas con campos de titulo y descripcion.
- Opciones para editar y eliminar tareas existentes.
- Filtro para mostrar tareas por estado (Pendiente, En Progreso, Completada).


### - Estado de la aplicacion:
- Utiliza Redux para manejar el estado global de las tareas.
- Implementa acciones para agregar, actualizar y eliminar tareas.


## Backend

### - API
- Endpoints para gestionar tareas (CRUD).
- Autenticación de usuarios para proteger las rutas de la API.

### - Base de datos
- Usa una base de datos relacional (como PostgreSQL) o NoSQL (como MongoDB) para
almacenar las tareas.
- Define el esquema necesario para almacenar la información de las tareas y usuarios.

