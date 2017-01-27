import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechnologiesService } from '../../services/technologies/technologies.service';
@Component({
  selector: 'app-technology-detail',
  templateUrl: './technology-detail.component.html',
  styleUrls: ['./technology-detail.component.css'],
  providers: [TechnologiesService]
})
export class TechnologyDetailComponent implements OnInit {
  tech: string;
  private sub: any;
  public resp: any;
  public id: number;
  public techSelected: any;
  constructor(private route: ActivatedRoute, private technologiesService : TechnologiesService) {
    this.technologiesService.getTech().subscribe(data => {
        this.resp = data.technologies;
        this.id= this.resp.findIndex(x => x.name==this.tech);
        this.techSelected = this.resp[this.id];
        console.log(this.techSelected);
      })
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.tech = params['tech']; // (+) converts string 'id' to a number
      });
  }

}
