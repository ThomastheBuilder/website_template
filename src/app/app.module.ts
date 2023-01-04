import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DonateComponent } from './donate/donate.component';
import { EventsComponent } from './events/events.component';
import { IssuesComponent } from './issues/issues.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [ {path: 'contact', component: ContactComponent}, {path: 'donate', component: DonateComponent}, {path: 'events', component: EventsComponent}, {path: 'issues', component: IssuesComponent}, {path: 'home', component: HomeComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DonateComponent,
    EventsComponent,
    IssuesComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgxGoogleAnalyticsModule.forRoot('G-L02Q5QQTWS'),
    NgxGoogleAnalyticsRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents = [HomeComponent, DonateComponent, EventsComponent, IssuesComponent, ContactComponent]