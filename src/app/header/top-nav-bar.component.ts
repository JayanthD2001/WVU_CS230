import { Component } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.services";

@Component({
    selector: 'app-top-nav-bar',
    templateUrl: 'top-nav-bar.component.html',
    styleUrls: ['./top-nav-bar.component.css']
})

export class TopNavBarComponent {
    
    myInfo: UserInfo | undefined;
    SpecificInfo: string = "SIGN IN";
    constructor(private userInfoService:UserInfoService) {
        this.userInfoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
            if(this.myInfo.DisplayName != null && this.myInfo?.DisplayName != "") {
                this.SpecificInfo = this.myInfo.DisplayName;
                
            }
        })
    }
    
}
