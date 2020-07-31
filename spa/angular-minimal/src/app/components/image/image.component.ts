import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  
  @Input() image: any;
  
  damUrl = environment.damRawUrl;
}
