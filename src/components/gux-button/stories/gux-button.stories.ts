export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/Button',
};

const Template = (args) => `<gux-button button-text="${args.buttonText}"></gux-button>`;

export const Primary = Template.bind({});
Primary.args = {
    buttonText: 'PRIMARY'
};