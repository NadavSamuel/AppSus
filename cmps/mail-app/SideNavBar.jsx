const { Link } = ReactRouterDOM
export function SideNavBar() {
    return (
        <div>
            <div className="sidebar">
                <Link to={`/mail/compose`}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
                </Link>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <div className="content">
            </div>
        </div>
    )
}