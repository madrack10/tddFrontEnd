import { Component, OnInit, Input } from '@angular/core';
import { OffresService } from 'src/app/services/offres.service';
import { ActivatedRoute } from '@angular/router';
import { Offre } from 'src/app/models/offre.model';

@Component({
  selector: 'app-single-offre',
  templateUrl: './single-offre.component.html',
  styleUrls: ['./single-offre.component.scss']
})
export class SingleOffreComponent implements OnInit {

  @Input() offre: Offre;

  constructor(
    private route: ActivatedRoute,
    private offreService: OffresService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getOffre();
  }

  getOffre(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.offreService.getOffrebyId(id)
      .subscribe(offrir => this.offre = offrir);
  }




  // goBack(): void {
  //   this.location.back();
  // }

  save(): void {

  }

}
