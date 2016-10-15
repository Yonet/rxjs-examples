import { Component, OnInit } from '@angular/core';
import {Subject, BehaviorSubject, Observable} from 'rxjs';

let subject = new Subject();
let observerA = {
  next: (v) => console.log("ObserverA sees ", v),
  error: (e) => console.log("ObserverA errored ", e),
  complete: () => console.log("ObserverA  Completed!"),
}

let observerB = {
  next: (v) => console.log("ObserverB sees ", v),
  error: (e) => console.log("observerB errored ", e),
  complete: () => console.log("ObserverB  Completed!"),
}

@Component({
  selector: 'rxex-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  current: number;
  disabled = false;

  constructor() { }

  ngOnInit() {
    //Never observed because it happened before the subscription
    subject.next(1);
    subject.subscribe(v => {
      console.log(v)
    })
    subject.subscribe(observerA);
    subject.next(2);
    subject.next(3);
    this.current = 3;
  }

  submitNewVal() {
    this.current++;
    subject.next(this.current);
  }

  subscribeToB() {
    subject.subscribe(observerB);
    this.disabled = true;
  }

  complete() {
    subject.complete();
  }




}
