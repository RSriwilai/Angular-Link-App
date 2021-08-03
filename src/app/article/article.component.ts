import { Component, Input, OnInit } from '@angular/core';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Articles } from '../Articles.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() articles: Articles;

  votes: number;
  title: string;
  link: string;
  faThumpsUp = faThumbsUp;
  faThumpsDown = faThumbsDown;

  constructor() {}

  ngOnInit(): void {}

  voteUp() {
    this.articles.votes += 1;
  }

  voteDown() {
    this.articles.votes -= 1;
  }
}
