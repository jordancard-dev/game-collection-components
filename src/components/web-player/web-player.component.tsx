import { Component, Prop, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'web-player',
  styleUrl: 'web-player.css',
  shadow: false,
})
export class WebPlayer {

  @Prop() unityLoaderPath: string = 'https://dlj16cutwlmlj.cloudfront.net/build-0.0.0/Build/UnityLoader.js';
  constructor() {

  }



  componentWillLoad() {
    console.log('Here')


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
    console.log(document.body)
    document.body.appendChild(script)
  }
  render() {
    return <div>
      <div id="unityContainer">{this.unityLoaderPath}</div>
    </div>;
  }
}
