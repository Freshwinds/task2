/**
 * Created by freshwinds on 17-7-11.
 */
function item(barcode,name,unit,price,count) {
    this.barcode=barcode;
    this.name=name;
    this.unit=unit;
    this.price=price;
    this.count=count;
}
item.prototype={
    constructor:item,
    getBarcode:function () {
        return this.barcode;
    },
    getName:function () {
        return this.name;

    },
    getUnit:function(){
        return this.unit;
    },
    getPrice:function () {

        return this.price;
    },
    getCount:function () {
        return this.count;

    }
}

var items=new Array();
items[0]=new item('ITEM000000','可口可乐','瓶',3.00,5);
items[1]=new item('ITEM000001','雪碧','瓶',3.00,2);
items[2]=new item('ITEM000004','电池','个',2.00,1);

var sum_items=new Array();
for(var i=0;i<items.length;i++)
    sum_items[i]=Number(items[i].getPrice())*Number(items[i].getCount());

var all_sum=0;
for(var i=0;i<sum_items.length;i++)
{
    all_sum+=sum_items[i];
}

console.log("***<没钱赚商店>收据****");

for(var i=0;i<items.length;i++)
{
    var str="";
    str+="名称:";str+=String(items[i].getName());
    str+=", 数量:";str+=String(items[i].getCount());
    str+=String(items[i].getUnit());
    str+=", 单价:";
    str+=String(items[i].price.toFixed(2));
    str+="(元), 小计：";
    str+=String(sum_items[i].toFixed(2));
    str+="(元)";
    console.log(str);
}
console.log("———————————————————————————————————");
console.log("总计："+all_sum.toFixed(2)+"（元）");
console.log("**************************");


//toFixed() 固定小数位数
