import { Component } from '@angular/core';
import Typed from 'typed.js';
declare var particlesJS: any;

@Component({
  selector: 'app-cristian',
  templateUrl: './cristian.component.html',
  styleUrls: ['./cristian.component.css'],
  standalone: false
})
export class CristianComponent {
  private typed: Typed | undefined;

  ngOnInit() {
    this.typed = new Typed('.auto-type', {
      strings: ['Ingeniero de sistemas', 'Fullstack developer', 'Web designer'],
      typeSpeed: 60,
      backSpeed: 20,
      backDelay: 2200,
      fadeOut: true,
      loop: true,
    });
    particlesJS.load('particles-js', 'assets/particlesjs-config.json');
  }

}
