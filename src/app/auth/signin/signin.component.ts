import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})


export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.signinForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit(form: NgForm) {

    // this.authService.signInUser(form.value).add(data => {
    //   this.toastr.success('L utilisateur s"est loggé avec');
    // });

  }
}
