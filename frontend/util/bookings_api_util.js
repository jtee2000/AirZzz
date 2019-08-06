export const createBooking = (booking) => {
    return({
        method: "POST", 
        url: "api/bookings", 
        data: {booking}
    })
}

