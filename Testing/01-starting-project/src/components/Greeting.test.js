describe('Greeting component', () => {
    test('renders Hello World', () => {
        render(<Greetings />);
        const helloWorldElement = screen.getByText('Hello World', {exact: true});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if the button was NOT clicked', () => {
        render(<Greeting />);
        const paragraphElement = screen.getByText('Good to see you', { exact: false});
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders Changed! if button was clicked', () => {
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    })
})
