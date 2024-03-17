const proyects = [
    {title:"Sistema de Gestión de tareas",  url:"img/gestion.jpg", description:"Descripción: Desarrollé un sistema de gestión de tareas utilizando React para el frontend y Node.js con Express para el backend. La aplicación permite a los usuarios crear, actualizar y eliminar tareas, así como asignarlas a diferentes categorías. Utilicé una base de datos MongoDB para almacenar la información de manera eficiente. Implementé autenticación de usuarios utilizando JSON Web Tokens (JWT) para garantizar la seguridad de la información."},
    {title:"Galletas de Avena", url:"img/red_social.jpg", description:"Descripción: Diseñé y desarrollé una aplicación de red social utilizando MERN stack (MongoDB, Express, React, Node.js). La aplicación permite a los usuarios registrarse, crear perfiles, publicar mensajes y conectarse con otros usuarios. Implementé funcionalidades como la carga de imágenes, comentarios en publicaciones y notificaciones en tiempo real utilizando Socket.IO. Además, la aplicación cuenta con un algoritmo de recomendación de amigos basado en intereses compartidos."},
    {title:"Plataforma E-commerce", url:"img/ecommerce.jpg", description:"Descripción: Desarrollé una plataforma de comercio electrónico completa utilizando tecnologías como Django para el backend y React para el frontend. La aplicación permite a los usuarios navegar por productos, agregarlos al carrito de compras y realizar pedidos. Implementé un sistema de pago seguro utilizando la API de Stripe y una interfaz de administración que permite a los propietarios de la tienda gestionar productos, pedidos y clientes de manera eficiente. También se incorporaron características de búsqueda y filtrado para mejorar la experiencia del usuario."},
  ];
const handlerBarsContext = {
    "/index.html": {
        "title": "Home",
        proyects: proyects,
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;