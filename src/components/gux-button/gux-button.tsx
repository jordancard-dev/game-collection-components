import { Component, Prop, h, State, Watch } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
    tag: 'gux-button',
    styleUrl: 'gux-button.scss',
    shadow: false,
})
export class GameButton {
    @Prop() buttonText: string;

    @State() buttonTextState: string;

    constructor() {

    }

    @Watch('buttonText')
    setButtonState() {
        this.buttonTextState = this.buttonText;
    }

    componentWillLoad() {
        this.setButtonState();


    }

    componentDidLoad() {

    }

    render() {
        return <button class="button primary">{this.buttonTextState}</button>;
    }
}
