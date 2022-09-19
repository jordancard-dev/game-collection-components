/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GuxButton {
        "buttonText": string;
    }
    interface GuxContentCard {
    }
    interface GuxHeader {
        "headerTitle": string;
    }
    interface GuxNav {
    }
    interface GuxPage {
        "pageTitle": string;
        "showSidebar": boolean;
    }
    interface GuxSidebar {
    }
    interface WebPlayer {
        "unityLoaderPath": string;
    }
}
declare global {
    interface HTMLGuxButtonElement extends Components.GuxButton, HTMLStencilElement {
    }
    var HTMLGuxButtonElement: {
        prototype: HTMLGuxButtonElement;
        new (): HTMLGuxButtonElement;
    };
    interface HTMLGuxContentCardElement extends Components.GuxContentCard, HTMLStencilElement {
    }
    var HTMLGuxContentCardElement: {
        prototype: HTMLGuxContentCardElement;
        new (): HTMLGuxContentCardElement;
    };
    interface HTMLGuxHeaderElement extends Components.GuxHeader, HTMLStencilElement {
    }
    var HTMLGuxHeaderElement: {
        prototype: HTMLGuxHeaderElement;
        new (): HTMLGuxHeaderElement;
    };
    interface HTMLGuxNavElement extends Components.GuxNav, HTMLStencilElement {
    }
    var HTMLGuxNavElement: {
        prototype: HTMLGuxNavElement;
        new (): HTMLGuxNavElement;
    };
    interface HTMLGuxPageElement extends Components.GuxPage, HTMLStencilElement {
    }
    var HTMLGuxPageElement: {
        prototype: HTMLGuxPageElement;
        new (): HTMLGuxPageElement;
    };
    interface HTMLGuxSidebarElement extends Components.GuxSidebar, HTMLStencilElement {
    }
    var HTMLGuxSidebarElement: {
        prototype: HTMLGuxSidebarElement;
        new (): HTMLGuxSidebarElement;
    };
    interface HTMLWebPlayerElement extends Components.WebPlayer, HTMLStencilElement {
    }
    var HTMLWebPlayerElement: {
        prototype: HTMLWebPlayerElement;
        new (): HTMLWebPlayerElement;
    };
    interface HTMLElementTagNameMap {
        "gux-button": HTMLGuxButtonElement;
        "gux-content-card": HTMLGuxContentCardElement;
        "gux-header": HTMLGuxHeaderElement;
        "gux-nav": HTMLGuxNavElement;
        "gux-page": HTMLGuxPageElement;
        "gux-sidebar": HTMLGuxSidebarElement;
        "web-player": HTMLWebPlayerElement;
    }
}
declare namespace LocalJSX {
    interface GuxButton {
        "buttonText"?: string;
    }
    interface GuxContentCard {
    }
    interface GuxHeader {
        "headerTitle"?: string;
    }
    interface GuxNav {
    }
    interface GuxPage {
        "pageTitle"?: string;
        "showSidebar"?: boolean;
    }
    interface GuxSidebar {
    }
    interface WebPlayer {
        "unityLoaderPath"?: string;
    }
    interface IntrinsicElements {
        "gux-button": GuxButton;
        "gux-content-card": GuxContentCard;
        "gux-header": GuxHeader;
        "gux-nav": GuxNav;
        "gux-page": GuxPage;
        "gux-sidebar": GuxSidebar;
        "web-player": WebPlayer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gux-button": LocalJSX.GuxButton & JSXBase.HTMLAttributes<HTMLGuxButtonElement>;
            "gux-content-card": LocalJSX.GuxContentCard & JSXBase.HTMLAttributes<HTMLGuxContentCardElement>;
            "gux-header": LocalJSX.GuxHeader & JSXBase.HTMLAttributes<HTMLGuxHeaderElement>;
            "gux-nav": LocalJSX.GuxNav & JSXBase.HTMLAttributes<HTMLGuxNavElement>;
            "gux-page": LocalJSX.GuxPage & JSXBase.HTMLAttributes<HTMLGuxPageElement>;
            "gux-sidebar": LocalJSX.GuxSidebar & JSXBase.HTMLAttributes<HTMLGuxSidebarElement>;
            "web-player": LocalJSX.WebPlayer & JSXBase.HTMLAttributes<HTMLWebPlayerElement>;
        }
    }
}
