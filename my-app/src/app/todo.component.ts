
/*

YENİ BİR COMPONENT OLUŞTURURKEN İŞE TYPESCRİPT DOSYAMI OLUŞTURURAK BAŞLADIM
AYRICA BÜTÜN BU İŞLEMLERİ NG KOMUTUYLA DA YAPABİLDİĞİMİ ÖĞRENDİM


*/


import { Component } from '@angular/core';
import { Model } from './model';
import { TodoITem } from './todoitem';

@Component({

//BİR SELECTOR SEÇİP ONA BAĞLI ÇALIŞACAK DOSYALARIMIN ADINI GİRİP FİZİKİ OLARAKDA OLUŞTURDUM...
selector:'todo',
templateUrl: './todo.component.html',
styleUrls:['./todo.component.css']

})

export class ToDoComponent {



/*Bu kısmı ben nesne oluşturup türetmek için kullandım todoitem.ts çerisindeki classla bağlantılı calısıyor*/
/* Eğer todoitem.ts içerisinde class değil şemaları barındıran bir interface tanımlarsam bu kısım hata verir */

//oluştrudugum model.tsimi dahil ettim
 m=new Model();

// objcts:TodoITem[]=[

// // {Sorumluluklar:"Ev Ödevleri",Durumu:"Tamamlandı"},
// // {Sorumluluklar:"Hobiler Edinme",Durumu:"Beklemede"},
// // {Sorumluluklar:"Sosyal Sorumululuk Projeleri",Durumu:"Beklemede"}


// // new TodoITem("Ev Ödevleri","Tamamlandı"),
// // new TodoITem("Spor Yapmak","Beklemede"),
// // new TodoITem("Hobiler Edinmek","Tamamlandı"),
// // new TodoITem("Sosyal Sorumluluklar","Beklemede"),

// ];


getName(){

return this.m.name;


}

/*
Buton Tıklandığı zaman bu metod çağırılır ve console işlemin gerçekleştiğini gösteren bir mesaj düşer
girilen datalarımı alması için any türünde bir item tanımladım ve bunu consola verdim.
add item metodumda click eventimle bağlantılı olduğu için text boxa yazdığım herşey konsola düşüyor*/

// addItem(txtItem:any)
// {

// console.log(txtItem.value);


// }

addItem(value:string)
{
    if(value!="")
    {

this.m.objcts.push({Sorumluluklar:value,Durumu:"Beklemede"})
} else{

alert("Bu Alan Boş Geçilemez")

}

}


/*verileri alıyorum*/
getItems(){

return this.m.objcts;


}

}