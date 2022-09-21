import { Component, Prop, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'gux-game-player',
  styleUrl: 'gux-game-player.scss',
  shadow: false,
})
export class GamePlayer {

  @Prop() unityLoaderPath: string = '';

  componentWillLoad() {

  }

  componentDidLoad() {
    const script = document.createElement('SCRIPT')
    script.setAttribute('src', this.unityLoaderPath);
    script.setAttribute('async', '')
    script.setAttribute('defer', '')
    script.onload = () => {
      const { UnityLoader } = window as any;
      console.log('her')
      UnityLoader.instantiate("unityContainer", "https://dlj16cutwlmlj.cloudfront.net/build-0.0.0/Build/build-0.0.0.path.json", { onProgress: () => { console.log('progress') } });
    }
    document.body.appendChild(script)
  }
  render() {
    return <div>
      <div id="unityContainer">{this.unityLoaderPath}</div>
    </div>;
  }
}
