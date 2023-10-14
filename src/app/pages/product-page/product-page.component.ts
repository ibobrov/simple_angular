import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  title = 'Angular App';
  loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(public productsService: ProductService,
              public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
