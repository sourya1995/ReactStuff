import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async() => [{id: 'p1', title: 'First Post'}, {id: 'p2', title: 'Second Post'}],
        });
        render(<Async />);
        const listItemElements = await screen.findAllByRole('listitem'); //returns promise
        expect(listItemElements).not.toHaveLength(0);
    });
})