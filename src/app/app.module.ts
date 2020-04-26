import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule,
  MatOptionModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatStepperModule, MatTableModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http/http.service';
import {MainComponent} from './pages/main/main.component';
import {ChartsModule} from 'ng2-charts';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DatasetsComponent} from './pages/datasets/datasets.component';
import {VisualizationComponent} from './pages/visualization/visualization.component';
import {DateCountComponent} from './components/vis-date-count/vis-date-count.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DatasetsComponent,
    VisualizationComponent,
    SignupComponent,
    LoginComponent,
    DateCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatChipsModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    FormsModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatButtonToggleModule,
  ],
  providers: [
    HttpService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
