
import { Component} from '@angular/core';

@Component({
            selector: 'router-app',
            template: `<div class="page-header">
                        <div class="container">
                            <h1>Nested Router</h1>
                            <div class="navLinks">
                              <a [routerLink]="['/home']">Home</a>
                              <a [routerLink]="['/products']">Products</a>
                            </div>
                        </div>
                      </div>

                      <div id="content">
                        <div class="container">
                            <router-outlet></router-outlet>
                        </div>
                    </div> `
          })
export class RootComponent {
          query: string;
}
