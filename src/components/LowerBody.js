import Card from "./Card"
import cardData from "../data"

/**
 * @file LowerBody.js
 * @author 0xChristopher
 * @brief This file builds and returns the 'LowerBody' or what could be considered 'below the fold'. It
 *      handles everything below the 'UpperBody' component all the way down to the footer component in this
 *      case.
 */

/**
 * @brief The LowerBody() function builds the LowerBody section of the webpage.
 * @returns Returns the LowerBody element
 */
function LowerBody()
{
    const cards = cardData.map(card => {
        return <Card 
            key={card.id}               // Unique key value per card being passed in to each component
            {...card}                   // Spread props into each component
        />
    })

    return (
        <section className="lower-body">
            <div className="card-carosel">
                {cards}
            </div>
        </section>
    )
}

export default LowerBody