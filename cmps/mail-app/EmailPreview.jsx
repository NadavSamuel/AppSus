const {Link} = ReactRouterDOM
export function EmailPreview({ email }) {
    return (
        <Link to={ `/mail/${email.id}` }>
            <article className="pet-preview">
                <h3>{ pet.name }</h3>
                <h4>Power: { pet.power }</h4>
            </article>
        </Link>
    )
}