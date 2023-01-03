
export default {
    title: 'Pages/Home',
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = () => {
    return `
    <gux-page> 
        <div slot="mainContent">
            <p> 
                this is the main content
            </p>
        </div>
    </gux-page>
` };

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

