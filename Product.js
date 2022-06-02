export default class Product{
    constructor(prodId,prodName, category, price=0,totalBuy=1){
        this.prodID=prodId,
        this.prodName=prodName,
        this.category=category,
        this.price=price,
        this.totalBuy=totalBuy
    }

    setPrice(price){
        this.price=price;
        return this.price;
    }

    setTotalBuy(total){
        this.totalBuy=total;
        return this.totalBuy;
    }

    toString(){
    
    }
}