export default {
    title: 'Components/Game Player',
};

const Template = (args) => `<gux-game-player 
                                unity-loader-path=${args.path}
                                source=${args.source}>
                            </gux-game-player>`;

export const GamePlayerExample = Template.bind({});
GamePlayerExample.args = {
    path: 'https://dlj16cutwlmlj.cloudfront.net/build-0.0.0/Build/UnityLoader.js',
    source: 'https://dlj16cutwlmlj.cloudfront.net/build-0.0.0/Build/build-0.0.0.path.json'
};