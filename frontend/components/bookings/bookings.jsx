import React from 'react'; 


class Booking extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            start_date: this.getDate(), 
            end_date: this.getDate(), 
            user_id: 0, 
            listing_id: 0,
            guests: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({user_id: this.props.user.id })
        const x = window.parseInt(this.props.listing, 10)
        this.setState({listing_id: x })
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

    getDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }
        return today = yyyy + '-' + mm + '-' + dd;
    }



    render () {
        return(
            <>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Start Date
                            <input type="date" onChange={this.update("start_date")} value={this.state.start_date || this.getDate()}/>
                        </label>
                        <label>End Date
                            <input type="date" onChange={this.update("end_date")} value={this.state.end_date || this.getDate()}/>
                        </label>
                        <input type="submit" value="Reserve"/>
                    </form>

                </div>
            </>
        )
    }


}



export default Booking; 