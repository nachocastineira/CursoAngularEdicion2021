# 🌐 Angular: De cero a experto **(Edición 2021)** de **Fernando Herrera** : [Link](https://www.udemy.com/course/angular-fernando-herrera/)

Este curso te ayudará a aprender Angular (la última versión) a profundidad mediante ejercicios y tareas que tú mismo harás. 
Partiendo de cero conocimiento de TypeScript hasta crear un sistema robusto de autenticación, uso de mapas, consumo de servicios y mucho más.

***

### :wrench: Tecnologias Utilizadas: ####

* Proyectos realizados en __Angular (v13.0.2)__ + __Node.js (v16.13)__ y __TypeScript (v3.8.3)__ con estándar __ECMAScript 6__

* APIs utilizadas
    * __Mapbox__ https://www.mapbox.com/
    * __GIPHY__  https://developers.giphy.com/
    * __REST Countries__  https://restcountries.com/


* Uso de __Bootstrap (v5.1.3)__, __Angular Material UI (v13.1.1)__, __Prime NG__, __json-server__, __Angular Flex y Flexbox__, __SweetAlert__ y __RxJS__

* Uso de __Postman__, __MongoDB Compass__, __Visual Studio Code__, __quicktype__, __OS Windows 10__ y __Google Chrome__

***

## :file_folder: Guía de apps realizadas 
* **00- TS_Intro:** Sección 2 y 3
* **01- Bases:** Sección 4 y 5
* **02- GifsApp:** Sección 7
* **03- PaisesApp:** Sección 8 y 9
* **04- PipesApp:** Sección 10 y 11
* **05- HeroesApp y HeroesServer:** Sección 12, 13, 14 y 15
* **06- FormulariosApp y FormulariosBack:** Sección 16, 17 y 18
* **07- Selectores:** Sección 19
* **08- LifeCycle:** Sección 20
* **09- MapasApp:** Sección 21
* **10- GraficasApp y GraficasBack:** Sección 22
* **11- DirectivasApp:** Sección 23
* **12- AuthServer y AuthApp:** Sección 24 (Node), 25 y 26

***

## :clipboard: Secciones del curso

### Sección 1: Introducción

### Sección 2: Conceptos generales
* Generalidades de TypeScript
* ¿Por qué Angular usa TypeScript?
* Mitos y realidades de Angular

Es una sección muy corta y teórica, pero necesitamos comprender estos temas para sobrepasar mitos y ideas erróneas que rodean el mundo de Angular.

### Sección 3: Base de TypeScript 
* Introducción a TypeScript
* Tipos básicos
* Objetos, arreglos e interfaces
* Funciones y sus argumentos
* Desestructuración de arreglos y objetos
* Importaciones y exportaciones
* Clases, constructores
* Tipos genéricos
* Decoradores
* Encadenamiento opcional

La idea de esta sección no es hacerlos expertos en TypeScript, pero sí irnos acostumbrando a la sintaxis y el tipado estricto de datos.

Después de la sección, podrán ver con otros ojos TypeScript y enfocarnos en todo lo que nos puede brindar, en lugar de las barreras que nos puede poner.

### Sección 4: Introducción a Angular
* Crear proyectos de Angular
* Explicar cada archivo y directorio de un proyecto
* Componentes
* Módulos
* One way data binding
* Uso del AngularCLI - Angular Command Line Interface
* Directivas creadas por Angular
* ngIf y ngIf-else
* Y más...

Esta es la sección donde empezaremos nuestro camino de Angular.

### Sección 5: Expandiendo nuestra bases
Una vez sentadas las bases de Angular en la sección anterior, vamos a seguir expandiéndolas aquí, con los siguientes temas:

* Profundizar un poco más en los módulos
* FormsModule
* ngModel
* @Inputs
* @outputs
* Servicios
* Métodos en servicios
* Depuraciones

Hay más temas en los videos, pero en forma general esto es lo principal por ahora, tengan presente que aunque todo esto es opcional, la mayor parte de aplicaciones de Angular usan en cierto punto cada uno de los temas que están en esta sección, por lo que hay que asegurarnos de comprender bien cada lección.

### Sección 6: Despliegues rápidos a producción
Este es un breve listado de los temas fundamentales:
* Generar build de producción
* Desplegarlo rápidamente
* Netlify

Aquí aprenderemos como generar el build de producción de nuestra aplicación y la desplegaremos en la web rápidamente usando Netlify, el proceso de despliegue en otros servidores es virtualmente el mismo, tomar nuestra carpeta DIST (que contiene la aplicación con archivos HTML, CSS y JS) y desplegarla mediante FTP (preferiblemente sFTP) en el hosting deseado.

### Sección 7: GifsApp - Aplicación para buscar imágenes
La sección contendrá nuestra primera aplicación real de Angular, este es un breve listado de los temas fundamentales:
* Modularización de la aplicación
* Estructura de la aplicación de media a gran escapa
* Componentes
* ViewChild
* Servicios
* Historial de búsquedas
* Uso de Api Keys
* LocalStorage
* Peticiones HTTP
* Animaciones mediante css

Recuerden que siempre tienen el código fuente al final de la sección para que lo puedan descargar y comparar contra el suyo en caso de que sea necesario.

### Sección 8: SPA - PaisesApp
Este es un breve listado de los temas fundamentales:
* Rutas
* RouterLink y RouterLinkActive
* Componentes especializados
* DebounceTime
* Inputs
* SwitchMaps
* Consumo de APIs
* Tipado de datos
* Menú de aplicación
* Y más

En esta sección daremos los fundamentos de una aplicación SPA (Single Page Application), y luego, las seguiremos haciendo pero mediante carga perezosa (lazyload), esta es otra aplicación real que nos enseñara mucho de cómo funciona Angular y como la información fluye en ella.

### Sección 9: Continuación de PaisesApp - Sugerencias, debounce y más
Aquí continuaremos la aplicación de países, pero enfocados en la parte de las sugerencias y auto-completado, este es un breve listado de los temas fundamentales:
* ngClass y diferentes formas de manipular clases
* CSS condicionales
* Optimizaciones a peticiones HTTP
* Animaciones de CSS
* Auto-completado en la búsqueda de países
* No es una sección muy larga, pero dejaremos las bases de cómo funciona un auto-completado en general.

### Sección 10: Pipes de Angular
Esta sección es de mis favoritas del curso, veremos temas sobre Pipes y transformación visual de la data, pero también decidí mezclarlo con otro tema muy solicitado que es PrimeNG (Más adelante hay también una sección con muchos componentes de Angular Material), pero esta sección pretende enseñarles muchas cosas interesantes, aparte de los Pipes de Angular

Este es un breve listado de los temas fundamentales:
* Todos los Pipes de Angular a la fecha
* Uppercase
* Lowercase
* TitleCase
* Date
* Decimal
* Currency
* Percent
* i18nSelect
* i18Plural
* KeyValue
* Json
* Async
* PrimeNG
* Módulo especializado para módulos de PrimeNG

PrimeNG es un paquete de componentes estilizados que contienen funcionalidades basadas en Angular para crear aplicaciones elegantes, hermosas y funcionales rápidamente.

Recuerden que PrimeNG no es el único, hay muchos pero la mayoría funcionan de formas similares, importando módulos, por eso mi objetivo de entrenarlos bastante bien con el manejo de módulos en todo momento para que nos familiaricemos con esta métodología.

### Sección 11: Pipes Personalizados
Este es un breve listado de los temas fundamentales:
* Pipes personalizados
* Argumentos hacia los Pipes
* SortableTable manual y usando PrimeNg

Es una sección pequeña, pero sumamente ilustrativa y necesaria para poder expandir todos los pipes que no existen

### Sección 12: HeroesApp - Rutas hijas y Lazyload
Este es un breve listado de los temas fundamentales:
* Rutas Hijas
* Rutas Principales
* LazyLoad
* Multiples estilos en la misma SPA

Esta sección es fundamental para seguir el curso, ya que de aquí en adelante, implementaremos la carga perezosa en cada módulo principal de las futuras aplicaciones que haremos.

Comprender el Lazyload no es difícil, y la forma como lo veremos aquí nos ayudará a manejar los dos posibles casos de uso. Uno de ellos es cuando la ruta hija no tiene estilo especial y otra en la que requiere un estilo diferente por cada módulo.

### Sección 13: HeroesApp - Angular Material y Angular Flex-Layout
Este es un breve listado de los temas fundamentales:
* Angular Material
* Interfaces y tipado
* Pipes personalizados
* Variables de entorno
* Autocomplete de AngularMaterial
* Peticiones HTTP
* JSON-Server
* Angular Flex y Flexbox
* Y más...

Esta sección tiene por objetivo principal aprender a utilizar Angular Material, es la primera de varias secciones donde lo usaremos. Al final del día trabajaremos con muchos componentes de Angular material que les ayudará a ver cualquier otro tipo de paquete modularizado de la misma manera y ustedes sabrán aplicarlo.

En la siguiente sección después de esta, continuaremos la aplicación pero realizaremos un CRUD.

### Sección 14: HeroesApp - CRUD
Este es un breve listado de los temas fundamentales:
* CRUD
* Create
* Read
* Update
* Delete
* Pipes puros e impuros
* Snacks
* Dialogs
* Inyección de servicios manualmente

Esta sección les dará las bases para poder realizar CRUD completos hacia cualquier backend basado en servicios web, mediante comunicación JSON

### Sección 15: Protección de Rutas
Este es un breve listado de los temas fundamentales:
* Protección de rutas
* Rutas privadas
* Rutas públicas
* Servicio de autenticación
* Guards
* CanActivate
* Can Load
* Mantener la sesión del usuario

Esta es una sección muy importante, donde controlaremos de forma básica una autenticación, mucho más adelante en el curso, realizaremos autenticación mediante JWT, pero antes de llegar a eso que son temas de Backend, necesito que comprendamos cómo Angular nos puede servir para proteger nuestras rutas.

### Sección 16 - Formularios - Template y Lazyload
Este es un breve listado de los temas fundamentales:
* Template driven
* ViewChild
* Two way databinding
* Formularios dinámicos
* Checks, radios y switches
* Directivas personalizadas - Nota: este tema se cubre a profundidad después en una sección especializada
* Manejo del formulario y validaciones
* Encapsular módulos y scope de los mismos

Este es un tema fundamental, pero no es el único, hay varias formas de manejar el estado de un formulario, principalmente tenemos Template driven y Model Driven o formularios reactivos, en esta sección trabajaremos con formularios por template.

### Sección 17 - Formularios Reactivos
Este es un breve listado de los temas fundamentales:
* Formularios Reactivos
* Lazyload y tareas relacionadas
* Validaciones propias de Angular
* Arreglos y objetos anidados
* FormBuilder
* FormGroup
* FormArray

Esta sección continua en la siguiente con más temas relacionados a formularios reactivos, ya que como se podrán imaginar es bastante información que digerir, pero lo importante aquí es que comprendamos que Angular cuenta con varias maneras de manejar formularios.

Muchos me pregunta cuál aproximación prefiero, y son los formularios reactivos, porque siento que tengo mayor control y más fácilmente puedo manipular el formulario, pero los formularios por template sirven mucho cuando son tareas simples o rápidas. Aunque en esos casos, muchas veces prefiero no utilizar formularios por template y simplemente tomo el valor que necesito con referencias locales.

### Sección 18 - Formularios: Validaciones manuales  asincronas

Este es un breve listado de los temas fundamentales:
* Validaciones manuales
* Validaciones asíncronas
* Validar contra expresiones regulares
* Separar la lógica de validaciones
* Estado del formulario
* Mensajes de error personalizados

Más adelante tendremos una sección de directivas, la cual es un excelente complemento para el manejo de errores de formularios reactivos, pero luego llegarán a ella.

Por ahora me interesa que dominemos el flujo de información y validaciones de los formularios reactivos. Recuerden que todo lo que se haga en formularios Reactivos se puede hacer con los formularios por template, pero prefiero enfocar tiempo y esfuerzo en este tipo de formularios reactivos por la facilidad y control.

### Sección 19 - Formularios Reactivos - Multiples selectores aninados
Esta sección es una extensión de los formularios reactivos, la cual cubre un tema muy preguntado, que es el manejo de selectores anidados.

Es decir, un selector muestra información, y al cambiar, carga información basado en la primera selección y luego llegamos hasta un tercer nivel.

Es un ejercicio que puede verse complicado, pero vamos paso a paso, llenando select por select y al final les enseño una forma de organizar mejor el código usando RXJS.

### Sección 20 - LifeCycle Hooks

Esta sección está enfocada en hablar y explicar todos los pasos del ciclo de vida de un componente (también se aplican a las directivas que veremos después).

No es una sección muy larga, pero mi objetivo es guiarlos en la documentación oficial y hacer un par de ejemplos con ellos. Luego de esta sección hay más aplicaciones que hacen uso de ciertos pasos del ciclo de vida de los componentes que comprenderemos gracias a esta sección.

También estos pasos, son conocidos como Hooks, que posiblemente haz escuchado en React, pero funcionan diferente, pero comparten la similitud de que son Métodos (o funciones) que se ejecutan cuando algo sucede en un componente.

### Sección 21: Mapas en Angular

Este es un breve listado de los temas fundamentales:
* Manejo de librerías escritas en JavaScript en TypeScript
* Uso de Mapas basados en Mapbox (el API es similar a la de Google Maps)
* Marcadores
* Eventos
* FlyTo
* Coordenadas geográficas
* Componentes para re-utilización de mapas
* Mantener objetos de forma persistente
* @types
* Zoom
* Range
* Y más

Aunque el uso de mapas no es algo directamente relacionado con Angular, ya que todo se realiza mediante un objeto de una librería de terceros, en este caso Mapbox, es interesante comprender cómo funcionan esas librerías dentro de Angular y cómo poder tener control de los objetos como si fueran propiedades de nuestras clases.

### Sección 22: Gráficas en Angular

Este es un breve listado de los temas fundamentales:
* Gráficas dinámicas
* Gráficas de Barra y Dona
* Re-dibujar valores de gráfica
* Gráficas basadas en peticiones HTTP
* Componentes especializados para la re-utilización de gráficas
* Y más...

Esta sección tiene por objetivo enseñarles a usar otra librería de terceros en Angular, para que comprendamos como mostrar de forma visual la data de nuestros componentes.

### Sección 23: Directivas personalizadas de Angular
* Directivas personalizadas
* Directivas estructurales personalizadas
* Manipulación del elemento del DOM que es host de la directiva
* Cambio del HTML y estilos del objeto DOM host.

### Sección 24: Auth Backend - MEAN
* Fundamentos de Node
* REST Services
* JWT
* MongoDB - Mongo Atlas
* Express framework
* Express validator
* CRUD
* Validaciones
* Modelos de base de datos
* Encriptar contraseñas

### Sección 25: AuthApp - MEAN
* Conectar Angular con nuestro backend#
* Manejo de JWT
* Lazyload y rutas
* Guards
* Mantener el estado del usuario
* Manejo de errores
* RXJS y Operadores
* SweetAlert

### Sección 26: Desplegar backend y frontend a producción
* Generar versión de producción de Angular
* Desplegar nuestra app de Angular en nuestro backend de Node
* Desplegar el backend + frontend en Heroku
* Realizar actualizaciones por cambios en el Frontend o Backend
* Re-desplegar a Heroku
* Revisar logs en producción

***

## :eyes: Capturas de aplicaciones realizadas 

### :trollface: GifsApp:  

![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/02-GifsApp.png?token=AFBRMPKOZQKKKWYPADUG6YDBZNYSA)

### :earth_americas: PaisesApp:  

![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/03-PaisesApp_regiones.png?token=AFBRMPLJEZFBRHYIOOFC6ADBZNZNE)
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/03-PaisesApp_porPais.png?token=AFBRMPOWTXMWBMHOKWRNUD3BZNZM4)
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/03-PaisesApp_capital.png?token=AFBRMPMDNHRS44QIHHZWHELBZNZMW)

### :trident: HeroesApp:  

![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/05-HeroesApp-listado.png?token=AFBRMPIJ4S3D4IT7XIJYK7DBZNZQY)
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/05-HeroesApp-agregar.png?token=AFBRMPPO4LPXYTXTALTEZTLBZNZQW)

### :bookmark: FormulariosApp:  

![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/06-formulariosApp-template-basicos.png?token=AFBRMPJKDPZKV2QN2OY6LHLBZNZT6)
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/06-formulariosApp-template-dinamicos.png?token=AFBRMPII4TO7APBPMH3LG73BZNZUK)
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/06-formulariosApp-template-switches.png?token=AFBRMPPH3YAGIT2W6APYAG3BZNZUO)

### :round_pushpin: MapasApp:  
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/09-mapasApp-fullscreen.png?token=AFBRMPOTGX2SPJ4PXNTF6WDBZNZZQ)
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/09-mapasApp-zoomRange.png?token=AFBRMPM64I43HUT2HII7MFTBZNZZ4)
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/09-mapasApp-marcadores.png?token=AFBRMPOFMJWVALXKZTP3GQTBZNZZU)
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/09-mapasApp-propiedades.png?token=AFBRMPP5FZIHMJMML2Q2NLDBZNZ2E)

### :closed_lock_with_key: AuthApp:  
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/12-authApp-registro.png?token=AFBRMPN5NOTIFHPMYHD2E33BZNZ6G)
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/12-authApp-login.png?token=AFBRMPPUA6HRQRGMFPTJESLBZNZ6A)
![alt text](https://raw.githubusercontent.com/nachocastineira/CursoAngularEdicion2021/master/Capturas%20Apps/12-authApp-dashboard.png?token=AFBRMPNKEOFHZW6S6OJ3CRTBZNZ6O)

