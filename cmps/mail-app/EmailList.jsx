
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
                                <EmailPreview email={email} key={email.id}>
                                </EmailPreview>
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
