import { getBookings, getVenues, getBands } from "./database.js"

// Get copy of state for use in this module
const bookings = getBookings()
const venues = getVenues()
const bands = getBands()


// Function whose responsibility is to find the band for the booking
const findBand = (booking, allBands) => {
    let bookingBand = null

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookingBand = band
        }
    }

    return bookingBand
}

// Function whose responsibility is to find the Venue for an booking
const findVenue = (booking, allVenues) => {
    let bookingVenue = null

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue
        }
    }

    return bookingVenue
}

export const Bookings = () => {
    let bookingHTML  = "<ul>"


    for (const booking of bookings) {
        const venue = findVenue(booking, venues)
        const band = findBand(booking, bands)

        bookingHTML += `
        <li>${band.name} are playing at ${venue.name} on ${booking.date}.</li>`
    }

    bookingHTML += "</ul>"

    return bookingHTML
}


