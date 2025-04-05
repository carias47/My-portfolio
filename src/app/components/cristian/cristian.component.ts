import { Component } from '@angular/core';
import Typed from 'typed.js';
declare var particlesJS: any;

@Component({
  selector: 'app-cristian',
  templateUrl: './cristian.component.html',
  styleUrls: ['./cristian.component.css'],
})
export class CristianComponent {
  ngOnInit() {
    const typed = new Typed('.auto-type', {
      strings: ['Ingeniero de sistemas', 'Frontend developer'],
      typeSpeed: 60,
      backSpeed: 20,
      backDelay: 2200,
      fadeOut: true,
      loop: true,
      loopCount: 3,
    });
    particlesJS.load('particles-js', 'assets/particlesjs-config.json');
  }
}
