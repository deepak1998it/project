export const Signout = () => {
    localStorage.removeItem('user_login')
    window.location.reload();
}