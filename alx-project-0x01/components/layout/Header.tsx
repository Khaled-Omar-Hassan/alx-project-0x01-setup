const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">ALX Project</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><link href="/" className="hover:text-gray-400">Home</link></li>
                        <li><link href="/about" className="hover:text-gray-400">About</link></li>
                        <li><link href="/contact" className="hover:text-gray-400">Contact</link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;