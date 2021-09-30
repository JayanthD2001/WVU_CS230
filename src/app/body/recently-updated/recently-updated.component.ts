import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-body-recently-updated',
    templateUrl: 'recently-updated.component.html'
})

export class RecentlyUpdatedComponent {
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
