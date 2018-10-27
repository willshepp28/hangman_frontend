import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



// Guards
import { AuthGuard } from "./core/guards/auth-guard/auth-guard.guard";
import { GameStatusGuard } from "./core/guards/game-status/game-status.guard";

// Components
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";
import { AccountComponent } from "./account/account.component";
import { WonComponent } from "./game/won/won/won.component";
import { LossComponent } from "./game/loss/loss/loss.component";



/**
 * This is where we define routes in our application
 */




// Routes
const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    {
        path: "game/:id", component: GameComponent, canActivate: [AuthGuard, GameStatusGuard],
        children: [
            { path: "won", component: WonComponent },
            { path: "lost", component: LossComponent}
        ]
    },
    { path: "account/:id", component: AccountComponent, canActivate: [AuthGuard] }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
