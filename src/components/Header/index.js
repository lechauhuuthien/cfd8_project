import React, { useEffect } from 'react'
import DropdownAccount from '../DropdownAccount'
import MiniCart from '../MiniCart'
import SearchBar from '../SearchBar'
// import Logo from "../../assets/icons/logo.svg";

export default function Header() {
    const handleSearch = (keyword) => {
        /*---------------call API with keyword---------------*/
    }

    return (
        <div className='header'>
            <div className="header-left">
                {/* <img src={Logo} alt="" /> */}
            </div>
            <div className="header-middle">
                <SearchBar handleSearch={handleSearch} />
            </div>
            <div className="header-right">
                <DropdownAccount/>
                <MiniCart />
            </div>
        </div>
    )
}
