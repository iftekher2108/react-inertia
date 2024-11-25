import { Link } from "@inertiajs/react"
// import { Children } from "react"

function MenuLink({
    active = false,
    children,
    ...props
 }) {
    return(
        <>
            <Link {...props} className={active ? 'bg-primary' : ''} >{children}</Link>
        </>

    )
}

export default MenuLink
