import MenuLink from "../MenuLink"

function NavPanel() {
    return (
        <>
            <div className='bg-slate-700 rounded-lg'>
                <ul className="menu rounded-box">
                    <li><MenuLink href={route('dashboard')} active={route().current('dashboard')}>Dash Board</MenuLink></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>

                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </>
    )
}

export default NavPanel
