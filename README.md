# Evaluacion-Fullstack
# Ejercicios Practicos

## Frontend

### 2. React 
- Crea un componente funcional llamado UserList que obtenga datos de una API y muestre
una lista de usuarios con sus nombres y correos electrónicos.


- Implementa una funcionalidad de búsqueda que permita filtrar los usuarios por nombre.


### 2. Redux
- Configura un store de Redux para manejar el estado de autenticación de un usuario.


- Crea acciones y reducers para iniciar sesión y cerrar sesión.


## Backend

### 1. Node.js/Python

- Ejercicio 1
  - Desarrolla una API RESTful sencilla que permita crear, leer, actualizar y eliminar
(CRUD) registros de "Tareas" (tasks). Cada tarea debe tener un id, titulo, descripcion y estado.
  - Implementa validación de datos utilizando middleware.


- Ejercicio 2
  - Crea una API utilizando Flask/Django que permita gestionar una lista de productos. Implementa endpoints para agregar, listar y eliminar productos.

  - Asegura la API con autenticación basada en tokens.


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