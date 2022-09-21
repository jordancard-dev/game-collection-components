export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/Game Player',
};

const Template = (args) => `<gux-game-player 
                                unity-loader-path=${args.path}>
                            </gux-game-player>`;

export const GamePlayerExample = Template.bind({});
GamePlayerExample.args = {
    path: 'https://dlj16cutwlmlj.cloudfront.net/build-0.0.0/Build/UnityLoader.js',
};