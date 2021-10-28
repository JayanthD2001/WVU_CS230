import { Component } from "@angular/core";
import { UserInfo } from "src/app/header/user-info.model";
import { UserInfoService } from "src/app/header/user-info.services";

@Component({
    selector: 'app-body-SIGN-IN',
    templateUrl: 'SIGN-IN.component.html'
})

export class SignInComponent {
    
    constructor(private infoService: UserInfoService) {

    }

    onUpdateUserInfo(data:UserInfo) {
        console.log("Sign In");
        console.log(data);
        this.infoService.modifyUserInfo(data).subscribe(data => {
            console.log("Data Sent");
        });
    }
}
