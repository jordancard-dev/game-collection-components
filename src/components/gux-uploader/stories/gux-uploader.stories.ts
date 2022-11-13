export default {
    title: 'Components/Game Uploader',
    parameters: {
        actions: {
            handles: [
                'bannerFileSelected',
                'iconImageSelected',
                'gameFilesUploaded',
                'gameSubmitted',
                'onchange'],
        },
    },
};

const Template = ({ gameTitle, gameDescription, gameDeveloper, gameCategory }) => `<gux-uploader 
                                game-title="${gameTitle}"
                                game-description="${gameDescription}"
                                game-developer="${gameDeveloper}"
                                game-category="${gameCategory}"
                            > 
                            </gux-uploader>`;

export const GameUploaderExample = Template.bind({});
GameUploaderExample.args = {
    gameTitle: 'DOPE ASS GAME TITLE',
    gameDescription: 'This describes the game',
    gameCategory: 'puzzle',
    gameDeveloper: 'The Intelligent Bear',
    imageFile: 'https://dlj16cutwlmlj.cloudfront.net/build-0.0.0/Build/UnityLoader.js',
    source: 'https://dlj16cutwlmlj.cloudfront.net/build-0.0.0/Build/build-0.0.0.path.json'
};