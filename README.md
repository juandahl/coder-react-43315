# CODER - REACT - 43315

Repositorio en donde encontraras el código de cada ejercio visto en clase junto con la presentación en formato PDF.

## Instalar Node JS

Ve al sitio web oficial de Node.js [link](https://nodejs.org) y descarga la versión LTS (Long-Term Support).
Elige la versión adecuada para tu sistema operativo (Windows, macOS o Linux) y descárgala.
Ejecuta el instalador descargado y sigue las instrucciones del asistente de instalación.
Asegúrate de marcar la opción "Agregar Node.js al PATH" durante la instalación para poder acceder a Node.js desde la línea de comandos.

### Verifica la instalación de Node.js

Abre una nueva ventana de línea de comandos (Terminal en macOS/Linux o Command Prompt en Windows).
Escribe el siguiente comando para verificar que Node.js se haya instalado correctamente:

```node --version```

Deberías ver la versión de Node.js instalada en tu sistema.

### Instala Create React App

Una vez que Node.js esté instalado, puedes instalar Create React App utilizando npm (Node Package Manager), que se instala automáticamente con Node.js.
En la misma ventana de línea de comandos, escribe el siguiente comando para instalar Create React App globalmente en tu sistema:

```npm install -g create-react-app```

Este comando instalará Create React App en tu sistema y podrás acceder a él desde cualquier ubicación en la línea de comandos.


### Crea una nueva aplicación de React

En la ventana de línea de comandos, navega a la ubicación donde deseas crear tu nueva aplicación de React.
Escribe el siguiente comando para crear una nueva aplicación de React utilizando Create React App:

```npx create-react-app mi-aplicacion```

Reemplaza "mi-aplicacion" con el nombre que desees para tu aplicación.
Este comando creará una nueva carpeta llamada "mi-aplicacion" con la estructura inicial de una aplicación de React.

## Instalar Bootstrap

Los pasos a seguir son los siguientes:

- npm install react-bootstrap bootstrap en la terminar. Recorar estar en la ubicación de carpetas del proyecto.

- Agregar el siguiente import en index.js. Se encuentra dentro de la carpeta App. 

import 'bootstrap/dist/css/bootstrap.min.css';

## Usar Bootstrap

En la siguiente URL encontraras todos los componentes que tiene bootstrap y ejemplos de como utilizarlos.

- https://react-bootstrap.netlify.app/docs/components/accordion

Generalmente son siempre los mismos pasos. 

- Importar el componente
- Instanciarlo dentro del return en el lugar que lo quiero utilizar dentro del componente padre.

Ejemplo de uso de botón dentro de App.js

# Firebase

## Instalación en React

- npm install firebase
- Luego, inicializa Firebase y comienza a usar los SDK de los productos que quieres utilizar.
- Importa el json de configuración e instancia en index.js

```
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "XXXXXXXXXXXX",
      authDomain: "coderhouse-ecommerce-e6aa4.firebaseapp.com",
      projectId: "coderhouse-ecommerce-e6aa4",
      storageBucket: "coderhouse-ecommerce-e6aa4.appspot.com",
      messagingSenderId: "266512348273",
      appId: "XXXXXXXXXXXXX"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);

```

