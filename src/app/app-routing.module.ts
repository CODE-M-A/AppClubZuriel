import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },

  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'registros',
    loadChildren: () => import('./pages/registros/registros.module').then( m => m.RegistrosPageModule)
  },
  {
    path: 'descarga',
    loadChildren: () => import('./pages/descarga/descarga.module').then( m => m.DescargaPageModule)
  },
  {
    path: 'generar-reporte',
    loadChildren: () => import('./pages/generar-reporte/generar-reporte.module').then( m => m.GenerarReportePageModule)
  },
  
  {
    path: 'nuevo-usuario',
    loadChildren: () => import('./pages/nuevo-usuario/nuevo-usuario.module').then( m => m.NuevoUsuarioPageModule)
  },
  {
    path: 'nuevo-usuario-conquiatador',
    loadChildren: () => import('./pages/nuevo-usuario-conquiatador/nuevo-usuario-conquiatador.module').then( m => m.NuevoUsuarioConquiatadorPageModule)
  },
  
 
  {
    path: 'instructores',
    loadChildren: () => import('./pages/instructores/instructores.module').then( m => m.InstructoresPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'registro-reportes',
    loadChildren: () => import('./pages/registro-reportes/registro-reportes.module').then( m => m.RegistroReportesPageModule)
  },
  {
    path: 'actividades',
    loadChildren: () => import('./pages/actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'agregar-actualizar-tarea',
    loadChildren: () => import('./pages/agregar-actualizar-tarea/agregar-actualizar-tarea.module').then( m => m.AgregarActualizarTareaPageModule)
  },
  {
    path: 'ver-reporte',
    loadChildren: () => import('./pages/ver-reporte/ver-reporte.module').then( m => m.VerReportePageModule)
  },
  {
    path: 'menu-reportes-actividades',
    loadChildren: () => import('./pages/menu-reportes-actividades/menu-reportes-actividades.module').then( m => m.MenuReportesActividadesPageModule)
  },
  {
    path: 'ver-actividad',
    loadChildren: () => import('./pages/ver-actividad/ver-actividad.module').then( m => m.VerActividadPageModule)
  },
  {
    path: 'conquistadores',
    loadChildren: () => import('./pages/conquistadores/conquistadores.module').then( m => m.ConquistadoresPageModule)
  },
  
  

  // {
  //   path: '',
  //   redirectTo: 'welcome', // Ruta por defecto
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
