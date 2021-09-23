export class NewClass {
    gameName: string;
    freeTime: string;
    currentState: string;
    imagePath: string;
    
    


    constructor({ gameName, freeTime, currentState, imagePath}:
        { gameName: string, freeTime: string, currentState: string, imagePath: string}) {
        this.gameName = gameName;
        this.freeTime = freeTime;
        this.currentState = currentState;
        //this.currentStateColor = currentStateColor;
        this.imagePath = imagePath;
        }
}