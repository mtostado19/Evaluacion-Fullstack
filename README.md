# Evaluacion-Fullstack
# Preguntas teoricas

## Frontend

### 1. React

- Explica el ciclo de vida de un componente en React.

R = Se divide en 3 etapas: Mounting (cuando el componente aparece por primera vez en el Dom), Updating (Cada vez que cambia algún estado dentro del componente), Unmounting (Cuando deja el DOM). El ciclo de vida era utilizado principalmente al crear componentes de clase con los metodos:"componentDidMount, componentDidUpdate" y "componentWillUnmount", en la actualidad estos se encuentran deprecados y estos 3 estados pasaron a ser manejados dentro del hook "useEffect".

- ¿Qué son los hooks en React y para qué se utilizan? Menciona al menos tres hooks
comunes.

R = Los "Hooks" en React se pueden ver como unas funciones especiales que nos permiten aplicar dentro de los componentes que creamos las funciones que provee React. Podemos crear nuestros propios "custom Hooks" para crear funciones que conecten nuestra aplicación con otras funciones, o podemos usar los hooks ya proporcionados por React.
    - useState = Crea una variable con propiedades que podemos ver como getter y setter ([state, useState]) dentro de un componente. Esto nos permite declarar y actualizar variables en nuestros componentes.
    - useEffect = Este hook nos permite manejar los cambios que ocurran dentro de nuestra aplicación, con esto podemos reaccionar a cualquier operación que ocurra fuera del flujo normal de la app. Podemos configurarlo para escuchar: - Cambios iniciales del componente, -cualquier cambio de estado dentro del componente, o, -únicamente escuchar el cambio de algún componente específico.
    - useMemo = Permite reutilizar algún cálculo que ya esté guardado en el caché para así evitar volver a realizar operaciones costosas. Esto nos permite evitar volver a renderizar si la información no ha cambiado y puede volverse a usar.

### 2. Redux:

- ¿Qué es Redux y cuál es su propósito en una aplicación React?

R = Redux resuelve un problema común al trabajar con componentes; mantener control de los estados de nuestra aplicación a través de múltiples componentes. Podemos crear estados globales que sean predecibles y más fáciles de manejar sin tener que generar respuestas impredecibles dentro de la lógica en nuestros múltiples componentes. Se crean estados en un "store" únicamente de solo lectura, y cuando los elementos de UI activan un evento llamado "actions", se llama a un "reducer" que guarda la lógica para actualizar la variable global.


- Describe los conceptos de actions, reducers y store en Redux.

R = Actions: Objetos de javascript, pueden ser interpretados como eventos que describen algo que ocurre en nuestra aplicación. Reducers: Son funciones que reciben un "action" y devuelven un nuevo estado actualizado, su función es cambiar el estado según la acción. Store: Es el objeto en donde se contiene el estado global de toda la app. Solo está disponible en modo lectura y se actualiza dentro de los reducers

## Backend

### 1.1 Node.js
- ¿Qué es el Event Loop en Node.js y cómo funciona?

R = El "event loop" se refiere al funcionamiento y procesamiento de las peticiones asincronas de javascript, es lo que permite realizar múltiples peticiones a pesar de estar funcionando en un lenguaje que no permite crear multihilos. Con esto las peticiones asincronas generan una promesa que puede ser respondida más adelante, lo cual no afecta al call stack y esto permite que no se bloquee el programa esperando respuestas de funciones externas.

- Explica la diferencia entre require y import en Node.js.

R = "Require" se usa para importar un módulo de forma síncrona, esto significa que bloquea las operaciones hasta terminar de cargar el módulo, además pertenece al sistema CommonJS. Por otra parte import permite que el programa prosiga con su ejecución mientras se termina de obtener el módulo, pertenece al estandar ES6.


### 1.2 Python
- ¿Qué es un decorador en Python y cómo se utiliza?

R = Un decorador en Python es una forma en la cual podemos agregar comportamientos antes y/o después de la ejecución de una función, comúnmente se usan en sistemas como autenticadores para validar la información antes de llevar a cabo su ejecución. Se crea una función que reciba una función para que sirva como nuestro decorador, dentro de esta se genera una función que reciba los mismos parámetros que la función a la cual será asignado el decorador, luego se escribe el código que se quiere ejecutar antes de la función original, luego se llama a la función, y por último se ejecuta cualquier código que quiera tener al final de la función. A continuación se tiene un ejemplo de cómo se implementa un decorador:
```python
def decorator(func):
    def wrapper(*args, **kwargs):
        print("Antes de iniciar imprime esto")
        print('La funcion:', f'{func.__name__}', 'se esta ejecutando')
        result = func(*args, **kwargs)
        print("Cuando termines imprime esto igual")
        return result
    return wrapper

@decorator
def test():
    print("Esto es una prueba")

@decorator
def hola(x):
    return x + 1

test()
print(hola(1))
```

- Explica la diferencia entre multiprocesamiento y multihilo en Python.

R = Multihilo se refiere a la capacidad de un procesador de realizar múltiples tareas simultáneamente. Multiprocesamiento se refiere a la habilidad del sistema para correr múltiples procesadores al mismo tiempo donde cada procesador se encarga de procesar sus hilos. Aunque ambos se refieren a la habilidad de realizar múltiples tareas a la vez, se están refiriendo a diferentes niveles en donde se realiza el multitasking.


### 2. Arquitectura de Archivos

- ¿Cuáles son las mejores prácticas para organizar la estructura de carpetas en una
aplicación React?
  - Identificar y separar componentes genéricos y reutilizables con los componentes específicos
  - Usar PascalCase para componentes, camelCase para hooks y snake_case para cualquier recurso.
  - Mantener cerca elementos como estilos o pruebas cercanas al componente que se va a utilizar.
  - Mantener organizados los diferentes archivos que se van a manejar en el proyecto
Ejemplo:
```
- assets
- components
  - Button
    - Button.jsx
    - button.styles.css
- hooks
- pages
- services
- routes
- utils
- App.jsx
- main.jsx
```
Es importante determinar el tamaño del proyecto, para proyectos pequeños y personales no siempre es necesario llevar una estructura tan rigida, si queremos garantizar que nuestro proyecto sea escalable más adelante, es mejor llevar una buena estructura desde el inicio de la planeación del proyecto.



- Describe una estructura de directorios ideal para un proyecto fullstack que utiliza React
en el frontend y alguna de las siguientes tecnologías en el backend: Node.js, Python o
.NET.

R = Se mantienen 2 carpetas donde se encuentra todo lo del lado del cliente (Frontend) y todo lo que se encuentra del lado del servidor (Backend). Para python, se puede realizar todo en un entorno virtual para evitar conflictos futuros con las versiones de los módulos. Para deploy es necesario tener un archivo con las variables de entorno (.env), para guardar toda la información sencible que necesite nuestra aplicación.

Frontend
```
- frontend
  - assets
  - components
    - Button
      - Button.jsx
      - button.styles.css
  - hooks
  - pages
  - services
  - routes
  - utils
  - App.jsx
  - main.jsx
  - .env
```


Backend python
```
- backend
  - venv
  - projecto_name
    - setting.py
    - urls.py
    - asgi.py
    - wsgi.py
  - app1_name
    - migrations/
    - admin.py
    - apps.py
    - models.py
    - serializers.py
    - test.py
    - urls.py
    - view.py
  - manage.py
  - .env
```
