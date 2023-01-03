import { Component, Host, h, State, Prop, Watch, Event, EventEmitter } from '@stencil/core';
import { GameModel } from '../../lib/interfaces/Game.interface';
import { SelectItem } from '../../lib/interfaces/Select.interface';

@Component({
    tag: 'gux-uploader',
    styleUrl: 'gux-uploader.scss',
    shadow: false
})
export class GameUploader {
    private categories: SelectItem[] = [
        {
            text: "Action",
            value: "action",
            selected: false
        },
        {
            text: "Platformer",
            value: "platform",
            selected: false
        },
        {
            text: "Puzzle/Casual",
            value: "puzzle",
            selected: false
        },
    ]

    @State() gameState: GameModel = {
        gameTitle: '',
        gameDescription: '',
        gameCategory: '',
        gameDeveloper: '',
        gameJSON: '',
        isHTMLGame: false
    }

    @Prop() gameTitle: string
    @Watch('gameTitle')
    onGameTitleChange(event = null) {
        if (!!event) {
            const { target: { value } } = event;
            this.gameState = { ...this.gameState, ...{ gameTitle: value } }
        } else {
            this.gameState = { ...this.gameState, ...{ gameTitle: this.gameTitle } }
        }
    }

    @Prop() gameDescription: string
    @Watch('gameDescription')
    onGameDescriptionChange(event = null) {
        if (!!event) {
            const { target: { value } } = event;
            this.gameState = { ...this.gameState, ...{ gameDescription: value } }
        } else {
            this.gameState = { ...this.gameState, ...{ gameDescription: this.gameDescription } }
        }
    }

    @Prop() gameDeveloper: string
    @Watch('gameDeveloper')
    ongameDeveloperChange(event = null) {
        if (!!event) {
            const { target: { value } } = event;
            this.gameState = { ...this.gameState, ...{ gameDeveloper: value } }
        } else {
            this.gameState = { ...this.gameState, ...{ gameDeveloper: this.gameDeveloper } }
        }
    }

    @Prop() gameCategory: string
    @Watch('gameCategory')
    onGameCategoryChange(event = null) {
        if (!!event) {
            const { target: { value } } = event;
            this.gameState = { ...this.gameState, ...{ gameCategory: value } }
        } else {
            this.gameState = { ...this.gameState, ...{ gameCategory: this.gameCategory } }
        }
    }

    @Prop() htmlGame: boolean;
    @Watch('htmlGame')
    onIsHTMLGameChange(event = undefined) {
        if (!!event) {
            const { target: { checked } } = event;
            this.gameState = { ...this.gameState, ...{ isHTMLGame: checked } }
        } else {
            this.gameState = { ...this.gameState, ...{ isHTMLGame: this.htmlGame } }
        }
    }

    @Prop() gameBannerPath: string;
    @Watch('gameBannerPath')
    onGameBannerPath(event) {
        if (!!event) {
            const { target: { files } } = event;
            this.bannerfileselected.emit({
                files
            });
        } else {
            this.gameState = { ...this.gameState, ...{ gameBannerPath: this.gameBannerPath } }
        }
    }

    @Prop() gameIconPath: string;
    @Watch('gameIconPath')
    onGameIconPathUpdate(event) {
        if (!!event) {
            const { target: { files } } = event;
            this.iconimageselected.emit({
                files
            });
        } else {
            this.gameState = { ...this.gameState, ...{ gameBannerPath: this.gameBannerPath } }
        }
    }

    @Prop() gameFilesPath: string;
    @Watch('gameFilesPath')
    onGameFilesPathUpdate(event) {
        if (!!event) {
            const { target: { files } } = event;
            this.gamefilesuploaded.emit({
                files
            });
        } else {
            this.gameState = { ...this.gameState, ...{ gameBannerPath: this.gameBannerPath } }
        }
    }

    @Event() bannerfileselected: EventEmitter;
    @Event() iconimageselected: EventEmitter;
    @Event() gamefilesuploaded: EventEmitter;
    @Event() gamesubmitted: EventEmitter;

    componentWillLoad() {
        this.onGameCategoryChange(undefined);
        this.onGameDescriptionChange(undefined);
        this.ongameDeveloperChange(undefined);
        this.onGameTitleChange(undefined);
        this.onIsHTMLGameChange(undefined);
    }

    async onSubmit() {
        this.gamesubmitted.emit(this.gameState);
    }

    render() {
        return <Host>
            <div class="game-uploader-form-container">
                <label htmlFor="gameTitle">Title</label>
                <input type='text'
                    name='gameTitle'
                    onInput={(event) => this.onGameTitleChange(event)}
                    value={this.gameState.gameTitle} />

                <label htmlFor="developer">Developer</label>
                <input type='text'
                    name='developer'
                    onInput={(event) => this.ongameDeveloperChange(event)}
                    value={this.gameState.gameDeveloper} />

                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    onInput={(event) => this.onGameDescriptionChange(event)}
                    value={this.gameState.gameDescription}></textarea>

                <label htmlFor="gameCategory">Category</label>
                <select
                    onInput={(event) => this.onGameCategoryChange(event)}
                >
                    <option disabled >Choose a category</option>
                    {
                        this.categories.map(({ text, value, selected }) => <option selected={selected} value={value}>{text}</option>)
                    }
                </select>

                <div class="">
                    <label htmlFor="isHTML">HTML Game</label>
                    <input
                        type='checkbox'
                        onChange={(event) => this.onIsHTMLGameChange(event)}
                        name='isHTML'
                        checked={this.gameState.isHTMLGame} />
                </div>

                <label htmlFor="gameBannerPath">Game Banner</label>
                <input
                    type='file'
                    name='gameBannerPath'
                    onChange={(event) => this.onGameBannerPath(event)} />

                <label htmlFor="gameIconPath">Game Icon</label>
                <input
                    type='file'
                    name='gameIconPath'
                    onInput={(event) => this.onGameIconPathUpdate(event)} />

                <button onClick={() => this.onSubmit()}>Submit Game</button>

            </div>
        </Host>
    }
}