import { Component } from "@angular/core";
import { DatabaseService } from "../body/database.service";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.services";

@Component({
    selector: 'app-top-nav-bar',
    templateUrl: 'top-nav-bar.component.html',
    styleUrls: ['./top-nav-bar.component.css']
})

export class TopNavBarComponent {
    
    myInfo: UserInfo []| undefined;
    SpecificInfo: string = "SIGN IN";
    constructor(private userInfoService:DatabaseService) {
        this.userInfoService.data().subscribe((data: UserInfo []) => {
            console.log("TopNavBar " + data);
            this.myInfo = data;

            if(this.myInfo[0].DisplayName != null && this.myInfo[0].DisplayName) {
                this.SpecificInfo = this.myInfo[0].DisplayName;
            }
        })
    }
    
}
