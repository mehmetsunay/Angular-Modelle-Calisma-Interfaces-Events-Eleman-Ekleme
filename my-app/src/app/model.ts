import { TodoITem } from "./todoitem";


//Tıpkı style.css de olduğu gibi projemin tamamında istediğim yerlerde kullanmak üzere
//model.ts isminde bir model tanımlıyorum 
//İStediğim componentime dahil edebilirim 

export class Model{

name:string;
objcts:TodoITem[];

constructor()
{

this.name="ÖĞRENCİNİN"
this.objcts=[


    {Sorumluluklar:"Ev Ödevleri",Durumu:"Tamamlandı"},
{Sorumluluklar:"Hobiler Edinme",Durumu:"Beklemede"},
{Sorumluluklar:"Sosyal Sorumululuk Projeleri",Durumu:"Beklemede"}

];


}

}