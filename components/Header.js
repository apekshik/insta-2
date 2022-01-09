import Image from "next/image";

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-61xl">
                {/* Left */}
                <div className='relative hidden lg:inline-grid h-25 w-24'>
                <Image 
                    src="https://links.papareact.com/ocw" 
                    layout="fill" 
                    objectFit="contain"
                />
                </div>
                <h1>hello world</h1>
                {/* Middle */}
                {/* Right */}
            </div>
            
        </div>
    )
}

export default Header
