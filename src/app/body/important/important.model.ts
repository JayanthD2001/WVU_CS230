export class Important {
    gameName: string;
    gameCreator: string;
    
    discount: string;
    originalPrice: string;
    currentPrice: string;
    imagePath: string;


    constructor({ gameName, gameCreator, discount, originalPrice, currentPrice, imagePath }:
        { gameName: string, gameCreator: string, discount: string, originalPrice: string, currentPrice: string, imagePath: string}) {
        this.gameName = gameName;
        this.gameCreator = gameCreator;
        this.discount = discount;
        this.originalPrice = originalPrice;
        this.currentPrice = currentPrice;
        this.imagePath = imagePath;
        }
}