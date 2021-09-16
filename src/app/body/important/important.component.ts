import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-body-important',
    templateUrl: 'important.component.html'
})

export class ImportantComponent {
    @Input()
    gameName! :string;
    @Input()
    gameCreator! :string;
    @Input()
    discount! :string;
    @Input()
    originalPrice! :string;
    @Input()
    currentPrice! :string;
    @Input()
    imagePath! :string;
}
