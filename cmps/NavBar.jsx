const { NavLink, withRouter } = ReactRouterDOM

function _NavBar(props) {
    console.log(props.history);
    function goBack() {
        props.history.goBack()
    }
    return (
        <nav className="nav-bar">
            <NavLink exact activeClassName='active-nav' to="/">Home</NavLink>|
            <NavLink activeClassName='active-nav' to="/mail">My Mail</NavLink>|
            <NavLink activeClassName='active-nav' to="/notes">My Notes</NavLink>|
{/*             <NavLink to="/about">About</NavLink>| */}
{/*             <button onClick={ goBack }>Back</button> */}
        </nav>
    )
}
export const NavBar = withRouter(_NavBar)