export default function Navbar() {
    return (
        <nav className='fixed top-10 left-1/2 transform -translate-x-1/2 bg-white/50 backdrop-blur-md text-black z-20 py-4 px-6 shadow-lg rounded-full border border-white/30'>
            <ul className='flex gap-16 text-base md:text-lg'>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
            </ul>
        </nav>
    );
}
