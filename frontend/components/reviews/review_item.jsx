import React from 'react'; 


function ReviewItem({review, listing, verify}) {
    debugger
    const date = new Date(review.created_at)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div>
            <p className="review-name">{listing.name}</p>
            <p className="review-date">{months[date.getMonth()]} {date.getFullYear()}</p>
            <p className="review-body">{review.body}</p>
            <div className={`listing-linebreak ${verify}`} ></div>
        </div>
    )
}



export default ReviewItem; 