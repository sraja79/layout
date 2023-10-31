import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { ProductData } from './product-data';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  products :any;
  product_collection:ProductData[]=[] ;
  select_Products:ProductData[]=[];
  pdata:ProductData[]=[];
  selectedFilter!:string;
  filtercolumn!:string;
  filterSortType:string='asc';


  constructor(private httpclient:HttpClient) {
    
  }

  filterProducts()
  {
    this.filtercolumn=this.selectedFilter.split("~")[0];
    this.filterSortType=this.selectedFilter.split("~")[1];
alert(this.filtercolumn + this.filterSortType);
  }

  addtoCard(prod:any)
  {
      if (this.select_Products.indexOf(prod)==-1)
      {
        this.select_Products.push(prod);
      }
 
  }

  removeItem(prod:any)
  {
    var index=this.select_Products.indexOf(prod);
   
    if(index>=0)
    {
      this.select_Products.splice(index);
    }
  }
  
  intervalID:any;
  ngOnInit(): void {
         // this.product_collection=[{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]}];
         this. intervalID= setInterval(() => {
           this. getProduct();  
           if(this.products!=null)
           {
            for(let item of this.products.products)
            {
             console.log(item);
             this.product_collection.push(item);
            }
           
            clearInterval(this.intervalID);
           }
          },2000)

         
          //this.getProducts();
         
    }

     getProduct():any
    {

      
      this.httpclient.get("https://dummyjson.com/products").subscribe(
        (data)=>
        { this.products=data;
          //console.log(this.products);
         
       // this.product_collection=[...this.products];
        }
       
      );
      

    }

    getProducts()
    {
      fetch("https://dummyjson.com/products").then(res => res.json())
      .then(json => {
        this.products = json;
        //console.log(this.products);
      });
      console.log( this.products);
    }

    
       

  

  

  

}
