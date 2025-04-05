import { Component } from '@angular/core';

export interface Skills {
  img: string;
  name: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Array<Skills> = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png',
      name: 'Html',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png',
      name: 'Css',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      name: 'Angular',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      name: 'JavaScript',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
      name: 'TypeScript',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
      name: 'GitHub',
    },
    {
      img: 'https://ih1.redbubble.net/image.367014218.4385/pp,840x830-pad,1000x1000,f8f8f8.u2.jpg',
      name: 'Node js',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png',
      name: 'Nestjs',
    },
    {
      img: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
      name: 'Docker',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZPIWevT2KaAZdQ8UqoEHMPAxBRdgwOn9nhk_0PJNLx3Yfwcf17MnE1vKlHa_nXLNWmE&usqp=CAU',
      name: 'Mongo DB',
    },
    {
      img: 'https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png',
      name: 'Django',
    },
    {
      img: 'https://cdn.freebiesupply.com/logos/large/2x/mysql-logo-png-transparent.png',
      name: 'Mysql',
    },
  ];
}
