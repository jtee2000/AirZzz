import React from 'react';

export const showMore = (body, id) => {
    function helperfunc() {
        var ellipse = document.getElementById("ellipse");
        var moreText = document.getElementById("more");
        var buttonText = document.getElementById("myBtn")
        var icon = document.getElementById("icon-1")
        if(ellipse.style.display === "none") {
            icon.removeAttribute("class");
            icon.setAttribute("class", "fas fa-chevron-down");
            ellipse.style.display = "inline";
            buttonText.innerHTML = "Read more about this space";
            moreText.style.display = "none";
    
        } else { icon.removeAttribute("class");
            icon.setAttribute("class", "fas fa-chevron-up");
            ellipse.style.display = "none";
            buttonText.innerHTML = "Hide";
            moreText.style.display = "inline";
        }
    }

        return (
            <>
            <p>
             {body.slice(0,200)}<span id="ellipse">...</span><span id="more">{body.slice(200, body.length)}</span>
             </p>
             <br></br>
             <div className="show-more-btn-container">
                <button className="show-more-button"onClick={helperfunc} className="show-more-button">
                    <i className="fas fa-chevron-down" id="icon-1"></i>
                    <p id="myBtn">Read more about this space</p>
                    
                </button>
             </div>
            </>
        )
}