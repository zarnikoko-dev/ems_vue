import store from '../store/store';

export function auth({next,router}) {
    if(!store.state.auth.auth ){
        return router.push({name:'login'});
    }
    return next();
}

export function notAuth({next,router}) {
    if(store.state.auth.auth){
        return router.push({name:'dashboard'});
    }
    return next();
}