import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { UserInfo } from "src/app/header/user-info.model";
import { UserInfoService } from "src/app/header/user-info.services";
import { DatabaseService } from "../database.service";

@Component({
    selector: 'app-body-SIGN-IN',
    templateUrl: 'SIGN-IN.component.html'
})

export class SignINComponent {
    users!: Observable<Object | null>;
    constructor(private infoService: UserInfoService, private dbService:DatabaseService) {

    }

    onUpdateUserInfo(data:UserInfo) {
        console.log("Sign In");
        console.log(data);
        
        for(var v in this.dbService.data()) {
            
        }
        this.infoService.modifyUserInfo(data).subscribe(data => {
            console.log("Data Sent");
        });
    }
}
