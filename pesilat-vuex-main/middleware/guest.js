export default function ({ store, redirect }) {
    if (store.state.auth.loggedIn) {
        alert('Anda Sudah Login')
        return redirect('/')
    }
}