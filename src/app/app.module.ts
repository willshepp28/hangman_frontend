import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Modules
import { AppRoutingModule } from './app-routing.module';


// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ResultsComponent } from './results/results.component';
import { PlayerStatisticsComponent } from './player-statistics/player-statistics.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    GameComponent,
    ResultsComponent,
    PlayerStatisticsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
