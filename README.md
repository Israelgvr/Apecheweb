# Sistema Web para el monitero de dispositivos 

## Instalacion de dependencias
```
$ npm install
otra opcion:
$ npm i
```

## Levantar servicios en Localhost
```
$ npm run dev
```

## Instalacion de dependencias especificas
```
$ npm install [nombre de libreria]
```
> Recomendacion: utilizar la ultima version estable disponible y adaptar el codigo (si es necesario). 
Librerias utilizadas en el proyecto:

- @auth0/auth0-react (v1.10.2)
- @emotion/react (v11.9.3)
- @emotion/styled (v11.9.3)
- @mui/icons-material (v5.8.4)
- @mui/material (v5.9.1)
- @mui/styled-engine-sc (v5.8.0)
- @mui/x-date-pickers (v5.0.0)
- axios (v0.27.2)
- chart.js (v3.8.2)
- chroma-js (v2.4.2)
- dayjs (v1.11.5)
- leaflet (v1.8.0)
- moment (v2.29.4)
- prop-types (v15.8.1)
- react (v18.2.0)
- react-chartjs-2 (v4.3.1)
- react-custom-scrollbars-2 (v4.5.0)
- react-dom (v18.2.0)
- react-export-table-to-excel (v1.0.6)
- react-leaflet (v4.0.1)
- react-router-dom (v6.3.0)
- react-table (v7.8.0)
- react-to-print (v2.14.7)
- styled-components (v5.3.5)
- xlsx (v0.18.5)

## Contenido de archivo .env
```
VITE_BASE_URL= "http://localhost:4000/api"
VITE_BACKEND_URL = "https://servicio-api-rest.com/api"

VITE_DOMAIN="dev-sdafasdfasd3214.us.auth0.com"
VITE_CLIENTID="1234567890asdfhjkljkkj"
VITE_AUTH="/ruta-de-autenticacion/iniciar-sesion"
```
Donde la variables de entornos son:
- VITE_BASE_URL = direccion URL del servidor API Rest para desarrollo en localhost
- VITE_BACKEND_URL = direccion URL del servidor API Rest en produccion
- VITE_DOMAIN = dominio URL para servicio 0Auth
- VITE_CLIENTID = Cliente ID otorgado por el servicio 0Auth
- VITE_AUTH = ruta asignada a una URL para levantar el servicio de autenticacion 0Auth


# Comando para creacion de proyecto con Vite.JS
> npm create vite@latest

## Asignacion de nombre al proyecto
√ Project name: vite-project

## Seleccion de framwork
? Select a framework: » - Use arrow-keys. Return to submit.
    vanilla
    vue
>   react
    preact
    lit
    svelte
√ Select a framework: » react

## Seleccion de variante para React
? Select a variant: » - Use arrow-keys. Return to submit.
>   react
    react-ts