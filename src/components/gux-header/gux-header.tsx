import { Component, Host, h, Prop, State, Watch } from "@stencil/core";

@Component({
    tag: 'gux-header',
    styleUrl: 'gux-header.scss'
})
export class GamePageHeader {
    @State() titleState: string = '';

    @Prop() headerTitle: string = 'Dope Gamer Boy';

    componentDidLoad() {
        this.onTitleChange();
    }

    @Watch('headerTitle')
    onTitleChange() {
        this.titleState = this.headerTitle;
    }

    render() {
        return <Host>

            <div class="header">
                <h1>{this.titleState}</h1>
                <slot name="subtitle">

                </slot>
            </div>
        </Host>
    }
}