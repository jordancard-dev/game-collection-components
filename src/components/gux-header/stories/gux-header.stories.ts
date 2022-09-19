export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Pages/Header',
};

const Template = (args) => `<gux-header header-title=${args.title} ></gux-header>`;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Game Collection Test Name'
};