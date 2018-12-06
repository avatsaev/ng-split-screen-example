import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  @Input() buttonTitle = 'Button';
  @Output() buttonClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
