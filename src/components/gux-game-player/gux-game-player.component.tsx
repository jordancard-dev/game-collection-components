import { Component, Prop, h, State, Watch, Method } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  tag: 'gux-game-player',
  styleUrl: 'gux-game-player.scss',
  shadow: false,
})
export class GamePlayer {

  private containerId: string = 'unityContainer';
  private gameInstance: any = {};

  @State() unityLoaderPathState: string;
  @State() sourceState: string;
  @State() progressState: number = 0;
  @State() gameTitleState: string = '';

  @Prop() unityLoaderPath: string = '';
  @Watch('unityLoaderPath')
  onUnityLoaderPathChange() {
    this.unityLoaderPathState = this.unityLoaderPath;
  }

  @Prop() source: string = '';
  @Watch('source')
  onSourceChange() {
    this.sourceState = this.source;
  }

  @Prop() gameTitle: string = '';
  @Watch('gameTitle')
  onGameTitleChange() {
    this.gameTitleState = this.gameTitle;
  }

  componentWillLoad() {
    this.containerId = `unity-container-${uuidv4()}`;
    this.onGameTitleChange();
    this.onUnityLoaderPathChange();
    this.onSourceChange();
  }

  componentDidLoad() {
    const { UnityLoader } = window as any;
    if (!UnityLoader) {
      const script = document.createElement('script')
      script.setAttribute('src', this.unityLoaderPath);
      script.setAttribute('async', '')
      script.setAttribute('defer', '')
      script.onload = () => {
        const { UnityLoader } = window as any;
        this.gameInstance = UnityLoader.instantiate(this.containerId, this.sourceState, { onProgress: (event, progress) => this.onGameLoadProgress(event, progress) });
      }
      document.body.appendChild(script)
    } else {
      this.gameInstance = UnityLoader.instantiate(this.containerId, this.sourceState, { onProgress: (event, progress) => this.onGameLoadProgress(event, progress) });
    }
  }

  isLoaded() {
    return this.progressState === 1;
  }

  onGameLoadProgress(gameInstance: any, progress: number) {
    console.log('loading', progress, gameInstance);
    this.progressState = progress;
  }

  @Method()
  async onSendMessage(gameObject, method, param) {
    if (!!this.gameInstance) {
      this.gameInstance.SendMessage(gameObject, method, param);
    } else {
      console.error('Game instance does not exist.')
    }
  }

  @Method()
  async onFullScreen() {
    if (!!this.gameInstance) {
      this.gameInstance.SetFullscreen(1);
    } else {
      console.error('Game instance does not exist.')
    }
  }


  render() {
    return <div>

      <div class="webgl-content">
        <div class="gux-game-container" id={this.containerId}>{this.unityLoaderPath}</div>
        {
          (!!this.isLoaded()) &&
          <div>
            <gux-button onClick={() => this.onFullScreen()} buttonText="FULLSCREEN"></gux-button>
          </div>
        }

      </div>
    </div>;
  }
}
