import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-body-big-important',
    templateUrl: 'big-important.component.html'
})

export class BigImportantComponent {
    @Input()
    gameName! :string;
    @Input()
    gameDescription! :string;
    @Input()
    price! :string;
    @Input()
    imagePath! :string;
}
