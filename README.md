# Semana7Grupo25
Semana7


## Integrantes
* Krishtian Barrera
* * kd.barrera@uniandes.edu.co
* Sara Maya
* * s.mayav@uniandes.edu.co
* Sara Ramirez
* * sg.ramirez940@uniandes.edu.co
* Miguel Dueñas
* * m.duenasb@uniandes.edu.co

##  Listado de Escenarios de prueba
### 1. Login
#### Responsable: Sara Ramírez
* Escenario 1: ambas credenciales correctas
* Escenario 2: contraseña incorrecta
* Escenario 3: correo incorrecto
* Escenario 4: ambas credenciales incorrectas
* Escenario 5: contraseña vacía
* Escenario 6: correo vacío
* Escenario 7: correo con 75 caracteres +1
* Escenario 8: contraseña con 500 caracteres +1
* Escenario 9: correo sin formato de correo

### 2. Perfil del usuario
#### Funcionalidad: cambiar contraseña
#### Responsable: Sara Ramírez
* Escenario 10: valor de verificación diferente al de la contraseña nueva
* Escenario 11: valor de la nueva contraseña igual al de la antigua contraseña
* Escenario 12: campo nueva contraseña con 10 caracteres -1
* Escenario 13: campo nueva contraseña con 500 caracteres +1
* Escenario 14: contraseña antigua incorrecta

#### Funcionalidad: editar datos del perfil
#### Responsable: Sara Ramírez
* Escenario 15: cambiar nombre
* Escenario 16: nombre con valores numéricos
* Escenario 17: nombre con caracteres especiales
* Escenario 18: nombre con 191 caracteres +1
* Escenario 19: nombre con 1 letra
* Escenario 20: cambiar correo
* Escenario 21: correo sin formato de correo
* Escenario 22: correo con 75 caracteres +1
* Escenario 23: ingresar locación
* Escenario 24: locación con 250 caracteres +1
* Escenario 25: locación con valores numéricos
* Escenario 26: locación con caracteres especiales
* Escenario 27: ingresar website
* Escenario 28: website sin formato de url
* Escenario 29: Ingresar bio
* Escenario 30: Bio con 200 caracteres +1

## Estrategias seleccionadas para cada funcionalidad
### Pool de datos a-priori
* Escenario 1: ambas credenciales correctas
* Escenario 5: contraseña vacía
* Escenario 6: correo vacío
* Escenario 11: valor de la nueva contraseña igual al de la antigua contraseña
* Escenario 14: contraseña antigua incorrecta
* Escenario 15: cambiar nombre
* Escenario 17: nombre con caracteres especiales
* Escenario 20: cambiar correo
* Escenario 23: ingresar locación
* Escenario 26: locación con caracteres especiales

### pool de datos pseudo aleatorio

### Generación de datos aleatoria
* Escenario 2: contraseña incorrecta
* Escenario 8: contraseña con 500 caracteres +1
* Escenario 9: correo sin formato de correo
* Escenario 13: campo nueva contraseña con 500 caracteres +1
* Escenario 16: nombre con valores numéricos
* Escenario 18: nombre con 191 caracteres +1
* Escenario 19: nombre con 1 letra
* Escenario 24: locación con 250 caracteres +1
* Escenario 25: locación con valores numéricos
* Escenario 30: Bio con 200 caracteres +1

### 3. Creacion de post
### pool de datos pseudo aleatorio
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
### Pool de datos a-priori
* Escenario 41: Crear post solo caracteres speciales

### 4. Creacion de miembro
### pool de datos pseudo aleatorio
* Escenario 42: Crear miembro basic ok
* Escenario 43: Crear miembro solo numeros ok
* Escenario 44: Validar correo no solo numeros
* Escenario 45: Agregar dos veces el mismo tag
* Escenario 46: Agregar dos veces el mismo tag de numeros
* Escenario 47: Crear con notas corta
* Escenario 48: Error al crear nota larga
* Escenario 49: Crear con notas con numeros
* Escenario 50: Crear miembro con suscripcion
### Pool de datos a-priori
* Escenario 51: Validar correo no solo simbolos
* Escenario 52: Agregar dos veces el mismo tag de simbolos
* Escenario 53: Crear con notas con simbolos
### 5. Buscar miembro
### pool de datos pseudo aleatorio
* Escenario 54: Buscar miembro por nombre por el inicio
* Escenario 55: CBuscar miembro por nombre por el medio
* Escenario 56: Buscar miembro por nombre por el final
* Escenario 57: Buscar miembro por correo
* Escenario 58: Borrar miembro
* Escenario 59: Buscar miembro por nombre numeros
### Pool de datos a-priori
* Escenario 60: Buscar miembro por nombre simbolos