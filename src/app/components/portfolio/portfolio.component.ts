import { Component } from '@angular/core';

export interface Project {
  titulo: string;
  descripcion: string;
  imagen: string;
  urlRepository: string;
  urlProject: string;
  skills: Skills[];
}
interface Skills {
  name: Skill[];
}
interface Skill {
  skill: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      titulo: 'Poke Api',
      descripcion:
        'Es una aplicación donde muestra todos los pokemones de las distintas generaciones, también se puede buscar por nombre del pokemon y ver información como caracteristicas, estadisticas y más.',
      imagen: '../assets/poke-api.JPG',
      urlRepository: 'https://github.com/carias47/PokeApi',
      urlProject: 'https://pokemonesapi.netlify.app',
      skills: [
        {
          name: [
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
      ],
    },
    {
      titulo: 'Marketplace',
      descripcion:
        'Es un marketplace el cual muestra una serie de productos y sus categorías donde es posible agregar al carrito de compras y añadir los productos deseados, también se pueden eliminar o agregar otro producto simulando una compra.',
      imagen: '../assets/marketplace.jpg',
      urlRepository: 'https://github.com/carias47/MatkerPlace',
      urlProject: 'https://marketplace-ang.netlify.app',
      skills: [
        {
          name: [
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
      ],
    },
    {
      titulo: 'Social Blog',
      descripcion:
        'Es una red social en la que se puede iniciar sesión y publicar sus noticias para que los demás usuarios puedan verlas o crear las suyas.',
      imagen: '../assets/social-blog.jpg',
      urlRepository: 'https://github.com/carias47/Social_message---Frontend',
      urlProject: 'https://social-wire.netlify.app',
      skills: [
        {
          name: [
            {
              skill: 'Angular',
            },
            {
              skill: 'Typescript',
            },
            {
              skill: 'Botstrap',
            },
            {
              skill: 'JWTokens',
            },
            {
              skill: 'Nestjs',
            },
            {
              skill: 'Mysql',
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
      ],
    },
    {
      titulo: 'Mappx',
      descripcion:
        'Es una app personalizada al estilo de google maps utilizando la librería de mapbox en la que se puede buscar lugares por nombre, añadir marcadores y más.',
      imagen: '../assets/mappx.jpg',
      urlRepository: 'https://github.com/carias47/mappx-app',
      urlProject: 'https://mappx.netlify.app',
      skills: [
        {
          name: [
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
      ],
    },
  ];
}
