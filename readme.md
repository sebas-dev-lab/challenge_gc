## CHALLENGE

### Tecnología

- NodeJs
- Typescript
- Express

### Herramientas

- Postman
- Newman
- Eslint
- Prettier
- Git

### ¿Cómo funciona?

> **Endpoints**

- /api/auth/register | POST
    - Verifica el contexto de registro
    - Verifica si el usuario existe en registro
    - Inserta Nuevo usuario
    - Encripta password
    - Devuelve error si el usuario ya existe o no se envian los datos requeridos
- /api/auth/signin | POST
    - Verifica si existe contexto de login
    - Verifica si el usuario existe dentro del contexto de registro
    - Verifica si el usuario ya se encuentra login
    - Crea contexto de login si no existe
    - Crea nueva sesion de usuario si no existe
    - Actualiza token de sesion si no existe
    - Crea token      
- /api/auth/signout | GET
    - Previamente es testeado por el middleware de autenticacion
    - Requiere solo el envio de token basic auth
    - Verifica que exista contexto de login y que el usuario exista
    - Elimina sesion del contexto de login
- /api/analysis | POST
    - En base a los parametros enviados realiza el calculo según establecido en la documentacion del challenge.
- /api/test_view | GET
    - Al inicializar la api se lleva a cabo un proceso de testing que puede ser observada en la consola del cliente, la cual tambien genera un reporte html, que puede accederse a traves de este endpoint desde el navegador.


> **Otras características**

- Se inicializa un contexto para la conexión, la cual imita a una base de datos pero en memoria. Por lo que cada vez que se reinicia el servicio el mismo se inicializa nuevamente perdiendo la información.


> **Instalación**
- Se debe tener node instalado.
- Si se requiere modificar enviroment:
    - src/infraestructure/server/envs/.env.local
- En consola y sobre la raíz del proyecto ejecutar:
    - Instalar:
        - ``npm install`` || ``npm install --force``
        - Recomendado pero no requerido: ``npm install -g newman``
        - Recomendado pero no requerido: ``npm install -g newman-reporter-html``
    - Ejecutar en local:
        -``npm run start:local``


> **Durante la iniciacón**

- Una vez inicializado se ejecuta automáticamente el test por newman y se genera el reporte html, el cual tambien es observado desde consola.

> **Consideraciones**

- Se puede importar los archicos .json de test_newman al postman donde se puede probar manualmente.

## Nota Final

- En este proyecto, intente salir de la arquitectura básica que se suele trabajar en node.
- En lugar de utilizar testing uitario con Jest o Mocha - Chai, decidí implementar otras herramientas de testing y documentación que permiten controlar luego un proceso de CI/CD de forma automatica. 
