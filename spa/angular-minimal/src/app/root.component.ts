import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { EditorContextService } from '@magnolia/angular-editor';

import { getLanguages, getCurrentLanguage, removeCurrentLanguage } from 'src/app/helpers/AppHelpers';
import { environment } from '../environments/environment';
import { config } from '../magnolia.config.js';

@Component({
  templateUrl: './root.component.html',
})
export class RootComponent {
  @Input() content: any;

  constructor(private http: HttpClient, private router: Router, private editorContext: EditorContextService) {
    this.editorContext.setComponentMapping(config.componentMapping);

    // refresh the content on navigation event
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getContent();
      }
    });
  }

  private inAuthor() {
    const ia = environment.inEditor;
    return ia;
  }

  private getContent(): void {
    const languages = getLanguages();
    const nodeName = environment.rootPath;
    const currentLanguage = getCurrentLanguage();
    let path = nodeName + window.location.pathname.replace(new RegExp('(.*' + nodeName + '|.html)', 'g'), '');

    if (currentLanguage !== languages[0]) {
      path = removeCurrentLanguage(path, currentLanguage);
      path += '?lang=' + currentLanguage;
    }

    this.http.get(`${environment.restUrlBase}${path}`).subscribe((content) => {
      if (!this.inAuthor()) {
        this.content = content;
      } else {
        // request the template definitions for given page
        this.http.get(environment.templateDefinitionBase + '/' + content['mgnl:template']).subscribe((definitions) => {
          this.editorContext.setTemplateDefinitions(definitions);
          this.content = content;
        });
      }
    });
  }
}
