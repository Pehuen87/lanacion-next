import Link from "next/link"
import User from "./User"

export default function Header() {
    const Links = [{
        label: 'Products',
        route: '/products'
    },
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'About',
        route: '/about'
    }]



    return (
        <header className="bg-gray-100">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-4" src="/logo.svg" alt="Logo" />
                            </div>
                            <div className="hidden md:block">
                                <ul className="ml-10 flex items-baseline space-x-4">
                                    {Links.map(link =>
                                        <li key={link.label}>
                                            <Link className='font-bold text-2xl mb-2 text-gray-200' href={link.route}>
                                                {link.label}
                                            </Link>
                                        </li>)}
                                </ul>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <User />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}