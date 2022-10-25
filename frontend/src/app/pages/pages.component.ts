import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { AppStore, PlaygroundCreateComponent } from '@turnik/domain';
import { ExtendedDialogService } from '@turnik/common';

@Component({
  selector: 'app-pages-component',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  social: { icon: IconName; prefix: IconPrefix; href: string }[] = [
    {
      icon: 'instagram',
      prefix: 'fab',
      href: 'https://www.instagram.com/los_strong90',
    },
    // {
    //   icon: 'telegram',
    //   prefix: 'fab',
    //   href: 'https://t.me/+joCpD7hvRMxhMzgy',
    // },
    {
      icon: 'github',
      prefix: 'fab',
      href: 'https://github.com/ultramarine256/turnik-city',
    },
    {
      icon: 'trello',
      prefix: 'fab',
      href: 'https://trello.com/b/dzdlmCE2/turnikcity',
    },
    // {
    //   icon: 'folder',
    //   prefix: 'far',
    //   href: 'https://turnik-city.notion.site/Main-114dd86dc6554830a7cc0f337f3d3f7c',
    // },
  ];

  constructor(public router: Router, public store: AppStore, private dialogService: ExtendedDialogService) {}

  ngOnInit() {}

  test() {
    this.dialogService.openDialog(PlaygroundCreateComponent);
  }
}
