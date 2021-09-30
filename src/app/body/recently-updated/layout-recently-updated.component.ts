import { Component } from "@angular/core";
import { mock_recently_updated } from "./mock-recently-updated";
import { RecentlyUpdated } from "./recently-updated.model";


@Component({
    selector: 'app-body-recently-updated-layout-recently-updated',
    templateUrl: 'layout-recently-updated.component.html'
})

export class LayoutRecentlyUpdatedComponent {
    recentlyUpdated:RecentlyUpdated[] = [];

    constructor() {
        for (var recentlyUpdated of mock_recently_updated) {
            this.recentlyUpdated.push(new RecentlyUpdated(recentlyUpdated))
        }
    }
}
