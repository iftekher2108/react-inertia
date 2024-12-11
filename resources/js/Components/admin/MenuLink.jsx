import { Link } from "@inertiajs/react"

function MenuLink({
    active = false,
    children,
    ...props
 }) {
    return(
        <>
            <Link {...props} className={ 'py-3 my-1 flex text-opacity-80 text-white items-center active:text-white focus:text-white  '+' '+(active ? 'bg-primary hover:bg-primary active:bg-primary focus:bg-primary' : '')} >{children}</Link>
        </>

    )
}

export default MenuLink
