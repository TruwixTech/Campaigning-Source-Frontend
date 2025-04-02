export default function Tooltip() {
    return (
        <div className="hidden md:flex absolute bottom-2 left-12">
            <div className="relative inline-block">
                <button className="text-gray-200 transition-colors duration-200 focus:outline-none hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                </button>

                <p className="absolute flex items-center justify-center w-64 p-3 text-gray-200 bg-gray-600 rounded-lg shadow-lg -left-4 -top-16">
                    <span className="">Press Alt + X to open Searchbar</span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 absolute rotate-45 left-4 bottom-0.5 -mb-3 transform text-gray-600 fill-current" stroke="currentColor" viewBox="0 0 24 24" >
                        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
                    </svg>
                </p>
            </div>
        </div>
    )
}