import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components


// Guards




/**
 * This is where we define routes in our application
 */




// Routes
const routes: Routes = [
    { path: "", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
