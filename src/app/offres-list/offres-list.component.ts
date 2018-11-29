import { Component, OnInit } from '@angular/core';
import { OffresService } from '../services/offres.service';
import { Offre } from '../models/offre.model';

@Component({
  selector: 'app-offres-list',
  templateUrl: './offres-list.component.html',
  styleUrls: ['./offres-list.component.scss']
})
export class OffresListComponent implements OnInit {
  offres: Offre[];

  constructor(private offrservive: OffresService) { }

  ngOnInit() {
    this.getOffres();
  }
  getOffres(): void {
    this.offrservive.getOffres()
      .subscribe(offrir => this.offres = offrir);
  }

}
