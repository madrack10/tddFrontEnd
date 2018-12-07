import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OffresService } from '@app/services/offres.service';
import { AlertService } from '@app/services';
import { Offre, User } from '@app/models';

@Component({
  selector: 'app-form-offre',
  templateUrl: './form-offre.component.html',
  styleUrls: ['./form-offre.component.scss']
})
export class FormOffreComponent implements OnInit {
  addOfferForm: FormGroup;
  loading: false;
  submitted: false;
  offre: Offre;
  offrestab: Offre[];
  keys = Object.keys;

  // offre: Offre = {
  //   id: 1,
  //   jobID: 1234,
  //   auteur: '',
  //   avantageRelative: 'Lorem ipsum dolor sit amet a consetir etc ',
  //   localisation: 'Mbour',
  //   titre: 'Stage en commissaire priseur',
  //   // publishOn:Date.now(),
  //   // dateLimite: Date.now(),
  //   // dateOuverture: Date.now(),
  //   description: 'Lore, ipsum ddolor sit amet a consetir adiscioing',
  //   domaine: '',
  //   profilRequis: '',
  //   typeoffre: ''
  // };

  constructor(
    private formBuilder: FormBuilder,
    // private router: Router,
    private _offreService: OffresService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // this.getDomaine(),
    //   this.addOfferForm = this.formBuilder.group({
    //     titre: new FormControl(this.offre.titre, Validators.required),
    //     description: new FormControl(this.offre.description, Validators.required),
    //     jobID: new FormControl(this.offre.jobID),
    //     profilRequis: new FormControl(this.offre.profilRequis, Validators.required),
    //     avantageRelative: new FormControl(this.offre.avantageRelative),
    //     publishOn: new FormControl(this.offre.publishOn),
    //     dateOuverture: new FormControl(this.offre.dateOuverture, Validators.required),
    //     dateLimite: new FormControl(this.offre.dateLimite, Validators.required),
    //     localisation: new FormControl(this.offre.localisation, Validators.required),
    //     // auteur: User;
    //     // typeoffre: TypeContrat;
    //     // domaine: Domaine;

    //   });

  }
  // getProfiles() {
  //   this.keys(this.profiles).forEach(profile =>
  //           this.typeProfil = profile
  //   );
  //   this.profileService.getProfiles(this.typeProfil)
  //       .subscribe(data => {
  //           console.log(data);
  //   });

  getDomaine() {
  }


  addOffre(offre: Offre): void {
    if (!offre) { return; }
    this._offreService.AddOffer(offre)
      .subscribe(offer => {
        this.offrestab.push(offer);
      });
  }

}
