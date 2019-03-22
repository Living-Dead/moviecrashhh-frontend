import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Config } from "../../config-enum";
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    validation = {
        email: Config.emailRegex,
        password: Config.passwordRegex,
    };
    register$: any;

    constructor(
        private formBuilder: FormBuilder,
        private apiService: ApiService) { }

    ngOnInit() {

        this.registerForm = this.formBuilder.group({
            tos: [
                '',
                Validators.required,
            ],
            newsletter: [
                '',
            ],
            firstName: [
                '',
                Validators.required,
            ],
            lastName: [
                '',
                Validators.required,
            ],
            email: [
                '',
                [
                    Validators.required,
                    Validators.pattern(this.validation.email),
                ]
            ],
            password: [
                '',
                [
                    Validators.required,
                    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
                ]
            ],
            confirmPassword: [
                '',
                Validators.required
            ]
        },
            {
                validator: this.checkIfMatchingPasswords('password', 'confirmPassword')
            });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true })
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        }
    }

    onSubmit() {

        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.apiService.register(this.registerForm.value).subscribe((data) => {
            this.register$ = data;
            console.log('data', data);
            if (this.register$.success) {
                alert('SUCCESS!! :-)')
            }
        }
        );
    }
}