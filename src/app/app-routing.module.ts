import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {AuthGuard} from './_helpers/auth.guard';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {DatasetsComponent} from './pages/datasets/datasets.component';
import {VisualizationComponent} from './pages/visualization/visualization.component';


const childRoutes: Routes = [
  {path: '', redirectTo: 'datasets', pathMatch: 'full'},
  {path: 'datasets', component: DatasetsComponent},
  {path: 'visualization', component: VisualizationComponent}
];

const appRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'main', component: MainComponent, children: childRoutes, canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
