import { Link } from "@inertiajs/react"

function MenuLink({
    active = false,
    children,
    ...props
 }) {
    return(
        <>
            <Link {...props} className={ 'p-3 mb-2 flex items-center hover:bg-primary focus:bg-primary'+' '+(active ? 'bg-primary ' : '')} >{children}</Link>
        </>

    )
}

export default MenuLink
