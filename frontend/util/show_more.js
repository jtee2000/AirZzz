import React from 'react';

export const showMore = (body, id) => {

    function helperfunc() {
        debugger
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn")
        if(dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read More";
            moreText.style.display = "none";
    
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read Less";
            moreText.style.display = "inline";
        }
    }

    return (
        <>
        <p>
         {body.split(0,200)}<span id="dots">...</span><span id="more">{body.split(200, body.length)}</span>
         </p>
         <button onClick={helperfunc} id="myBtn">Read more</button>
        </>
    )

}