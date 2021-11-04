import { Component } from "@angular/core";
import { UserInfo } from "src/app/header/user-info.model";
import { UserInfoService } from "src/app/header/user-info.services";
import { DatabaseService } from "../database.service";

@Component({
    selector: 'app-body-SIGN-UP',
    templateUrl: 'SIGN-UP.component.html'
})

export class SignUPComponent {
    
    constructor(private infoService: UserInfoService, private dbService:DatabaseService) {
        dbService.showData();
    }

    onUpdateUserInfo(data:UserInfo) {
        console.log("Sign In");
        console.log(data);
        this.infoService.modifyUserInfo(data).subscribe(data => {
            console.log("Data Sent");
        });
        
    }
}
