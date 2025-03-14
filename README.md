
NG SERVE  = inicializa server en el puerto 4200

NG SERVER --HOST 0.0.0.0 = inicializa el server en local y en la ip del equipo servidor con el puerto correspondiendo de forma disponible para todos lo de la misma red.

NG SERVE --HOST 0.0.0.0 --DISABLE-HOST-CHECK -- Usamos este comando para poder abrir el puerto con ngrok para que pueda ser accedido desde cualquier dispositivo fuera de la web interna.
    !!!!----- npm install -g ngrok --- Impotante tener ngrok instalado de forma global ---- !!!!!

NG G C "componente" = generamos componentes correspondientes a nuestras necesidades

NG G S "servicio" = generamos servicios correspondientes a lo que vamos a usar


------------------

SERVIR IMAGENES FUERA DE LA CARPETA /public 

Si estamos usando un SSR vamos a tener que ir a server.ts y agregar está line:

// Sirve la carpeta de assets y todas las subcarpetas, archivos correspondientes dentro de assets, la ubicacion de la misma debe ser  src/assets
app.use('/assets', express.static(resolve(browserDistFolder, 'assets')));


Luego en angular.json agregar otra line dentro del build para reconocer el input:

 "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/coop-bouquet2v",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              },
              {
                "glob":"**/*",
                "input":"src/assets",
                "output": "assets"
              }
            ],

-----------------------------------------------------------------------------------------

PARA CORRECTO FUNCIONAMIENTO DE BOOSTRAP 5.0V 

Primero instalar npm install bootstrap@5.3.3 o sin el @version 

Luego instalar npm install @popperjs/core


Y en el angular.json debe quedar así:

 "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/@popperjs/core/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.js"
            ],

YA QUE POR LO INVESTIGADO EL ORDEN DE LOS SCRIPTS ES DE SUMA IMPORTANCIA PARA QUE FUNCIONE CORRECTAMENTE EL DROPDOWN.


USO DE MONGODB EN WINDOWS

------ INSTALACION -----

LINK: https://www.mongodb.com/try/download/community-kubernetes-operator

INSTALL WITHOUT SERVICE

Al terminar agregamos la variable de entorno a windows en path y debería quedar así:
 " C:\Program Files\MongoDB\Server\{ NRO_VERSION }\bin "

 tiramos un cmd con el comando: mongod.exe --version para verificar su existencia en las variables

  - IMPORTANTE AGREGAR LA CARPETA DATA\DB EN EL DISCO C : " C:\data\db "

tiramos un cmd con el comando: mongod y debería estar andando y escuchando correctamente. 

--- OPCIONAL 1 ----
Podemos agregar mongosh para la consola de shell en el equipo para conectar de esa forma la db

LINK: https://www.mongodb.com/try/download/shell

Tendremos un archivo .zip, lo vamos a descomprimir y cortar esa carpeta a la ubicación :
 " " C:\Program Files\MongoDB\ "  ---esto es para que esten en el mismo lugar

 Luego ingresamos a la carpeta copiada , bin y copiamos la url del archivo.exe y la pegamos en el path 
  al igual que hicimos con la del mongod . 

  de esta forma ya debería estar funcional

  probamos con un cmd y el comando mongosh 


---- OPCIONAL 2 ----
Podemos trabajarlo desde el mongodb compass que se instalo antes.

podemos agregar un colletion y luego darle a conectar con los datos establecidos previamente
por el mismo mongodb Compass y estaría utilizable, faltaría crear una DB.