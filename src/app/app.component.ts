import {Component} from '@angular/core';

@Component({
  selector: 'router-app',
  template: `
<div class="container">
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['home']">Home</a></li>
        <li><a [routerLink]="['about']">About</a></li>
        <li><a [routerLink]="['contact']">Contact</a></li>
      </ul>
    </div>
  </nav>
  
  <alert type="success">hello</alert>
  <router-outlet></router-outlet>
</div>
`
})
export class AppComponent {
  title = 'app works!';
}
