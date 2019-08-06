import React from 'react'; 


class Booking extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            start_date: undefined, 
            end_date: undefined, 
            user_id: 0, 
            listing_id: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        debugger
        this.setState({[user_id]: this.props.user.id})
        this.setState({[listing_id]: this.props.listing.id})
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const booking = Object.assign({}, this.state);
        this.props.processForm(booking);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value})
        }
    }



    render () {
        return(
            <>
                <div>
                    <form>
                        <label>Start Date
                            <input type="date" onChange={this.update("start_date")} value={this.state.start_date}/>
                        </label>
                        <label>End Date
                            <input type="date" onChange={this.update("end_date")} value={this.state.end_date}/>
                        </label>
                        <input type="submit" value="Reserve"/>
                    </form>

                </div>
            </>
        )
    }


}



export default Booking; 