import { BasicComponent } from './app/pages/basic/basic.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { HeadlineComponent } from './app/components/headline/headline.component';
import { ListItemComponent } from './app/components/list-item/list-item.component';
import { ListComponent } from './app/components/list/list.component';
import { ParagraphComponent } from './app/components/paragraph/paragraph.component';
import { ImageComponent } from './app/components/image/image.component';
import { ExpanderComponent } from './app/components/expander/expander.component';

export const config = {
    'componentMapping': {
      'angular-minimal-lm:pages/basic': BasicComponent,
      'angular-minimal-lm:pages/contact': ContactComponent,

      'spa-lm:components/headline': HeadlineComponent,
      'spa-lm:components/list': ListComponent,
      'spa-lm:components/listItem': ListItemComponent,
      'spa-lm:components/paragraph': ParagraphComponent,
      'spa-lm:components/image': ImageComponent,
      'spa-lm:components/expander': ExpanderComponent
    }
  };

