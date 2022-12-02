import headerImage from "../images/airbnb-upper-body.png"

/**
 * @file UpperBody.js
 * @author 0xChristopher
 * @brief This file builds and returns the 'UpperBody' or what could be considered 'above the fold'. It
 *      handles everything above the 'LowerBody' component all the way up to the header component in this
 *      case.
 */

/**
 * @brief The UppderBody() function builds the UpperBody section of the webpage.
 * @returns Returns the UpperBody element
 */
function UpperBody()
{
    return (
        <section className="upper-body">
            <img src={headerImage} alt="airbnb-header" className="upper-body--image" />
            <h1 className="upper-body--header">Online Experiences</h1>
            <p className="upper-body--text">Join unique interactive activities led by one-of-a-kind 
                hosts--all without leaving home.</p>
        </section>
    )
}

export default UpperBody