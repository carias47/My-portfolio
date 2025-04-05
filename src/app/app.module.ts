import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { sidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CristianComponent } from './components/cristian/cristian.component';
import { AboutComponent } from './components/about/about.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavComponent } from './shared/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    sidebarComponent,
    CristianComponent,
    ContactComponent,
    SkillsComponent,
    AboutComponent,
    PreloaderComponent,
    PortfolioComponent,
    NavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
