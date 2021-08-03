import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Articles } from './Articles.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Articles[] = [
    {
      id: 1,
      title: 'Angular',
      votes: 10,
      link: 'http://angular.io/',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
    },
    {
      id: 2,
      title: 'React',
      votes: 8,
      link: 'https://reactjs.org/',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    },
    {
      id: 3,
      title: 'Vue',
      votes: 6,
      link: 'https://vuejs.org/',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
    },
  ];
  title: any;
  link: any;
  img: any;

  @ViewChild('linkForm') public createEmployeeForm: NgForm;
  article: Articles;

  constructor() {}

  addArticle() {
    this.articles.push({
      id: +1,
      title: this.title,
      votes: 0,
      link: this.link,
      img: this.img,
    });
  }
}
