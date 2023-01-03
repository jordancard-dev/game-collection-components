import { Component, Host, h, State, Prop, Watch, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: 'gux-content-card',
    styleUrl: 'gux-content-card.scss'
})
export class ContentCard {
    @State() descState: string;
    @State() titleState: string;
    @State() imageUrlState: string;

    @Prop() titleName: string = '';
    @Watch('titleName')
    onTitleChange() {
        this.titleState = this.titleName;
    }

    @Prop() description: string = 'Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.';
    @Watch('description')
    onDescriptionChange() {
        this.descState = this.description
    }

    @Prop() imageUrl: string = 'https://picsum.photos/id/1011/800/450';
    @Watch('imageUrl')
    onImageChange() {
        this.imageUrlState = this.imageUrl
    }

    @Event() moreClick: EventEmitter;

    componentWillLoad() {
        this.onTitleChange();
        this.onDescriptionChange()
        this.onImageChange();
    }

    onMoreClick() {
        this.moreClick.emit();
    }

    render() {
        return (
            <Host>
                <section class="articles">
                    <article>
                        <div class="article-wrapper">
                            <figure>
                                {
                                    (!!this.imageUrlState) ?
                                        <img src={this.imageUrlState}></img>
                                        :
                                        <div class="fakeimg" style={{ 'height': '200px' }}>Image</div>
                                }
                            </figure>
                            <div class="article-body">
                                <h2>{this.titleState}</h2>
                                <p>
                                    {this.descState}
                                </p>
                                <slot name="read-more">
                                </slot>
                            </div>
                        </div>
                    </article>
                </section>

            </Host>)
    }
}