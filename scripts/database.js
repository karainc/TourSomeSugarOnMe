const database = {
    bands: [{
        id: 1,
        name: "Dat-a-Bass",
        genre: "Techno",
        yearFormed: 2020,
        members: 5

    }, {
        id: 2,
        name: "Loop D Loop",
        genre: "R & B",
        yearFormed: 2009,
        members: 3

    }, {
        id: 3,
        name: "Function Dysfunction",
        genre: "Metal",
        yearFormed: 2010,
        members: 4

    }, {
        id: 4,
        name: "Iterator Nation",
        genre: "Rock",
        yearFormed: 1989,
        members: 3

    }, {
        id: 5,
        name: "Jump Ship",
        genre: "Alternative",
        yearFormed: 2000,
        members: 5

    }, {
        id: 6,
        name: "Index Rex",
        genre: "Classic",
        yearFormed: 1999,
        members: 4

    }, {
        id: 7,
        name: "HTML Hell",
        genre: "Heavy Metal",
        yearFormed: 2006,
        members: 3

    }, {
        id: 8,
        name: "Python Don",
        genre: "County",
        yearFormed: 2001,
        members: 6

    }, {
        id: 9,
        name: "For If Else",
        genre: "Pop",
        yearFormed: 2002,
        members: 5

    }, {
        id: 10,
        name: "Git Init",
        genre: "Techno",
        yearFormed: 2022,
        members: 4

     }],

    bookings: [{
        id: 1,
        venueId: 1,
        bandId: 1,
        date: "04/01/2023"

    }, {id: 2,
        venueId: 4,
        bandId: 8,
        date: "04/09/2023"

    }, {id: 3,
        venueId: 10,
        bandId: 9,
        date: "04/22/2023"

    }, {id: 4,
        venueId: 9,
        bandId: 7,
        date: "05/01/2023"

    }, {id: 5,
        venueId: 8,
        bandId: 6,
        date: "05/07/2023"

    }, {id: 6,
        venueId: 7,
        bandId: 5,
        date: "06/01/2023"

    }, {id: 7,
        venueId: 6,
        bandId: 4,
        date: "07/01/2023"

    }, {id: 8,
        venueId: 5,
        bandId: 3,
        date: "08/01/2023"

    }, {id: 9,
        venueId: 4,
        bandId: 2,
        date: "05/19/2023"

    }, {id: 10,
        venueId: 3,
        bandId: 1,
        date: "06/16/2023"

    }, {id: 11,
        venueId: 2,
        bandId: 10,
        date: "07/11/2023"

    }, {id: 12,
        venueId: 6,
        bandId: 2,
        date: "09/01/2023"

    }

],

    venues: [{
        id: 1, name: "The Studio", address: "Charleston, WV", sqFoot: "750 sqft", maxOccupants: 60
    }, 
    {
        id: 2, name: "The Tea Cup", address: "New York, NY", sqFoot: "400 sqft", maxOccupants: 80
    }, 
    {
        id: 3, name: "Oz", address: "Hollywood, CA", sqFoot: "600 sqft", maxOccupants: 380
    }, 
    {
        id: 4, name: "The Bridge", address: "Jacksonville, FL", sqFoot: "500 sqft", maxOccupants: 220
    }, 
    {
        id: 5, name: "The Ship", address: "Austin, TX", sqFoot: "800 sqft", maxOccupants: 120
    }, 
    {
        id: 6, name: "The Tunnel", address: "Medina, CO", sqFoot: "760 sqft", maxOccupants: 180
    }, 
    {
        id: 7, name: "The Lily Pad", address: "New Orleans, LA", sqFoot: "900 sqft", maxOccupants: 340
    }, 
    {
        id: 8, name: "The Field", address: "Cleveland, OH", sqFoot: "600 sqft", maxOccupants: 220
    }, 
    {
        id: 9, name: "The Forest", address: "Denver, CO", sqFoot: "460 sqft", maxOccupants: 260
    }, 
    {
        id: 10, name: "The Barnyard", address: "Farmville, PA", sqFoot: "525 sqft", maxOccupants: 200
    }

    ]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}



