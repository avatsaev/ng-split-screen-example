import {Component, OnInit} from '@angular/core';

interface IConfig {
  columns: Array<{
    visible: boolean,
    size: number,
    rows: Array<{
      visible: boolean,
      size?: number,
      type: string
    }>
  }>;
  disabled: boolean;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  config: IConfig = {
    columns: [
      {
        visible: true,
        size: 100,
        rows: [
          { visible: true, size: 50, type: 'A' },
          { visible: true, size: 50, type: 'B' }
        ]
      }
    ],
    disabled: false
  };

  ngOnInit() {

  }



}
