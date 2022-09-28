import { Component, Prop, h, State, Watch, Host } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
    tag: 'gux-page',
    styleUrl: 'gux-page.scss',
    shadow: false,
})
export class GamePage {
    @State() titleState: string;
    @State() showSidebarState: boolean = false;

    @Prop() pageTitle: string;
    @Watch('pageTitle')
    setPageTitle() {
        this.titleState = this.pageTitle;
    }

    @Prop() showSidebar: boolean;
    @Watch('showSidebar')
    setShowSidebar() {

        this.showSidebarState = this.showSidebar;
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
                    !!this.showSidebarState &&
                    <div class="side">
                        <slot name='sideContent'>

                        </slot>
                    </div>
                }
                <div class={{ "main": !!this.showSidebarState, "main-no-side-bar": !this.showSidebarState }}>
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
