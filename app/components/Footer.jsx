export default function Footer() {
    return (
        <footer className='w-full h-[85vh] bg-black text-white rounded-t-3xl border-t border-white/30 overflow-hidden flex flex-col lg:flex-row items-center justify-evenly'>
            <div className='flex items-center justify-center flex-col'>
                <div>
                    <div className='text-4xl mb-2 underline'>Links</div>
                    <div>Home</div>
                    <div>Contact</div>
                    <div>About</div>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <div>
                    <div className='text-4xl mb-2 underline'>Socials</div>
                    <div>Linkedin</div>
                    <div>X</div>
                    <div>Instagram</div>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <div>
                    <div className='text-4xl mb-2 underline'>Your Company Name</div>
                    <div>Terms & Conditions</div>
                    <div>Privacy Policy</div>
                    <div>FAQ</div>
                </div>
            </div>
        </footer>
    );
}
