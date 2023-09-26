import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui-slice';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    if(isInitial){
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);


  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      <Cart />
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
