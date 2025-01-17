import '../css/Header.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import SidePanel from './sidepanel';
import { FaBars } from 'react-icons/fa';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidePanel = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header>
                <h1>
                    <FaBars onClick={toggleSidePanel} style={{ cursor: 'pointer' }} />
                </h1>
            </header>
            <SidePanel isOpen={isOpen} toggleSidePanel={toggleSidePanel} />
        </>
    )
}