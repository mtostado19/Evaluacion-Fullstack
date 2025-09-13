# Evaluacion-Fullstack

# INSTRUCCIONES IMPORTANTE

LOS PROGRAMAS EN FRONTEND DEPENDEN DE QUE ESTE CORRECTAMENTE CONFIGURADO EL BACKEND, PRIMERO SEGUIR ESTOS PASOS PARA LUEGO PODER VERIFICAR CORRECTAMENTE TODO EL FUNCIONAMIENTO DE ESTA SECCIÓN.

Es importante tener minimo Python y node js instalados
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
cd Django
python -m venv venv
.\venv\Scripts\activate.ps1
pip install Django
pip install django-cors-headers djangorestframework
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
Una vez se esta ejecutando el servidor, tenemos que crear usuarios para la base de datos

```
http://127.0.0.1:8000/usuarios/register/
Metodo:POST
{
    "username": "usuariotest",
    "password": "1234"
}
response:
{
    "user": {
        "id": 1,
        "username": "test1",
        "email": "",
        "password": "1234"
    },
    "token": "b2056245448a43bd2f40ddbbda596dbfee0a004c"
}
```
Es necesario usar el "token" que se devuelve para acceder al resto de las rutas.
El token se utiliza dentro de los "Headers":
Authorization: Token b2056245448a43bd2f40ddbbda596dbfee0a004c

En caso de ya tener un usuario creado, se puede usar la siguiente ruta para recuperar el token asignado al usuario

```
http://127.0.0.1:8000/usuarios/login/
Metodo:POST
{
    "username": "test1",
    "password": "1234"
}
response:
{
    "user": {
        "id": 1,
        "username": "test1",
        "email": "",
        "password": "pbkdf2_sha256$1000000$lXOCHik3b8J9KAIibjuhPU$rlrMOLChESoCcuB6aNKbpS3WB213MJh+pkUeXV126lo="
    },
    "token": "b2056245448a43bd2f40ddbbda596dbfee0a004c"
}
```

### productos

- Conseguir todos los productos
```
http://127.0.0.1:8000/
Metodo:GET
headers { Authorization: Token {token_here}}
```

- Ingresar un producto
```
Metodo:POST
{
    "nombre": "libro",
    "descripcion": "es un libro",
    "precio": "20.50"
}
headers { Authorization: Token {token_here}}

response:
{
    "id": 1,
    "nombre": "libro",
    "descripcion": "es un libro",
    "precio": "20.50"
}
```

- Actualizar un producto
```
http://127.0.0.1:8000/producto/{id}/
Metodo:PUT
{
    "nombre": "libro",
    "descripcion": "es un libro actualizado",
    "precio": "20.50"
}
headers { Authorization: Token {token_here}}

response:
{
    "id": 1,
    "nombre": "libro",
    "descripcion": "es un libro actualizado",
    "precio": "20.50"
}
```

- Borrar un producto
```
http://127.0.0.1:8000/producto/{id}/
Metodo: DELETE
headers { Authorization: Token {token_here}}
```

## Frontend

Para configurar el frontend solo es necesario seguir estos comandos

### React
1. Nos colocamos en la carpeta ejercicio1

```bash
cd .\frontend\React\ejercicio1\
```

2. instalamos dependencias
```bash
npm i
```

3. Corremos la app
```bash
npm run dev
```

4. Para poder ver el funcionamiento correcto del programa, es necesario tener corriendo de igual forma el backend en DJANGO (vease las instrucciones anteriores). Dejo formatos para usuarios en caso de querer usarlos para correr el programa

```
{
    "username": "miguel",
    "email": "test@hotmail.com",
    "password": "1234"
}

{
    "username": "miguelAngel",
    "email": "test@gmail.com",
    "password": "1234"
}

{
    "username": "angel",
    "email": "test@gmail.com",
    "password": "1234"
}

{
    "username": "gabriel",
    "email": "test@gmail.com",
    "password": "1234"
}

{
    "username": "GabrielGarcia",
    "email": "gabriel@gmail.com",
    "password": "1234"
}
```


### Redux
1. Nos colocamos en la carpeta ejercicio1

```bash
cd .\frontend\Redux\ejercicioRedux\
```

2. instalamos dependencias
```bash
npm i
```

3. Corremos la app
```bash
npm run dev
```

# Ejercicios Practicos


## Frontend

### 2. React 
- Crea un componente funcional llamado UserList que obtenga datos de una API y muestre
una lista de usuarios con sus nombres y correos electrónicos.


- Implementa una funcionalidad de búsqueda que permita filtrar los usuarios por nombre.

R = Solucion se encuentra dentro de la Carpeta /frontend/React/ejercicio1


### 2. Redux
- Configura un store de Redux para manejar el estado de autenticación de un usuario.


- Crea acciones y reducers para iniciar sesión y cerrar sesión.

R = Solucion se encuentra dentro de la Carpeta /frontend/Redux/ejercicioRedux



## Backend

### 1. Node.js/Python


- Ejercicio 2
  - Crea una API utilizando Flask/Django que permita gestionar una lista de productos. Implementa endpoints para agregar, listar y eliminar productos.

  - Asegura la API con autenticación basada en tokens.


R = Solucion se encuentra dentro de la Carpeta /backend/Django

### 2. Arquitectura de Archivos

- Reestructura el siguiente proyecto desorganizado para mejorar su mantenibilidad y
escalabilidad. Proporciona una explicación de los cambios realizados.

```
/src
/components
  Header.js
  Footer.js
App.js
index.js
utils.js
api.js
styles.css

```

R= En primer lugar, si lo que tenemos es un proyecto de frontend desarrollado en React, la terminación de los archivos componentes deberia de ser ".jsx" (o "tsx" si se esta usando typescript). En este momento no existe ningún orden para la organización de nuestros archivos, en el momento que comiencen a crecer nuestro componenes y nuestras páginas, empezaremos a crear desorden dentro del area de trabajo. Otra cosa es que podemos separar lo que existe en styles.css para poder tener un archivo de estilos por cada componente, de igual forma mantener los archivos css generales en una carpeta y los archivos css exclusivos a algún componente cerca de el propio componente. En este momento los nombres de los archivos no ayudan a determinar cual es la funcionalidad de cada uno, podemos cambiar los nombres como los de utils.js para que reflejen exactamente que es lo que hacen (ejem: /utils/validation.js)
Propongo para empezar: 
```
/src
  /components - componentes reutilizables
    - Header.jsx
    - Footer.jsx
  /
  /assets - Elementos estáticos.
    - global.css - css para componentes globlales
    - Logo.png - Una imágen que podria ser utilizada en el componente Header
  /Pages - Todos los archivos que representan una página en nuestra app
    /Landing
  /hooks - custom hooks para logica reutilizable
    - useAuth.js - Función autenticación.
  /utils
    -validations.js
    -helpers.js
  /api - Códigos para interactuar con elementos externos a la app
    - taskApi.js
    - userApi.js
  /store - En caso de utilizar Redux
  App.jsx


```
