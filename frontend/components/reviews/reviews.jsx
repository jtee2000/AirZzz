import React from 'react'; 
import Rating from 'react-rating';

export default class Review extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            accuracy: 0, 
            communication: 0, 
            cleanliness: 0, 
            location: 0, 
            check_in: 0, 
            value: 0,
        }
        this.updateTextarea = this.updateTextarea.bind(this);
        this.updateRating = this.updateRating.bind(this); 
        
    }

    updateTextarea(e) {
        this.setState({"body": e.target.value}); 
    }


    handleSubmit() {
        const {body, rating} = this.state; 
        this.props.createReview({
            body, 
            rating
        })
    }

    updateRating(rating) {
        return (value) => {
            this.setState({[rating]: value});
        }
        
    }

    render() {
        return(
            <div className="review-form-container">
                <div className="x-out">
                    <img className="x" onClick={this.props.closeModal} src={x_img} alt="" />
                </div>
                <h1 className="reviews-heading">Write a Review</h1>
                <div className="reviews-container">
                    <div className="reviews-secondary-container">
                        <h1>Accuracy</h1>
                        <Rating
                            emptySymbol={<i className="far fa-star blue-stars"></i>}
                            initialRating={this.state.accuracy}
                            fullSymbol={<i className="fas fa-star blue-stars"></i>}
                            onClick={this.updateRating("accuracy")}
                        />
                    </div>
                    <div className="reviews-secondary-container">
                        <h1>Communication</h1>
                        <Rating
                            emptySymbol={<i className="far fa-star blue-stars"></i>}
                            initialRating={this.state.communication}
                            fullSymbol={<i className="fas fa-star blue-stars"></i>}
                            onClick={this.updateRating("communication")}
                        />
                    </div>
                    <div className="reviews-secondary-container">
                        <h1>Cleanliness</h1>
                        <Rating
                            emptySymbol={<i className="far fa-star blue-stars"></i>}
                            initialRating={this.state.cleanliness}
                            fullSymbol={<i className="fas fa-star blue-stars"></i>}
                            onClick={this.updateRating("cleanliness")}
                        />
                    </div>
                    <div className="reviews-secondary-container">
                        <h1>Location</h1>
                        <Rating
                            emptySymbol={<i className="far fa-star blue-stars"></i>}
                            initialRating={this.state.location}
                            fullSymbol={<i className="fas fa-star blue-stars"></i>}
                            onClick={this.updateRating("location")}
                        />
                    </div>
                    <div className="reviews-secondary-container">
                        <h1>Check-In</h1>
                        <Rating
                            emptySymbol={<i className="far fa-star blue-stars"></i>}
                            initialRating={this.state.check_in}
                            fullSymbol={<i className="fas fa-star blue-stars"></i>}
                            onClick={this.updateRating("check_in")}
                        />
                    </div>
                    <div className="reviews-secondary-container">
                        <h1>Value</h1>
                        <Rating
                            emptySymbol={<i className="far fa-star blue-stars"></i>}
                            initialRating={this.state.value}
                            fullSymbol={<i className="fas fa-star blue-stars"></i>}
                            onClick={this.updateRating("value")}
                        />
                    </div>
                </div>
                <textarea placeholder="Write review here" cols="30" rows="10" onChange={this.updateTextarea} className="review-input"></textarea>
                <div className="review-button-flex">
                    <button id="override" className="reserve-button">Submit</button>
                </div>
            </div>
        )
    }



}