import headerLogo from "../images/airbnb-header-logo.png"

/**
 * @file Header.js
 * @author 0xChristopher
 * @brief This file builds and returns the header component.
 */

/**
 * @brief The Header() function builds the page header.
 * @return Returns the header to be added to the page
 */
function Header()
{
    return (
        <header className="header">
            <img src={headerLogo} alt="airbnb-header-logo" className="header--logo" />
        </header>
    )
}

export default Header