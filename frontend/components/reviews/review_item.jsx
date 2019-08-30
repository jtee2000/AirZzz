import React from 'react'; 


function ReviewItem({review, listing}) {
    debugger
    const date = new Date(review.created_at)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div>
            <p>{listing.name}</p>
            <p>{months[date.getMonth()]} {date.getFullYear()}</p>
            {review.body}
            <div className="listing-linebreak"></div>
        </div>
    )
}



export default ReviewItem; 