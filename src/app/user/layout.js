import { Fragment } from "react";

export default function Layout({children}){
    return(
        <Fragment>
            <div>
            <main>{children}</main>
            </div>
        </Fragment>
    )
}