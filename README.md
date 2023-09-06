# ReactProyectCoderHouse

## Aplicación de eCommerce React + Vite

### Maurizio Abatantuno, estudiante de React.js en coderhouse. comision #47130.

## Características

- **Listado de Productos:** Muestra una lista de productos con detalles e imágenes.
- **Carrito de Compras:** Permite agregar y eliminar productos del carrito de compras.
- **Filtro por categorias:** Permite navegar por distintas categorias de productos.
- **Prosesa ordenes de compra:** Procesa pedidos que se reciben en la BD de FireStore.




## Tecnologías Utilizadas

- **React:** Una biblioteca de JavaScript para construir interfaces de usuario.
- **Vite:** Una herramienta de compilación rápida para aplicaciones React.
- **Firebase:** Una plataforma basada en la nube para construir aplicaciones web y móviles.
- **React-Bootstrap:**
Biblioteca de componentes para React.js
- **Formik:**
Biblioteca de componentes para Formularios.
- **SweetAlert2:**
Biblioteca para modales.

### Requisitos Previos

- Node.js y npm instalados en el proyecto.
- Proyecto Firebase configurado (con Firestore, Hosting y Firebase).


### Instalación
- **Instala dependencias:**

![Alt text](./imgReadme/image-1.png)

- **Realiza la configuración de Firebase:**
Asegúrate de configurar correctamente las credenciales de Firebase creando un archivo firebaseConfig.js en la raíz del proyecto con el siguiente contenido:

![Alt text](./imgReadme/image-2.png)
Reemplaza los valores con la configuración real de tu proyecto de Firebase.

- **Instala Firebase CLI:**

![Alt text](./imgReadme/image-3.png) 

- **Inicia sesión en Firebase:**

![Alt text](./imgReadme/image-4.png)



## Uso de Formik para Formularios
### Instalación de Formik
Para utilizar Formik en tu proyecto, simplemente ejecuta el siguiente comando:

![Alt text](./imgReadme/image-5.png)

### Ejemplo de Uso
A continuación, se proporciona un ejemplo de cómo se utilizo Formik en un componente de formulario de este proyecto:

- **Importaciones:**

![Alt text](./imgReadme/image-7.png)

 ### Envio de datos con FireStore
- **acceso a la colección:**

![Alt text](./imgReadme/image-8.png)

- **Formato de datos que se envian del formulario de Formik:**

![Alt text](./imgReadme/image-9.png)

- **Acceder al formato creado de datos:** 
Dato importante: no olvidarse de la crear la referencia de datos.

![Alt text](./imgReadme/image-10.png)

- **Definir los valores iniciales:**
Abrimos la etiqueta de Formik y empezamos agregando los initialValues.

![Alt text](./imgReadme/image-11.png)

- **Validacion de errores:**
Aca debemos hacer las validaciones de nuestro formulario segun nuestras necesidades, dejo captura para que se vean las expresiones regulares de las que hice uso.

![Alt text](./imgReadme/image-12.png)
![Alt text](./imgReadme/image-13.png)

- **Evento del boton:**
Vacía el Cart y resetea el Form al enviar los datos.

![Alt text](./imgReadme/image-14.png)

- **Formulario**
Creamos el formulario con el formato que nos da Formik en su documentación.

![Alt text](./imgReadme/image-15.png)

### Renderizado: 
Se aplico una cart de Bootstrap para el renderizado de los productos que se agregaron a la orden de compra.

![Alt text](./imgReadme/image-16.png)

## Formato recibido en FireStore
En la coleccion creada en FireStor se reciben los datos de la siguiente forma:

- **Buyer:**

![Alt text](./imgReadme/buyer.png)

- **Items:**

![Alt text](./imgReadme/Items.png)

- **PayData:**

![Alt text](./imgReadme/PayData.png)

