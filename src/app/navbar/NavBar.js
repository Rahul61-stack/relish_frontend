'use client';
import NavElement from "./NavElement"
export default function navbar(){
    return (
        <div className="border-b-2 border-y-slate-700 pb-2">
            <NavElement/>
        </div>
    )
}
// no page.js created since this is in layout of the webpage