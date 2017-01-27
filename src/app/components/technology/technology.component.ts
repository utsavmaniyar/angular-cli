import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../../services/technologies/technologies.service';

@Component({
  selector: 'technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  providers: [TechnologiesService]
})
export class TechnologyComponent implements OnInit {
  data: any;

    constructor(private technologiesService : TechnologiesService) { 
      this.technologiesService.getTech().subscribe(data => {
        this.data = data.technologies;
        console.log(this.data[5]);
      })
    }

    ngOnInit() {
    }

  }