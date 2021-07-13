export default function ({app, route, redirect}) {
    if (route.path === '/admin') {
        if (app.$fire.auth.currentUser) {
            //no redirect
            // console.log('user', app.$fire.auth.currentUser);
        } else {
            return redirect('/admin/signin');
            // return redirect('/');
        }
    }
    // if (route.path !== '/auth/signin') {
    //     // console.log('fire', app.$fire)
    //     if (!app.$fire.auth.currentUser) {
    //         return redirect('/auth/signin')
    //     }
    // } else if (route.path === '/auth/signin') {
    //     if (!app.$fire.auth.currentUser) {
    //         //no redirect
    //     } else {
    //         return redirect('/');
    //     }
    // }
}