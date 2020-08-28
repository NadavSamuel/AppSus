export class StarButton extends React.Component {

    state = {

    }
    render() {
        let classes ="fa fa-star";
        if(!this.props.isStarred) classes +="-o"
        return (<button type="button" className="btn btn-warning">
            <i onClick={this.props.onClick} className={classes} aria-hidden="true"></i>
        </button>
        )
    }

}

