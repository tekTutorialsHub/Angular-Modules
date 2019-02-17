  import { Component } from '@angular/core';

  @Component({
    template: `<h1>Dashboard Component</h1>
    
  <ul>
    <li>
        <a routerLink="user">User</a>
    </li>
    <li>
      <a routerLink="rights">Rights</a>
    </li>
  </ul>

  <router-outlet></router-outlet>

    `,
  })
  export class DashboardComponent {
    title = '';
  }