export class BigImportant {
    gameName: string;
    gameDescription: string;
    price: string;
    imagePath: string;


    constructor({ gameName, gameDescription, price, imagePath }:
        { gameName: string, gameDescription: string, price: string, imagePath: string}) {
        this.gameName = gameName;
        this.gameDescription = gameDescription;
        this.price = price;
        this.imagePath = imagePath;
        }
}