export interface Projects {
    titulo: string;
    descripcion: string;
    imagen: string;
    urlRepository: string;
    urlProject: string;
    skills: { skill: string }[];
}

export const Projects: Projects[] = [
    {
        titulo: 'Clean Now',
        descripcion:
            'App que conecta clientes con auxiliares de limpieza para hogares y oficinas más rápido y now.',
        imagen: '../assets/clean-now.jpg',
        urlRepository: 'https://github.com/carias47/CleanNowApp',
        urlProject: 'https://clean-now.vercel.app',
        skills: [
            {
                skill: 'Angular',
            },
            {
                skill: '.NET Core',
            },
            {
                skill: 'Entity Framework',
            },
            {
                skill: 'SQL Server',
            },
            {
                skill: 'JWT',
            },
            {
                skill: 'Manejo de usuarios y roles',
            },
            {
                skill: 'Arquitectura en capas con .NET',
            },

        ],
    },
    {
        titulo: 'Portafolio',
        descripcion:
            'Portafolio web con renderizado del lado del servidor (SSR) que muestra mis proyectos, habilidades y experiencia en el desarrollo de aplicaciones modernas',
        imagen: '../assets/portfolio.png',
        urlRepository: 'https://github.com/carias47/My-portfolio',
        urlProject: 'https://portfolio-crisdev.vercel.app',
        skills: [
            {
                skill: 'Angular',
            },
            {
                skill: 'SSR',
            },
            {
                skill: 'Optimización web',
            },
            {
                skill: 'Responsive Design',
            },
            {
                skill: 'Bootstrap'
            }

        ],
    },
    {
        titulo: 'Counter Api',
        descripcion:
            'Backend desarrollado en NestJS y MySQL para un videojuego con autenticación, estadísticas y trazabilidad de acciones',
        imagen: '../assets/counter.png',
        urlRepository: 'https://github.com/carias47/cripto-api',
        urlProject: 'https://github.com/carias47/cripto-api',
        skills: [
            {
                skill: 'NestJS',
            },
            {
                skill: 'TypeScript',
            },
            {
                skill: 'MySQL',
            },
            {
                skill: 'TypeORM',
            },
            {
                skill: 'JWT',
            },
        ],
    },
    {
        titulo: 'Marketplace',
        descripcion:
            'Aplicación tipo marketplace con listado de productos por categoría, funcionalidad de carrito de compras y gestión dinámica de ítems ',
        imagen: '../assets/marketplace.jpg',
        urlRepository: 'https://github.com/carias47/MatkerPlace',
        urlProject: 'https://marketplace-ang.netlify.app',
        skills: [
            {
                skill: 'Angular',
            },
            {
                skill: 'TypeScript',
            },
            {
                skill: 'Bootstrap',
            },
            {
                skill: 'Rest API',
            },
            {
                skill: 'Lazyload',
            },
        ],
    },
    {
        titulo: 'Social Blog',
        descripcion:
            'Es una red social que permite a los usuarios iniciar sesión y compartir sus propias noticias, así como ver las publicaciones de otros miembros de la comunidad.',
        imagen: '../assets/social-blog.jpg',
        urlRepository: 'https://github.com/carias47/Social_message---Frontend',
        urlProject: 'https://social-wire.netlify.app',
        skills: [
            {
                skill: 'Angular',
            },
            {
                skill: 'Typescript',
            },
            {
                skill: 'JWT',
            },
            {
                skill: 'Nestjs',
            },
            {
                skill: 'MySQL',
            },
            {
                skill: 'TypeOrm',
            },
            {
                skill: 'Guards',
            },
            {
                skill: 'Lazyload',
            },
            {
                skill: 'Rest API',
            },
        ],
    },
    {
        titulo: 'Mappx',
        descripcion:
            'Aplicación basada en Mapbox con búsqueda de lugares por nombre, adición de marcadores personalizados y navegación interactiva en el mapa.',
        imagen: '../assets/mappx.jpg',
        urlRepository: 'https://github.com/carias47/mappx-app',
        urlProject: 'https://mappx.netlify.app',
        skills: [
            {
                skill: 'Angular',
            },
            {
                skill: 'TypeScript',
            },
            {
                skill: 'Mapbox',
            },
            {
                skill: 'Bootstrap',
            },
        ],
    },
    {
        titulo: 'Pokexd',
        descripcion:
            'Es una aplicación donde muestra todos los pokemones de las distintas generaciones, también se puede buscar por nombre del pokemon y ver información como caracteristicas, estadisticas y más.',
        imagen: '../assets/poke-api.JPG',
        urlRepository: 'https://github.com/carias47/PokeApi',
        urlProject: 'https://pokemonesapi.netlify.app',
        skills: [
            {
                skill: 'Angular',
            },
            {
                skill: 'TypeScript',
            },
            {
                skill: 'Bootstrap',
            },
            {
                skill: 'Lazyload',
            },
            {
                skill: 'Infinite Scroll',
            },
        ],
    },
];
