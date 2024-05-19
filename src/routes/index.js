import Header from '../template/Header';
import Home from '../pages/Home';
import Rockets from '../pages/Rockets';
import Error404 from '../pages/Error404'

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';

const routes = {
    '/': Home,
    '/:id': Rockets,
    '/contact':"Contact"
};

const router = async () => {
    const header = null ||  document.getElementById('header');
    const content = null ||  document.getElementById('content');

    header.innerHTML= await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

};

export default router;