import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() title: any;
  
  @Input() main: any;
  // metadata
  @Input() metadata: any;
}
