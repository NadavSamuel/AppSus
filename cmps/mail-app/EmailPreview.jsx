const { Link } = ReactRouterDOM

export function EmailPreview({ email, removeEmail }) {
    let mailStyle = {
        trClassName: "table-info",
        envelopeIcon: "fa fa-envelope",
        starIcon: "fa fa-star-o"
    }
    if (email.isRead) {
        mailStyle.trClassName = "table-success";
        mailStyle.envelopeIcon = "fa fa-envelope-open-o"
    }
    if (email.isStarred) {
        mailStyle.starIcon = "fa fa-star rating-star"
    }


    return (
        <tr className={mailStyle.trClassName}>
            <th scope="row">{email.from}</th>
            <td>{email.subject}</td>
            <td>{formatMailTime(email.sentAt)}</td>
            <td><Link to={`/mail/${email.id}`}>
                <button type="button" className="btn btn-primary">
                    <i className={mailStyle.envelopeIcon} aria-hidden="true"></i>
                </button></Link>
                <button type="button" className="btn btn-labeled btn-danger" onClick={() => removeEmail(email.id)}>
                    <i className="fa fa-trash"></i>
                </button>
                <button className="btn btn-warning">
                    <span className={mailStyle.starIcon}></span>
                </button>
            </td>
        </tr>
    )
}

function formatMailTime(unixTime) {
    const dateObject = new Date(unixTime);
    const humanDateFormat = dateObject.toLocaleString();
    return humanDateFormat;

}
