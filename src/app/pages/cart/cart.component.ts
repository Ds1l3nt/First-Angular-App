import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public cartSvc: CartService,
    public prodSvc: ProductsService
  ) { 

  }

  ngOnInit() {
  }

  updateQtyCart(item, mode) {
    // if(mode=="p") {
    //   item.qty++;
    // }else if(mode=="m"){
    //   return item.qty--;
    // }
    this.cartSvc.update(item,mode);
  }

  removeItemCart(item) {
    this.cartSvc.remove(item);
  }

}
