
const isAuthenticatedGuard = async (to, from, next) => {

    console.log({to, from, next})

    return new Promise(() => {
        const random = Math.random() * 100
        if (random > 50) {
            console.log('Auntenticado::isAuthenticatedGuard')
            next()
        } else {
            console.log(random,'Bloquedao por el isAuthenticatedGuard')
            next({name: 'pokemon-home'})
        }
    })

}

export default isAuthenticatedGuard
