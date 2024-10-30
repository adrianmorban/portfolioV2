import TiendaRMC from './md/tienda-rmc-esp.mdx';
import Avan from './md/avan-esp.mdx';
import Sally from './md/sally-esp.mdx';

const projects = [
    {
        "id": 1,
        "name": "Tienda RMC",
        "description": "Tienda virtual desarrollada para una consultoría, que permite realizar compras de pago único y gestionar suscripciones automatizadas, optimizando así la gestión de cobros y la experiencia del usuario.",
        "longDescription": <TiendaRMC />,
        "url": "https://tienda.rmc.com.do",
        "technologies": ["Vue", "Laravel", "MySQL", "TailwindCSS", "Linux"],
        "thumbnail": "/projects/tienda.png"
    },
    {
        "id": 2,
        "name": "AVAN",
    "description": "Sistema de facturación electrónica que permite generar facturas fiscales, corregirlas y conectarse con QuickBooks. Ofrece una interfaz intuitiva, optimizando el proceso de facturación.",
        "longDescription": <Avan />,
        "url": "https://avan.com.do",
        "technologies": ["Vue", "Laravel", "MySQL", "TailwindCSS", "Linux"],
        "thumbnail": "/projects/avan.png"
    },
    {
        "id": 3,
        "name": "Sally Telegram Bot",
        "description": "Sally es un bot de Telegram para AMG Luxury Barbershop que agenda citas automáticamente. Con IA y una arquitectura serverless en AWS, gestiona reservas en tiempo real, optimizando el proceso sin intervención humana.",
        "longDescription": <Sally />,
        "url": "https://t.me/sallysalesthebot",
        "technologies": ["Node.js", "Telegram API", "AWS"],
        "thumbnail": "/projects/sally.svg",
    }
]

export default projects;