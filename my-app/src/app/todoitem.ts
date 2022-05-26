

/*

Kodlarımız arasındaki olası erişim belirleyici hatalarının önğne geçmek
Eksik yada yanlış veri aktarımının olması ve kontrollu çalışmak adına
Model kullanımı yapıyorum

*/

/*Classımı ve içerisindeki yapıcı metodum olan constructorımı tanımladım...*/

// export class TodoITem{

// constructor(public Sorumluluklar: string , public Durumu:string) {

// this.Sorumluluklar=Sorumluluklar;
// this.Durumu=Durumu;

// }

// }

export interface TodoITem{

  Sorumluluklar:String;
  Durumu:string;


}

