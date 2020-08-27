const { Link } = ReactRouterDOM
export function EmailPreview({ email }) {
    return (
        <tr>
            <th scope="row">{email.from}</th>
            <td>{email.subject}</td>
            <td>{formatMailTime(email.sentAt)}</td>
            <td><Link to={`/mail/${email.id}`}>
                <button  type="button" className="btn btn-primary"><i class="fa fa-envelope" aria-hidden="true"></i></button></Link> <button type="button" className="btn btn-labeled btn-danger"><i className="fa fa-trash"></i></button> <span className="fa fa-star"></span></td>
        </tr>
    )
}

function formatMailTime(unixTime) {
    const dateObject = new Date(unixTime);
    const humanDateFormat = dateObject.toLocaleString();
    return humanDateFormat;

}
