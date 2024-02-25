import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { AggiuntaComponent } from './aggiunta/aggiunta.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'lista',component:ListaComponent},
  {path:'aggiunta',component:AggiuntaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
