'use client';
import { useEffect, useRef, useState } from "react";
import "../../assets/styles/3_components/navbar_toggle.css";

export default function Navbar() {
    const [show, setShow] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setShow(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => { document.removeEventListener('click', handleClickOutside); };
    }, []);
    return (
        <>
            <div className="navbar_button" onClick={() => setShow(!show)}>
                {['_', '_', '_'].map((render) => (
                    <div className="el">
                    </div>
                ))}
            </div>
            <div className={show ? "navbar_menu" : "navbar_menu transition_style"}>
                {['Home', 'About Ambohitantara', 'Contact'].map((result, _index) => (
                    <div className={_index === 0 ? "el active" : "el"}>
                        {result}
                    </div>
                ))}
            </div>
        </>

    )
}