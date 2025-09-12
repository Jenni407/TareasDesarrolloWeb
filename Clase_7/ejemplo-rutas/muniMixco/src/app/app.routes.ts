import { Routes } from '@angular/router';
import { Inicio} from './vistas/inicio/inicio';
import {Menu} from './vistas/menu/menu';
import { Pagos } from './vistas/pagos/pagos';
import { Multas } from './vistas/multas/multas'; 
import { Quejas} from './vistas/quejas/quejas';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // redirigir al inicio
  { path: 'inicio', component: Inicio },
  {path: 'menu', component: Menu},
  { path: 'multas', component: Multas },
  { path: 'pagos', component: Pagos },
  {path: 'quejas', component: Quejas},
  { path: '**', redirectTo: 'inicio' }  // redirigir a inicio si no coincide ninguna ruta
]; 
