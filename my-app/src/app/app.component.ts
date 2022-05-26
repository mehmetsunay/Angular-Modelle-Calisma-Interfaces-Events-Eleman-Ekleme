import { Component } from '@angular/core';

/*
APP-ROOT SELECTORUNE BAGLI CALISAN HTML DOSYASININ CSSLERİNİ DÜZENLEMEK İÇİN
APP.COMPONENT.CSS KULLANILIR

*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*  
App componentimin içerisinde yapmak istediğim 
işlemler için bir classım var ve onu dışarıda
kullanabilmek için export keywordumu yazıyorum

*/
export class AppComponent {

  //title isminde bir nesne oluşturup app componentde bu nesneyi çağırıp yazdırıyorum
  title = 'my-app';

  //tanımladığım nesneme özellikler giriyorum bu özellikleride yine apcom.htmlde p etıketı ıcersınde yazdrıyorum.


  todoItem={
   description:"Giriş İşlemi Deneniyor...",
   action:true

  }
//Yukarda kullanıdğımız title ı bu şekilde de yazdırabiliriz
 getTitle(){

    return this.title;
  }
}
 