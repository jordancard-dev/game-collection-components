import { Component, Prop, h, State, Watch, Host } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
    tag: 'gux-page',
    styleUrl: 'gux-page.scss',
    shadow: false,
})
export class GamePage {
    @Prop() pageTitle: string;
    @Prop() showSidebar: boolean;

    @State() titleState: string;
    @State() showSidebarState: boolean;

    constructor() {

    }

    @Watch('pageTitle')
    setPageTitle() {
        this.titleState = this.pageTitle;
    }

    @Watch('showSidebar')
    setShowSidebar() {
    }

    componentWillLoad() {
        this.setPageTitle();
        this.setShowSidebar();
    }

    componentDidLoad() {

    }

    render() {
        return <Host>

            <div class="row">
                {
                    this.showSidebarState ??
                    <div class="side">
                        <h2>About Me</h2>
                        <h5>Photo of me:</h5>
                        <div class="fakeimg" style={{ 'height': '200px' }}>Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                        <h3>More Text</h3>
                        <p>Lorem ipsum dolor sit ame.</p>
                        <div class="fakeimg" style={{ 'height': '60px' }}>Image</div>
                        <div class="fakeimg" style={{ 'height': '60px' }}>Image</div>
                        <div class="fakeimg" style={{ 'height': '60px' }}>Image</div>
                    </div>
                }
                <div class="main">
                    <slot name='mainContent'>

                    </slot>
                </div>
            </div>

            <div class="footer">
                <h2>Footer</h2>
            </div>
        </Host>
    }
}
