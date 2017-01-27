import { Component } from '@angular/core';
import { StackSearchService } from '../../services/stackAPI/stack.service';

@Component({
  selector: 'stack-search',
  moduleId: module.id,
  templateUrl: 'stack.component.html',
  providers : [StackSearchService],
  styleUrls: ['./stack.component.css'],
})
export class StackComponent  {
    stack: Post;
    answerlink: string;

  constructor(private searchService : StackSearchService){
  }
  getResult(Search:string){
      this.searchService.getSearch(Search).subscribe(post => {
      this.stack = post.items;
      console.dir(this.stack);
    })
  }
}

interface Post{
  items: Items[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

interface Items{
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  accepted_answer_id: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  question_id: number;
  link: string;
  title: string;
}