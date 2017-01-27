import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../../services/technologies/technologies.service';


@Component({
  selector: 'top-questions',
  templateUrl: './top-questions.component.html',
  styleUrls: ['./top-questions.component.css'],
  providers : [TechnologiesService]
})
export class TopQuestionsComponent implements OnInit {

  data: any;

   constructor(private technologiesService : TechnologiesService) { 
    this.technologiesService.getTech().subscribe(data => {
      this.data = data.technologies;
    })
  }

  ngOnInit() {
  }

}
