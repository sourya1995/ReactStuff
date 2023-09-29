import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        render(<Async />);
        const listItemElements = await screen.findAllByRole('listitem'); //returns promise
        expect(listItemElements).not.toHaveLength(0);
    });
})