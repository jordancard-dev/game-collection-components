import { Component, Host, h } from "@stencil/core";

@Component({
    tag: 'gux-nav',
    styleUrl: 'gux-nav.scss'
})
export class GamePageNavigation {
    render() {
        return <Host>
            <div class="navbar">
                <slot name="links" />
            </div>
        </Host >
    }
}