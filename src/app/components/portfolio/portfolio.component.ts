import { Component } from '@angular/core';
import { Projects } from 'src/app/data/projects';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone: false
})
export class PortfolioComponent {

  projects: Projects[] = [];

  ngOnInit() {
    this.projects = Projects
  }
}
