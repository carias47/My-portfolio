import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'portfolio';
  valor: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.valor = true;
    }, 3000);
  }
}
