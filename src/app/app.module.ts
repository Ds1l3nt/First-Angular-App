import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';

import { ProductsService } from './services/products.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsComponent } from './pages/news/news.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'news',  component: NewsComponent },
  { path: 'gallery',  component: GalleryComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'signin',  component: SigninComponent },
  { path: 'cart',  component: CartComponent },
  { path: 'account',  component: AccountComponent },
  { path: 'checkout',  component: CheckoutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    GalleryComponent,
    NotFoundComponent,
    SignupComponent,
    SigninComponent,
    AccountComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }  //just for debuging 
    ),
    NgxPaginationModule
  ],
 // providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
