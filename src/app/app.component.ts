import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  title = 'portfolio';
  valor: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {

    if (!sessionStorage.getItem('firstVisit')) {
      setTimeout(() => {
        this.valor = true;
        this.cdr.detectChanges();
      }, 3000);


      sessionStorage.setItem('firstVisit', 'true');
    }
    else {
      this.valor = true;  // Si ya fue visitada la página, ya no mostramos el preloader
    }
  }
}
