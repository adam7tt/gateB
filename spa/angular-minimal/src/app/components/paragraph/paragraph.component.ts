import { Component, Input, AfterContentInit } from '@angular/core';

@Component({
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
})
export class ParagraphComponent implements AfterContentInit{

  @Input() richText: any;
  toDisplay = "";
  //coolio = this.content['richText'];

  ngAfterContentInit(): void {
    if (this.richText ) {
      this.toDisplay = this.richText;
    }
  }
}
