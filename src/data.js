import star from "./images/star.png"
import card1 from "./images/card1.png"
import card2 from "./images/card2.png"
import card3 from "./images/card3.png"
import card4 from "./images/card4.png"

/**
 * @file data.js
 * @author 0xChristopher
 * @brief This file holds the cardData object array, which holds card specific information to be
 *      displayed for each experience on the page.
 */

/** 
 * @brief The cardData object array for storing card data
 * @param id Unique card ids
 * @param cardImage Primary card image
 * @param star Star image for rating
 * @param stats JS object to hold card stats
 * @param rating Current experience rating
 * @param reviewCount Number of reviews of a given experience
 * @param location Where the experience takes place
 * @param title The title of the experience
 * @param price The starting price per person for the experience
 * @param openSpots The number of remaining spots
 */
const cardData = [
    {
        id: 0,
        cardImage: card1,
        star: star,
        stats: 
        {
            rating: 5.0,
            reviewCount: 6
        },
        location: "USA",
        title: "Tropical Vacation",
        price: 138,
        openSpots: 0
    },
    {
        id: 1,
        cardImage: card2,
        star: star,
        stats: 
        {
            rating: 4.9,
            reviewCount: 28
        },
        location: "USA",
        title: "Modern Getaway",
        price: 187,
        openSpots: 15
    },
    {
        id: 2,
        cardImage: card3,
        star: star,
        stats: 
        {
            rating: 5.0,
            reviewCount: 70
        },
        location: "Online",
        title: "Learn a new instrument",
        price: 49,
        openSpots: 45
    },
    {
        id: 3,
        cardImage: card4,
        star: star,
        stats: 
        {
            rating: 4.7,
            reviewCount: 48
        },
        location: "USA",
        title: "Explore somewhere new",
        price: 19,
        openSpots: 22
    }
]

export default cardData