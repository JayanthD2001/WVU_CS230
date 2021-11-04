import { Component } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Component({
    selector: 'app-top-nav-bar',
    templateUrl: 'top-nav-bar.component.html',
    styleUrls: ['./top-nav-bar.component.css']
})

export class TopNavBarComponent {

    myInfo: UserInfo["DisplayName"] | "" | undefined;
}
