import { initStore } from "./store";

const configureStore = () => {
    const actions = {
        TOGGLE_FAV: (curState, productId) => {
            const prodIndex = state.products.findIndex(
                p => p.id === action.productId
              );
              const newFavStatus = !curState.products[prodIndex].isFavorite;
              const updatedProducts = [...curState.products];
              updatedProducts[prodIndex] = {
                ...state.products[prodIndex],
                isFavorite: newFavStatus
              };
            return { products: updatedProducts };
        }
    };

    initStore(actions, {
        products: {}
    })
}


export default configureStore()