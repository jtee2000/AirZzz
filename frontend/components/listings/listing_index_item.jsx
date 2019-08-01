import React from 'react'; 


class ListingIndexItem extends React.Component {


    render() {
        return (
            <>  
                <li className="listing-container">
                    <img className="listing-main-img" src="https://cdn.vox-cdn.com/thumbor/pe-W7fi9ELg9WZfEjkKAzr2VFa4=/0x0:4223x2815/1200x800/filters:focal(1775x1071:2449x1745)/cdn.vox-cdn.com/uploads/chorus_image/image/62616742/usa_today_10283452.0.jpg"/>
                    <div className="listing-details-container">
                        <p className="list-loc-ele">{this.props.listing.title.toUpperCase()}</p>
                        <p className="list-desc-ele">{this.props.listing.description}</p>
                        <p className="list-price-ele">${this.props.listing.price}/night</p>
                        <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                    </div>
                </li>
            </>
        )
    }

}

export default ListingIndexItem; 