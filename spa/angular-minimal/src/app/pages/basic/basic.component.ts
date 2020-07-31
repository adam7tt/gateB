import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  @Input() title: any;

  @Input() main: any;
  @Input() extras: any;
  // metadata
  @Input() metadata: any;
}
