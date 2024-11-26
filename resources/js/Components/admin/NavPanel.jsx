import { Link } from "@inertiajs/react"
import MenuLink from "./MenuLink"

function NavPanel() {
    return (
        <>
            <div className='bg-slate-700 rounded-lg'>
                <ul className="menu rounded-box">
                    <li><MenuLink href={route('dashboard')} active={route().current('dashboard')}><i className="fa-solid fa-house"></i> Dash Board</MenuLink></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul>
                                <li><MenuLink href={''} active={''}> Submenu 1</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Submenu 2</MenuLink></li>

                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul>
                                <li><MenuLink href={''} active={''}>Submenu 1</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Submenu 2</MenuLink></li>
                            </ul>
                        </details>
                    </li>
                    <li><MenuLink href={''}>Item 3</MenuLink></li>
                </ul>
            </div>
        </>
    )
}

export default NavPanel
