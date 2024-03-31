# DIGIPEDIA


### DATOS DE VERSIONES UTILIZADAS EN EL PROYECTO

- Ionic CLI : 7.2.0
- Ionic Framework: 7.8.2
- Angular CLI: 17.3.2
- Capacitor: 5.7.4
- Node: 20.12.0
- npm: 10.5.0

### STACK DE TECNOLOGIAS UTILIZADAS

1. Ionic Framework v7
2. Angular Fire
3. Firebase Authentication
4. Digimon Api
5. Taildwind CSS
6  Firebase tools

### ANTES DE LEVANTAR EL AMBIENTE

1. Se debe crear una aplicación en firebase console.
2. Seleccionar la opción de authentification y agregar el método de correo y password
3. Instalar firebase tools en la terminal (npm i -g firebase-tools)
4. Se debe iniciar sesión de firebase en el terminal (firebase login)
5. Agregar en los archivos de environments (en el objeto firebase) el contenido del archivo de Firebase SDK (Debe tener la estructura siguiente)

```
 {"projectId":"projectID","appId":"content","storageBucket":"content","apiKey":"content","authDomain":"content","messagingSenderId":"0014sd345","measurementId":"Content"}
```

6. (OPCIONAL) En el caso de utilizar angular fire, para no pegar manualmente firebase SDK ,se debe utilizar el comando (ng add @angular/fire)
7. (OPCIONAL) Seleccionar la opcion authentification
8. (OPCIONAL) Revisar las modificaciones en app.module.ts
9. (OPCIONAL) Mover la configuracion a los enviroments en un objeto firebase y usar esta variable en vez del contenido del archivo de firebase SDK en el código.
    

### LEVANTAR EL AMBIENTE

1. Instalar los modulos de node (npm install)
2. Levantar el ambiente web (ionic serve)
3. Construir el proyecto antes de agregar la plataforma (ionic build)
4. Instalar capacitor y la plataforma ha generar
5. Agregar la plataforma (ionic cap add android)
6. Levantar la plataforma que se escogio (ionic capacitor run android --external)

### USAR LA EXTENSION DE IONIC EN VISUAL STUDIO CODE
Se puede usar la extensión de VS Code para lo siguiente

1. Levantar el ambiente web (ionic serve)
2. Construir el proyecto antes de agregar la plataforma
3. Instalar capacitor y la plataforma ha generar

Referencia de la extension: 
https://marketplace.visualstudio.com/items?itemName=ionic.ionic