import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { AuthResponse } from "src/app/auth/authResponse";

@Component({
    selector: 'app-body-SIGN-UP',
    templateUrl: 'SIGN-UP.component.html'
})

export class SignUPComponent {
    
//    constructor(private infoService: UserInfoService, private dbService:DatabaseService) {
//        dbService.showData();
//    }

    public buttonClicked!:string;
    private authObservable!: Observable<AuthResponse>;

    constructor(private authService:AuthService) {
    }

    onUpdateUserInfo(data: NgForm) {
        console.log("Button clicked = " + this.buttonClicked);
        console.log(data.value);

        if (this.buttonClicked == 'SignUp') {
            this.authObservable = this.authService.signup(data.value.EmailAddress, data.value.Password);
        }
        
        
        this.authObservable.subscribe(
            (data:AuthResponse) => {
                console.log(data);
            },
            error => {
                console.log(error.error);
            }
        );

        data.resetForm();
        
    }
}
