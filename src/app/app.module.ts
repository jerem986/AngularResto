import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestoComponent } from './Component/resto/resto.component';

import {SpeedDialModule} from 'primeng/speeddial';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { EspritgusteauComponent } from './Component/espritgusteau/espritgusteau.component';
import { ReservationComponent } from './Component/reservation/reservation.component';
import { MenumakerComponent } from './Component/menumaker/menumaker.component';
import { AuthComponent } from './Component/auth/auth.component';
import { RegisterComponent } from './Component/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RippleModule } from 'primeng/ripple';
import { IndexComponent } from './Component/index/index.component';
import { CategoryComponent } from './Component/adminchild/category/category.component';
import { RepasComponent } from './Component/adminchild/repas/repas.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { TableModule } from 'primeng/table';
import { TreeSelectModule} from 'primeng/treeselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StepsModule } from 'primeng/steps';
import { ListrepasComponent } from './Component/adminchild/repas/listrepas/listrepas.component';
import { ResConnectedComponent } from './Component/res-connected/res-connected.component';
import { FillArrayPipe } from './Pipe/fill-array/fill-array.pipe';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DateFormatPipe } from './Pipe/dateFormat/date-format.pipe';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { CarteComponent } from './Component/carte/carte.component';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';




@NgModule({
  declarations: [
    AppComponent,
    RestoComponent,
    EspritgusteauComponent,
    ReservationComponent,
    MenumakerComponent,
    AuthComponent,
    RegisterComponent,
    IndexComponent,
    CategoryComponent,
    RepasComponent,
    ListrepasComponent,
    ResConnectedComponent,
    FillArrayPipe,
    DateFormatPipe,
    CarteComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SpeedDialModule,
    CarouselModule,
    CardModule,
    InputTextModule,
    SidebarModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    DividerModule,
    BrowserAnimationsModule,
    ToastModule,
    HttpClientModule,
    RippleModule,
    TableModule,
    TreeSelectModule,
    InputTextareaModule,
    CalendarModule,
    StepsModule,
    SelectButtonModule,
    ConfirmDialogModule,
    SocialLoginModule,
    DialogModule,
    FieldsetModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '605519960714-hggcuakuj7uh3p3c1i6kvpn20utfvkmu.apps.googleusercontent.com'
              )
            }
          ]
        } as SocialAuthServiceConfig,
      }    
    ],
    bootstrap: [AppComponent]
  })
export class AppModule { }
