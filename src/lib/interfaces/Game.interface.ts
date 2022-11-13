export class GameModel {
    gameTitle: string;
    gameDeveloper: string;
    gameDescription: string;
    /**
     * THis should be 150px x 35px
     */
    gameBannerPath?: string;

    /**
     * Game profiles size should be 1000x1000 or 1:1
     */
    gameIconPath?: string;

    gameCategory: string;

    gameJSON: string;
    isHTMLGame: boolean;


}

