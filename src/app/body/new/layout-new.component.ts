import { Component, Input } from "@angular/core";
import { mock_new } from "./mock-new";
import { NewClass } from "./new-model.model";

@Component({
    selector: 'app-body-new-layout-new',
    templateUrl: 'layout-new.component.html'
})

export class LayoutNewComponent {
    newList:NewClass[] = [];

    constructor() {
        for (var newList of mock_new) {
            this.newList.push(new NewClass(newList))
        }
    }
}
