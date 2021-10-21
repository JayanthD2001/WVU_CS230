import { Component, OnInit } from "@angular/core";
import { BigImportant } from "./big-important.model";
import { GameInfoService } from "./game-info.service";
//import { mock_big_important } from "./mock-big-important";

@Component({
    selector: 'app-body-big-important-layout-big-important',
    templateUrl: 'layout-big-important.component.html'
})

export class LayoutBigImportantComponent implements OnInit {
    myInfo: BigImportant | undefined;
    bigImportant:BigImportant[] = [];

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
                this.bigImportant.push(new BigImportant(data[item]));
                console.log(data[item]);
            }
        })
    }
}


/*import { Component } from "@angular/core";
import { BigImportant } from "./big-important.model";
import { mock_big_important } from "./mock-big-important";

@Component({
    selector: 'app-body-big-important-layout-big-important',
    templateUrl: 'layout-big-important.component.html'
})

export class LayoutBigImportantComponent {
    bigImportant:BigImportant[] = [];

    constructor() {
        for (var bigImportant of mock_big_important) {
            this.bigImportant.push(new BigImportant(bigImportant))
        }
    }
}*/