const ProductsContext = React.createContext({
    products: [{
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
      }],
      toggleFav: () => {}
}) ;

export default props => {

    const [productsList, setProductsList] = useState([{
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
      }])

const toggleFavorite = productId => {
    setProductsList(currentProdList => {
        const prodIndex = state.products.findIndex(
            p => p.id === action.productId
          );
          const newFavStatus = !state.products[prodIndex].isFavorite;
          const updatedProducts = [...state.products];
          updatedProducts[prodIndex] = {
            ...state.products[prodIndex],
            isFavorite: newFavStatus
          };
    })
}
    return (
        <ProductsContext.Provider value={{products: productsList, toggleFav: toggleFavorite}}>
            {props.children}
        </ProductsContext.Provider>
    )
}