/**
 * This a simple course about angular testing
 * We develop a counter and we test increment/decrement from the tempalte and ts file
 * See: https://alligator.io/angular/introduction-unit-testing/
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-ut',
  templateUrl: './counter-ut.component.html',
  styleUrls: ['./counter-ut.component.scss']
})
export class CounterUtComponent implements OnInit {

  title = 'angular102';

  value = 0;
  message: string;

  increment() {
    if (this.value < 15) {
      this.value += 1;
      this.message = '';
    } else {
      this.message = 'Maximum reached!';
    }
  }
  decrement() {
    if (this.value > 0) {
      this.value -= 1;
      this.message = '';
    } else {
      this.message = 'Minimum reached!';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
