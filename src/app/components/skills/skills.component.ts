import { Component } from '@angular/core';
import { Skills, SKILLS } from 'src/app/data/skills';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: false
})
export class SkillsComponent {
  skills: Skills[] = [];
  certifications = [
    {
      title: 'Angular Expert',
      issuer: 'Udemy',
      date: 'March 2023',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7065451255237636096/',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQEiMvW4Ae7TCQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1684534847475?e=1747267200&v=beta&t=7asGVeL0_Lo1pk_h7FX9GMr9AVwKgi1bC5cU0yExV8I'
    },
    {
      title: 'Programming level 0',
      issuer: 'Egg',
      date: 'March 23',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7046269524114857984/',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQHFk2ZSIUKNPg/feedshare-shrink_800/feedshare-shrink_800/0/1679961567267?e=1747267200&v=beta&t=DcCM25PnJsYvneY62foYpaJCVTVfFYto3vgmF-NfuUQ'
    },
    {
      title: 'React Avanzado',
      issuer: 'Udemy',
      date: 'Enero 2024',
      link: 'https://www.efset.org/cert/2j4v3g',
      image: 'https://media.licdn.com/dms/image/v2/D4E22AQHFk2ZSIUKNPg/feedshare-shrink_800/feedshare-shrink_800/0/1679961567267?e=1747267200&v=beta&t=DcCM25PnJsYvneY62foYpaJCVTVfFYto3vgmF-NfuUQ'
    }
  ];

  ngOnInit() {
    this.skills = SKILLS;
  }

}
