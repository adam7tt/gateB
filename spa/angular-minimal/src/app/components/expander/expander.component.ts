import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent  {

  @Input() expanderItems: any;

  // metadata
  @Input() metadata: any;

  isExpanded = false;

  toggleArea() {
    this.isExpanded = !this.isExpanded;
  }

}
