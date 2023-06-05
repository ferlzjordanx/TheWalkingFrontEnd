import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products:Product[];
    
  constructor(private ps:ProductService, private route:ActivatedRoute){

  }
  
  ngOnInit(): void {
      this.route.params.subscribe(()=>{

        const id=+this.route.snapshot.paramMap.get("cid");
        this.fetchAllProducts(id);

      });
         
           
           
  }

  public fetchAllProducts(cid:number){
    this.ps.getProduct(cid).subscribe(data=>{
               
      this.products=data;
    //  console.log(this.products);
  });
  }
}