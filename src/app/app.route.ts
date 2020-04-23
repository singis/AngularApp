import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { CheckuploadComponent } from "./checkupload/checkupload.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { MessageComponent } from "./message/message.component";


export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'upload', component: CheckuploadComponent },
    { path: 'confirm', component: ConfirmationComponent },
    { path: 'status', component: MessageComponent },
    { path: '**', component: ErrorComponent },
];
