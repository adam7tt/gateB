import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent {
  @Input() text: any;
}
