import { Component } from "@angular/core";
import { Important } from "./important.model";
import { mock_important } from "./mock-important";

@Component({
    selector: 'app-body-important-layout-important',
    templateUrl: 'layout-important.component.html'
})

export class LayoutImportantComponent {
    important:Important[] = [];

    constructor() {
        for (var important of mock_important) {
            this.important.push(new Important(important))
        }
    }
}
