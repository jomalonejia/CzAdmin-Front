import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {DBModule} from '@ngrx/db';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastModule, ToastOptions} from 'ng2-toastr';

import {AuthHttp} from './services/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ComponentsModule} from './components/components.module';
import {CoreModule} from './core/core.module';
import {AuthInterceptor, CustomToasterService} from 'app/services';
import {reducers, metaReducers} from './reducers';
import {schema} from './components/db';
import {CustomRouterStateSerializer} from './components/utils';
import {ServicesModule} from 'app/services/service.module';


export class CustomOption extends ToastOptions {
  maxShown = 3;
  toastLife = 2000;
  newestOnTop = false;
  positionClass = 'toast-top-center';
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ToastModule.forRoot(),
    ComponentsModule.forRoot(),
    CoreModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers}),
    /*StoreRouterConnectingModule,*/
    EffectsModule.forRoot([]),
    DBModule.provideDB(schema),
    StoreDevtoolsModule.instrument(),
    ServicesModule.forRoot(),

  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: ToastOptions, useClass: CustomOption},
    AuthHttp,
    CustomToasterService,
    /*{ provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },*/

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
