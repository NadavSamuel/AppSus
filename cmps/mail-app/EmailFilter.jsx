export class EmailFilter extends React.Component {
    state = {
        filterBy: ''
    }
    componentDidMount() {
        const filterBy = new URLSearchParams(this.props.location.search).get('filterBy') || ''
        this.setState({ filterBy }, () => this.props.onFilter(this.state.filterBy))
    }

    handleChange = ({ target }) => {
        this.setState({ filterBy: target.value }, () => this.props.onFilter(this.state.filterBy))
    }

    render() {
        return <section className="email-filter item1">
            <input value={ this.state.filterBy } type="text" placeholder="Search mails by subject"
                onChange={ this.handleChange } />
        </section >
    }
}