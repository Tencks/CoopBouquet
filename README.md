
NG SERVE  = inicializa server en el puerto 4200

NG SERVER --HOST 0.0.0.0 = inicializa el server en local y en la ip del equipo servidor con el puerto correspondiendo de forma disponible para todos lo de la misma red.

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
