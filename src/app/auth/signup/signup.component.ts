import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // signupForm: FormGroup;
  // errorMessage: string;
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.user = {
        Username: '',
        Password: '',
        Email: '',
        FirstName: '',
        LastName: ''
      };
    }
  }
  OnSubmit(form: NgForm) {
    this.authService.signInUser(form.value).subscribe((data: any) => {
      if (data.Succeeded === true) {
        this.resetForm(form);
        this.toastr.success('Inscription Réussi');
      } else {
        this.toastr.error(data.Errors[0]);
      }
    });
  }

}



