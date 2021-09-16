import { Component } from "@angular/core";
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
}