export enum  FORMAT { DD_MM_YYYY } ;
export class SclDate  {

  private date : Date = null;

  constructor() {
    this.date = new Date ();
  }

  public getDate()
  {
     return this.date ;
  }

  public format(type_format: FORMAT) : string
  {
      switch (type_format)
      {
        case FORMAT.DD_MM_YYYY :
            let day : String = String(this.date.getDay());
            let month : String = String(this.date.getMonth());
            let year : String = String(this.date.getFullYear());
            return `${day}/${month}/${year}`;


        default :
      }
  }

}
