import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if(!token){
      return;
    }
    if(token === 'EXPIRED'){
      submit(null, {action: '/logout', method: 'POST'});
      return;
    }

    const tokenDuration = getTokenDuration();
    setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'}, tokenDuration);
    }, timeout);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
