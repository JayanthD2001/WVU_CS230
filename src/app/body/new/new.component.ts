import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-body-new',
    templateUrl: 'new.component.html'
})

export class NewComponent {
    @Input()
    gameName! :string;
    @Input()
    freeTime! :string;
    @Input()
    currentState! :string;
    //@Input()
    //currentStateColor! :string; 
    @Input()
    imagePath! :string;


    /*current_color_state(a: string): string{
        if(this.currentState == "Free")
        {
            return "background-color: rgba(37, 113, 212);";
        }
        return "background-color: rgb(0, 0, 0);"
    }*/
}


