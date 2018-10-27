import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



// Modules
import { AppRoutingModule } from './app-routing.module';


// Intercepotors
// import { TokenInterceptorService } from './core/interceptors/token-interceptor/token-interceptor.service';


// Guards
import { AuthGuard } from './core/guards/auth-guard/auth-guard.guard';


// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { AccountComponent } from './account/account.component';
import { WonComponent } from './game/won/won/won.component';
import { LossComponent } from './game/loss/loss/loss.component';

// Services
import { TokenInterceptorService } from './core/interceptors/token-interceptor/token-interceptor.service';
import { AuthService } from './core/authentication/auth.service';
import { DecodeTokenService } from './core/helpers/decodeToken/decode-token.service';
import { UserService } from './core/services/user/user.service';
import { GameSequenceService } from './core/services/game/game-sequence/game-sequence.service';
import { GameService } from './core/services/game/game/game.service';
import { WordDisplayService } from './core/helpers/word-display/word-display.service';
import { GameStatisticsService } from './core/services/game/game-statistics/game-statistics.service';
import { GameStatusGuard } from './core/guards/game-status/game-status.guard';



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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    GameStatusGuard,
    DecodeTokenService,
    UserService,
    GameSequenceService,
    GameService,
    WordDisplayService,
    GameStatisticsService,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
