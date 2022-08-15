import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { OnlineContestsComponent } from './components/online-contests/online-contests.component';
import { MembersTestimonialsComponent } from './components/members-testimonials/members-testimonials.component';
import { PartnersSliderComponent } from './components/partners-slider/partners-slider.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LandingPageComponent,
    HeaderComponent,
    AboutUsComponent,
    ActivitiesComponent,
    OnlineContestsComponent,
    MembersTestimonialsComponent,
    PartnersSliderComponent,
    SubscribeFormComponent,
    FooterComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
