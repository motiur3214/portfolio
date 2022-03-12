import React from 'react'
import { mapItems } from "../constants";

const NavigationDots = ({ active }) => {

    return (
        <div className='app__navigation'>
            {
                mapItems.navItems.map((item, index) => (

                    <a
                        href={`#${item}`}
                        key={item + index}
                        className="app__navigation-dot"
                        style={active === item ? { backgroundColor: '#313BAC' } : {}}
                    />

                ))
            }
        </div>
    )
}

export default NavigationDots