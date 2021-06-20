import React from 'react';
import Link from './Link'

const Header =()=>{
    return (//this component changes each url according to what the user presses in the header.
        <div className="ui secondary pointing menu">
            
            <Link href="/Tlush" className="item">
                Tlush
            </Link>
            <Link href="/106" className="item">
                106
            </Link>
            <Link href="/161" className="item">
                161
            </Link>
            <Link href="/Otzar" className="item">
                Otzar
            </Link>
            <Link href="/Permissions" className="item">
                Permissions
            </Link>
            <Link href="/Python" className="item">
                Python
            </Link>
        </div>
    );
};

export default Header;