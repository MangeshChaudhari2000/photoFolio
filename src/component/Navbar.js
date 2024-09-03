import React from "react";

export default function Navbar() {
    return (
        <div className="items-center flex justify-start h-14 bg-gradient-to-r from-violet-500 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-2xl pl-6 gap-x-2 ">
            <img className="max-w-none" style={{width:"3vw", minWidth:"40px"}} src="https://cdn-icons-png.flaticon.com/128/2659/2659360.png" alt="Girl in a jacket" width="500" height="600" />
            <p className="inline-block align-middle text-blue-950 font-semibold">PhotoFolio</p>
        </div>
    )
}