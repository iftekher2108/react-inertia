import { Link } from "@inertiajs/react"
import MenuLink from "./MenuLink"

function NavPanel() {

    return (
        <>
            <div className='min-h-screen bg-accent'>
                <ul className="menu rounded-box">
                    <li><MenuLink href={route('dashboard')} active={route().current('dashboard')}><i className="fa-solid fa-house"></i> Dash Board</MenuLink></li>
                    <li>
                        <details>
                            <summary>Customer</summary>
                            <ul>
                                <li><MenuLink href={route('customer.add')} active={route().current('customer.add')}>Add Customer</MenuLink></li>
                                <li><MenuLink href={route('customer.list')} active={route().current('customer.list')}>Customer List</MenuLink></li>

                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Supplier</summary>
                            <ul>
                                <li><MenuLink href={''} active={''}>Add Supplier</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Supplier List</MenuLink></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>Medicine</summary>
                            <ul>
                                <li><MenuLink href={''} active={''}>Add Category</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Category List</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Add Unit</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Unit List</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Add Type</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Type List</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Leaf Setting</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Add Medicine</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Medicine List</MenuLink></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>Purchase</summary>
                            <ul>
                                <li><MenuLink href={''} active={''}>Add Purchase</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Purchase List</MenuLink></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>Invoice</summary>
                            <ul>
                                <li><MenuLink href={''} active={''}>Add Invoice</MenuLink></li>
                                <li><MenuLink href={''} active={''}>POS Invoice</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Invoice List</MenuLink></li>

                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>Return</summary>
                            <ul>
                                <li><MenuLink href={''} active={''}>Add Return</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Invoice Return List</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Supplier Return List</MenuLink></li>

                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>Application Settings</summary>
                            <ul>
                                <li><MenuLink href={''} active={''}>Add User</MenuLink></li>
                                <li><MenuLink href={''} active={''}>User List</MenuLink></li>
                                <li><MenuLink href={''} active={''}>Setting</MenuLink></li>

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
