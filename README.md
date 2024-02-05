# Challenge 01: Encriptador de Texto
**Oracle ONE: Next Education | Alura**

Este proyecto es parte del programa Oracle ONE: Next Education en colaboración con Alura. El objetivo de esta aplicación es cifrar y descifrar mensajes utilizando un diccionario de sustitución. La aplicación toma un mensaje de entrada y luego realiza el cifrado o descifrado según la opción seleccionada.

### Características Principales
* Cifrado de Mensajes: La función encryptMSG toma un mensaje de entrada y lo cifra según un diccionario predefinido de sustitución.
* Descifrado de Mensajes: La función decryptMSG realiza el proceso inverso, descifrando un mensaje cifrado utilizando el mismo diccionario.
* Interfaz de Usuario Amigable: La interfaz de usuario proporciona una experiencia sencilla para ingresar, cifrar, descifrar y copiar mensajes.

### GitHub Page
https://dev-totti.github.io/Challenge-01-Encriptador/

### Instrucciones de Uso
1. Ingreso de Mensaje: Ingrese el mensaje en el cuadro de texto etiquetado como "text-input".
2. Cifrado de Mensaje:  
Haga clic en el botón "Encriptar" para cifrar el mensaje.  
El mensaje cifrado se mostrará en el área etiquetada como "text-output".
3. Descifrado de Mensaje:  
Haga clic en el botón "Desencriptar" para descifrar un mensaje previamente cifrado.  
El mensaje descifrado se mostrará en el área etiquetada como "text-output".
4. Copia de Texto: Haga clic en el botón "Copiar" para copiar el mensaje cifrado o descifrado al portapapeles.

### Diccionario de Sustitucion
|Carácter Original|Carácter Cifrado|
|---|---|
|e|enter|
|i|imes|
|a|ai|
|o|ober|
|u|ufat|

### Consideraciones
**Normalización de Entrada**: Antes de realizar el cifrado o descifrado, el programa normaliza la entrada, eliminando diacríticos y convirtiendo el texto a minúsculas.

**Gestión de Mensajes Vacíos**: La aplicación proporciona un manejo claro de mensajes vacíos, mostrando un mensaje informativo y ocultando áreas no relevantes.
