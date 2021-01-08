export class Product 
{
    id:number;
    name:string;
    description:string;
    price:number;
    qty:number;
    imageUrl:string;

    constructor(id,name,descrption='',price=0,imageUrl){
        this.id=id;
        this.name=name;
        this.description = descrption;
        this.price=price;
        this.imageUrl = imageUrl;
    }
}
