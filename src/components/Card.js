/**
 * @file Card.js
 * @author 0xChristopher
 * @brief This file builds each experience card component based on the props passed into it.
 */

/**
 * @brief The Card() function builds a card element.
 * @returns Returns a card element
 */
function Card(props)
{
    let badgeText               // Stores card badge text when necessary

    // Check if card needs a badge
    if (props.openSpots === 0)
        badgeText = "SOLD OUT"
    else if (props.location === "Online")
        badgeText = "ONLINE"
    else badgeText = ""

    return (
        <div className="card">
            {/* Card image and badge */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.cardImage} alt="card1" className="card--image" />
            
            {/* Card reviews and rating section */}
            <section className="card--reviews">
                <img src={props.star} alt="star" className="card--reviews--star" />
                <p className="card--reviews--rating">{props.stats.rating}</p>
                <p className="card--reviews--count-location">({props.stats.reviewCount}) - 
                    {props.location}</p>
            </section>

            {/* Card title and info section */}
            <section className="card--info">
                <p className="card--info--title">{props.title}</p>
                <div className="card--info--rate">
                    <p className="card--info--rate1">From ${props.price}</p>
                    <p className="card--info--rate2">/ person</p>
                </div>
            </section>
        </div>
    )
}

export default Card