import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { MustMatch } from '@app/helpers/must-match.validator';
import { validateConfig } from '@angular/router/src/config';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  loading = false;
  submitted = false;
  user = new User();
  // confirmPassword = '';





  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private alertService: AlertService,
  ) {
    // Rediriger sur home
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }

    const users: User[] = [
      { Id: 1, Username: 'test', Password: 'test', FirstName: 'Test', LastName: 'User', Email: 'user@outlook.fr' }
    ];

  }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }


  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }


  // onSubmit() {
  //   console.log(this.signupForm.value);
  //   this.userService.register(this.signupForm.value)
  //     .subscribe(
  //       reponse => console.log('bakhna', reponse),
  //       erreur => console.log('bakhoul', erreur)
  //     );
  // }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      console.log('bakhoul');
      return;
    }
    console.log('bakhna'),
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value));
  }



  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.signupForm.invalid) {
  //     return;
  //   }

  //   this.loading = true;
  //   this.userService.register(this.signupForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.alertService.success('Inscription Réussie', true);
  //         this.router.navigate(['/home/auth/signin']);
  //       },
  //       error => {
  //         this.alertService.error(error);
  //         this.loading = false;
  //       });
  // }



}
    //   this.signupForm = new FormGroup({
    //     'firstName': new FormControl(this.user.FirstName),
    //     'lastName': new FormControl(this.user.LastName),
    //     'Username': new FormControl(this.user.Username, [Validators.required]),
    //     'email': new FormControl(this.user.Email, [Validators.required, Validators.email]),
    //     'Password': new FormControl(this.user.Password, [Validators.required, Validators.minLength(6)]]),
    //     'ConfirmPassword': new FormControl('', [Validators.required])
    //   }
    // });