import {Bands} from "./Bands.js"
import { Bookings } from "./Bookings.js"
import { Venues } from "./Venues.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Dynamic Tours</h1>
    <article class="bookings">
        <h1>Current Bookings</h1>
        ${Bookings()}
    </article>
<article class="details">
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
  
</article>

    `
    
    mainContainer.innerHTML = applicationHTML


