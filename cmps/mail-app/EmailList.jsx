
import { EmailPreview } from './EmailPreview.jsx'
export function EmailList({ emails }) {

    return (
        <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">From</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Time</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emails.map(email =>
                            <tr key={email.id}>
                                <th scope="row">{email.from}</th>
                                <td>{email.subject}</td>
                                <td>{formatMailTime(email.sentAt)}</td>
                                <td><button type="button" className="btn btn-labeled btn-danger"><i class="fa fa-trash"></i></button> <span className="fa fa-star"></span></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>

    )
}

function formatMailTime(unixTime) {
    const dateObject = new Date(unixTime);
    const humanDateFormat = dateObject.toLocaleString();
    return humanDateFormat;

}
