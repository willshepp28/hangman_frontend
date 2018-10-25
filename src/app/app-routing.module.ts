import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";
import { ResultsComponent } from "./results/results.component";
import { PlayerStatisticsComponent } from "./player-statistics/player-statistics.component";

// Components


// Guards




/**
 * This is where we define routes in our application
 */




// Routes
const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "game/:id", component: GameComponent },
    { path: "results", component: ResultsComponent },
    { path: "player/:id/statistics", component: PlayerStatisticsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
