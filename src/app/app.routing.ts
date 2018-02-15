import { PlantillasComponent } from './plantillas/plantillas.component';
import { CochesComponent } from './coches/coches.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RopaComponent } from './ropa/ropa.component';

const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'empleados', component: EmpleadoComponent},
    {path: 'empleados/:id', component: EmpleadoComponent},
    {path: 'frutas', component: FrutaComponent},
    {path: 'contact', component: ContactComponent},    
    {path: 'ropa', component: RopaComponent},
    {path: 'coches', component: CochesComponent},
    {path: 'plantillas', component: PlantillasComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProvider: any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);