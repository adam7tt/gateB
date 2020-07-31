import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: any;
  // metadata
  @Input() metadata: any;
}
