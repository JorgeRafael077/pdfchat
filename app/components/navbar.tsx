import React from "react";

const Navbar = () => {
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex items-center justify-between ">
                <link href="/" />
                    <img src="/logo.png" alt="logo" width={144} height={30} />
            </nav>
        </header>
    )
}

export default Navbar;