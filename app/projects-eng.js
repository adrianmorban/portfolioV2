import TiendaRMC from './md/tienda-rmc-eng.mdx';
import Avan from './md/avan-eng.mdx';
import Sally from './md/sally-eng.mdx';

const projects = [
    {
        "id": 1,
        "name": "Tienda RMC",
        "description": "Ecommerce website developed for a consultancy, enabling one-time purchases and managing automated subscriptions, optimizing billing management and user experience.",
        "longDescription": <TiendaRMC />,
        "url": "https://tienda.rmc.com.do",
        "technologies": ["Vue", "Laravel", "MySQL", "TailwindCSS", "Linux"],
        "thumbnail": "/projects/tienda.png"
    },
    {
        "id": 2,
        "name": "AVAN",
        "description": "Electronic billing system that allows generating fiscal invoices, correcting them, and connecting with QuickBooks. It offers an intuitive interface, optimizing the billing process.",
        "longDescription": <Avan />,
        "url": "https://avan.com.do",
        "technologies": ["Vue", "Laravel", "MySQL", "TailwindCSS", "Linux"],
        "thumbnail": "/projects/avan.png"
    },
    {
        "id": 3,
        "name": "Sally Telegram Bot",
        "description": "Sally is a Telegram bot for AMG Luxury Barbershop that automatically schedules appointments. Using AI and a serverless architecture on AWS, it manages real-time bookings, optimizing the process without human intervention.",
        "longDescription": <Sally />,
        "url": "https://t.me/sallysalesthebot",
        "technologies": ["Node.js", "Telegram API", "MongoDB", "AWS"],
        "thumbnail": "/projects/sally.svg",
    }
]

export default projects;