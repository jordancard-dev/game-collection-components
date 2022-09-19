import { Component, Host, h } from "@stencil/core";

@Component({
    tag: 'gux-content-card',
    styleUrl: 'gux-content-card.scss'
})
export class ContentCard {
    render() {
        return (<Host>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div class="fakeimg" style={{ 'height': '200px' }}>Image</div>
            <p>Some text..</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

        </Host>)
    }
}