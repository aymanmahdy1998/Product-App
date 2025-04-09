import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  counter : number = 0;
  counterService = inject(CounterService);

  ngOnInit() {
    this.counterService
      .getCounter()
      .subscribe((resposne) => this.counter = resposne);
  }
}

