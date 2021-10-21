import { Component, Injectable, OnInit } from "@angular/core";
import { BigImportant } from "./big-important.model";
import { GameInfoService } from "./game-info.service";

@Injectable()
@Component({
    selector: "game-info",
    //templateUrl: "user-info.component.html"
})
export class GameInfoComponent implements OnInit {
    
    myInfo: BigImportant | undefined;

    constructor(private userInfoService:GameInfoService) {
    }
    ngOnInit(): void {
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
    }
    showUserInfo() {
        this.userInfoService.getUserInfo().subscribe((data: BigImportant []) => {
            console.log(data);
            for(var item in data) {
                console.log(data[item]);
            }
        })
    }
}