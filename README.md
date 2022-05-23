# Pruebas con generación de datos Semana 7

#### IMPORTANTE: Tener en cuenta que ghost no permite más de 100 ingresos en un día, por lo cual se recomienda correr las pruebas en 2 tandas en días diferentes, o ingresar a la base de datos de la aplicación con un gestor (ej: sqlite) y en la tabla "brute" cambiar el 100 por un 1 cuando se completen los 100 ingresos

En la herramienta Cypress se desarrollaron las pruebas. La herramienta faker.js se utilizó para la generación de datos aleatorios. Para las pruebas se usó la siguiente versión de la aplicación Ghost:

Versión Ghost 4.41.3

La descripción de las estrategias de generación de datos para los escenarios se encuentra en la wiki.

## Instrucciones
* Para la versión de ghost que se desea ejecutar se puede instalar docker en su sistema operativo (https://docs.docker.com/engine/install/)
* * Una vez se tenga docker instalado, en una terminal se debe ejecutar el siguiente comando para la versión 4.41.3 de Ghost: 
* * `docker run -d -e url=http://localhost:2368 -p 2368:2368 --name ghost_4.41.3 ghost:4.41.3`
* * Después se puede abrir la aplicación Ghost usando la url http://localhost:2368/ghost para las pruebas en cypress
* Asegurarse de que la aplicación está en ejecución antes de hacer las pruebas

### Acceso
* Usuario: test@test.com
* Contraseña: 12345678910
* Para ejecutar las pruebas en la terminal se debe ubicar en la raiz del repositorio y desde esta ubicación ejecutar el comando `cypress open`. Esto abrirá una ventana de la herramienta con los features a ejecutar


## Integrantes
* Krishtian Barrera
* * kd.barrera@uniandes.edu.co
* Sara Maya
* * s.mayav@uniandes.edu.co
* Sara Ramirez
* * sg.ramirez940@uniandes.edu.co
* Miguel Dueñas
* * m.duenasb@uniandes.edu.co

## Registro de reporte de incidencias

Varias de las incidencias encontradas se añadieron al registro de incidencias Jira ubicado en la siguiente URL:
* https://proyectopruebasautomatizadas.atlassian.net/jira/projects
* Nombre del proyecto: Reporte de Incidencias Aplicación Ghost.
* Acceso:
  * correo: smayav@outlook.com
  * Usuario: UsuarioPrueba 
  * Contraseña: UsuarioPrueba
  * Incidencias de esta entrega: a partir del número RIAG-26


##  Listado de Escenarios de prueba
### 1. Login
#### Pool de datos a-priori
* Escenario 1: ambas credenciales correctas
* Escenario 5: contraseña vacía
* Escenario 6: correo vacío

#### pool de datos pseudo aleatorio
* Escenario 3: correo incorrecto
* Escenario 4: ambas credenciales incorrectas
* Escenario 7: correo con 75 caracteres +1


#### Generación de datos aleatoria
* Escenario 2: contraseña incorrecta
* Escenario 8: contraseña con 500 caracteres +1
* Escenario 9: correo sin formato de correo

### 2. Perfil del usuario
### 2.1 cambiar contraseña
#### Pool de datos a-priori
* Escenario 11: valor de la nueva contraseña igual al de la antigua contraseña
* Escenario 14: contraseña antigua incorrecta

#### pool de datos pseudo aleatorio
* Escenario 10: valor de verificación diferente al de la contraseña nueva
* Escenario 12: campo nueva contraseña con 10 caracteres -1

#### Generación de datos aleatoria
* Escenario 13: campo nueva contraseña con 500 caracteres +1

### 2.2 editar datos del perfil
#### Pool de datos a-priori
* Escenario 15: cambiar nombre
* Escenario 17: nombre con caracteres especiales
* Escenario 20: cambiar correo
* Escenario 23: ingresar locación
* Escenario 26: locación con caracteres especiales

#### pool de datos pseudo aleatorio
* Escenario 21: correo sin formato de correo
* Escenario 22: correo con 75 caracteres +1
* Escenario 27: ingresar website
* Escenario 28: website sin formato de url
* Escenario 29: Ingresar bio


#### Generación de datos aleatoria
* Escenario 16: nombre con valores numéricos
* Escenario 18: nombre con 191 caracteres +1
* Escenario 19: nombre con 1 letra
* Escenario 24: locación con 250 caracteres +1
* Escenario 25: locación con valores numéricos
* * Escenario 30: Bio con 200 caracteres +1


### 3. Creacion de post
#### pool de datos pseudo aleatorio
* Escenario 31: Crear Post exitoso titulo y descripcion
* Escenario 32: Crear Post exitoso solo titulo
* Escenario 33: Crear Post exitoso solo descrpcion
* Escenario 34: Crear Draft exitoso titulo y descripcion
* Escenario 35: Crear Draft exitoso titulo
* Escenario 36: Crear Draft exitoso descripcion
* Escenario 37: Crear post solo numeros
* Escenario 38: Crear Post exitoso titulo y descripcion y URL
* Escenario 39: Crear Post error titulo largo
* Escenario 40: Borrar post exitoso
#### Pool de datos a-priori
* Escenario 41: Crear post solo caracteres speciales

### 4. Creacion de miembro
#### pool de datos pseudo aleatorio
* Escenario 42: Crear miembro basic ok
* Escenario 43: Crear miembro solo numeros ok
* Escenario 44: Validar correo no solo numeros
* Escenario 45: Agregar dos veces el mismo tag
* Escenario 46: Agregar dos veces el mismo tag de numeros
* Escenario 47: Crear con notas corta
* Escenario 48: Error al crear nota larga
* Escenario 49: Crear con notas con numeros
* Escenario 50: Crear miembro con suscripcion
#### Pool de datos a-priori
* Escenario 51: Validar correo no solo simbolos
* Escenario 52: Agregar dos veces el mismo tag de simbolos
* Escenario 53: Crear con notas con simbolos
### 5. Buscar miembro
#### pool de datos pseudo aleatorio
* Escenario 54: Buscar miembro por nombre por el inicio
* Escenario 55: CBuscar miembro por nombre por el medio
* Escenario 56: Buscar miembro por nombre por el final
* Escenario 57: Buscar miembro por correo
* Escenario 58: Borrar miembro
* Escenario 59: Buscar miembro por nombre numeros
#### Pool de datos a-priori
* Escenario 60: Buscar miembro por nombre simbolos

### 6. Páginas
### 6.1 crear páginas
#### Pool de datos a-priori
* escenario 64: Crear una página con titulo que contenga caracteres especiales

#### Generación de datos aleatoria
* escenario 61: Crear una página con titulo numérico
* escenario 62: Crear una página con titulo de una sola palabra
* escenario 63: Crear una página con titulo de una sola letra
* escenario 65: Crear una página con titulo que contenga más de 255 caracteres 
* escenario 66: Crear una página con contenido que contenga 1 sola palabra
* escenario 67: Crear una página con contenido que contenga más de 1000 caracteres
* escenario 68: Crear una página con contenido que contenga 5 parágrafos
* escenario 69: Crear una página diligenciando el campo Excerpt con 1 frase
* escenario 70: Crear una página diligenciando el campo Excerpt con más de 300 caracteres

### 6.2 editar páginas
#### Generación de datos aleatoria
* escenario 71: Editar el título de una página
* escenario 72: Editar el título de una página con más de 255 caracteres
* escenario 73: Editar el contenido de una página
* escenario 74: Editar el contenido de una página con más de 100 caracteres
* escenario 75: Editar el el campo Excerpt
* escenario 76: Editar el el campo Excerpt con más de 300 caracteres

### 7. Settings General
#### Generación de datos aleatoria
* escenario 77:
* escenario 78:
* escenario 79:
* escenario 80:
* escenario 81:
* escenario 82:
* escenario 83:
* escenario 84:
* escenario 85:
* escenario 86:
* escenario 87:
* escenario 88:
* escenario 89:
* escenario 90:

### 8. Tag
### 8.1 Crear Tag
#### Generación de datos aleatoria
* escenario 91: Color RGB con valores numéricos 
* escenario 92: Color RGB con valores alfanuméricos con menos de 6 dígitos
* escenario 93: Color RGB con valores alfanuméricos con menos de 7 dígitos
* escenario 94: Color RGB con valores de caracteres especiales
* escenario 95: Valor de Slug con espacios debería de fallar y no ser admitido
* escenario 96: Descripción con valores alfanuméricos de 500 caracteres
* escenario 97: Descripción con valores alfanuméricos de 501 caracteres
* escenario 98: Meta data del Tag, meta title 299 caracteres
* escenario 99: Meta data del Tag, meta title 301 caracteres
* escenario 100: Meta description 500 catacteres
* escenario 101: Meta description 501 catacteres
* escenario 102: Canonical URl con dirección url
* escenario 103: Canonical URL con valores alfanuméricos
* escenario 104: Twitter title con valores alfanuméricos de 300 caracteres
* escenario 105: Twitter title con valores alfanuméricos de 301 caracteres
* escenario 106: Twitter Description con valores alfanuméricos de 500 caracteres
* escenario 107: Twitter Description con valores alfanuméricos de 501 caracteres
* escenario 108: Facebook title con valores alfanuméricos de 300 caracteres
* escenario 109: Facebook title con valores alfanuméricos de 301 caracteres
* escenario 110: Facebook Description con valores alfanuméricos de 501 caracteres
* escenario 111: Facebook Description con valores alfanuméricos de 500 caracteres
* escenario 112: Code Inyection valores alfanuméricos


### 8.1 Editar Tag:
#### Pool de datos a-priori
* escenario 113: Editar Tag – Nombre agregando Valores Alfanuméricos
* escenario 114: Editar Tag – Cambiar descripción
* escenario 115: Editar Tag – Cambiar Color RGB con valores correspondientes
* escenario 116: Editar Tag – Cambiar Color RGB con simbolos
* escenario 117: Editar Tag – URL de Canonical URL sin formato URL
* escenario 118: Editar Tag – Titulo Meta agregando valores numéricos
* escenario 119: Editar Tag – título de Twitter con más de 300 caracteres
* escenario 120: Editar Tag – Cambiar Slug a uno con espacios


