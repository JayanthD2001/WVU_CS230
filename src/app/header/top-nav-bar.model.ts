export class SignUp {
    displayName: string = "SIGN IN";

    constructor({ displayName }: 
        {displayName: string}) {
        this.displayName = displayName;
    }
/*    constructor({ gameName, gameDescription, price, imagePath }:
        { gameName: string, gameDescription: string, price: string, imagePath: string}) {
        this.gameName = gameName;
        this.gameDescription = gameDescription;
        this.price = price;
        this.imagePath = imagePath;
        }*/
}