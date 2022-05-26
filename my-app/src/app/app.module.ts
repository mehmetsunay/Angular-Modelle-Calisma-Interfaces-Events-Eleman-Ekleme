import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoComponent } from './todo.component';
import { TestComponent } from './test/test.component';

/*
Main.ts burayi tetiklemesinin ardından
App.module dosyamın içerisinde de componentlerimi declare e ediyorum
Component Kavramını açıklayacak olursakda projenin bölümlere ayrılmış hali diyebiliriz...
(navbar,footer,urunler vb)

*/

/*
OLUŞTURDUĞUM DİĞER COMPONENTİ BURAYA DECLARE ETTİM

*/
@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TestComponent

  ],
  imports: [
    BrowserModule
  ],
  //PROJEMİN BAŞLANGIÇ COMPONENTİ OLARAK BOOTS.İÇİNE YAZDIĞIM İSİM ÇALIŞIYOR
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
