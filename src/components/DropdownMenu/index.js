import React, { useEffect, useState } from 'react'

export default function DropdownMenu() {
    const [menuItems, setMenuItems] = useState([])

    const callAPI = () => {
        // call API
    }

    useEffect(() => {
        // callAPI()
        //     .then((result) => {
        //         setMenuItems(result)
        //     })
    }, [])
    
    return (
        <div>
            DropdownMenu
        </div>
    )
}
