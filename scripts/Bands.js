import { getBands, getBookings, getVenues } from "./database.js"

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

export const Bands = () => {
    let bandHTML = "<ul>"

    for (const band of bands) {
        bandHTML += `
        <li id="band--${band.id}">${band.name}</li>`
    }

bandHTML += "</ul>"

return bandHTML
}

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        
        const itemClicked = clickEvent.target
        
        if (itemClicked.id.startsWith("band")) {
            
            const [,bandId] = itemClicked.id.split("--")
            
            for (const band of bands) {
                if ( band.id === parseInt(bandId)) {
                  
                    
                
                window.alert(`${employee.name} has sold ${numberOfOrders}products.`)}
            }
            }
        }
        )
