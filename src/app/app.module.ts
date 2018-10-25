import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// Modules
import { AppRoutingModule } from './app-routing.module';


// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { AccountComponent } from './account/account.component';
import { WonComponent } from './game/won/won/won.component';
import { LossComponent } from './game/loss/loss/loss.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    GameComponent,
    AccountComponent,
    WonComponent,
    LossComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
