import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
var toastr = require('toastr');
 declare var toastr:any;
 toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-left",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

declare var require:any;


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products:any;
  public query:any = {
    q:'',
    category:'',
    brand:'',
    min_price:'',
    max_price:''
  };
  p:number  = 1;
  loading:boolean = false;
  constructor(public productSvc: ProductsService , public CartSvc : CartService) { 
   // this.products = this.productSvc.getAll();
  }

  onSearch(e){
    console.log(this.query);
   // alert("search");
    this.loadProducts();
  }

  ngOnInit() {
  this.loadProducts();
  }

  loadProducts(){
    //show loading
    this.loading = true;
    //reset products
    this.products = [];

  //promise , async-await , observable
  this.productSvc.getAll(this.query).subscribe( (data:any) => {
    //    let data:any = res;
        console.log(data.products);
        if(data.products){
        this.products = data.products;
        }
        this.loading = false;
});
  }

  addToCart(product) {
    console.log(product);
    this.CartSvc.add(product);
    toastr('Successfully added to the cart.');
    
  }

  ngAfterViewInit(){
    
  }

}
