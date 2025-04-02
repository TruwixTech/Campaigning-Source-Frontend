import { useState } from 'react';
import Partners from './Partners';
import Advisors from './Advisors';
import Customers from './Customers';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Partners');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className='px-4 md:px-6 bg-gray-700 w-11/12 mx-auto p-16 rounded-xl'>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-1">
                Our Supporters
            </h2>

            <div className="w-2/3 mx-auto mt-6 mb-3">
                <div className="flex flex-col md:flex-row items-center mb-2 justify-center md:justify-evenly">
                    <div
                        className={`border-transparent pt-2 pb-1 px-1 border-b-2 font-medium text-xl ${activeTab === 'Customers' ? ' hover:border-blue-400 text-primaryText ' : 'text-gray-400 hover:text-gray-500 hover:border-gray-400'
                            }`}
                        onClick={() => handleTabClick('Customers')}
                    >
                        Customers
                    </div>
                    <div
                        className={`border-transparent pt-2 pb-1 px-1 border-b-2 font-medium text-xl ${activeTab === 'Partners' ? ' hover:border-primaryText text-primaryText ' : 'text-gray-400 hover:text-gray-500 hover:border-gray-400'
                            }`}
                        onClick={() => handleTabClick('Partners')}
                    >
                        Partners
                    </div>
                    <div
                        className={`border-transparent pt-2 pb-1 px-1 border-b-2 font-medium text-xl ${activeTab === 'Advisors' ? ' hover:border-blue-400 text-primaryText ' : 'text-gray-400 hover:text-gray-500 hover:border-gray-400'
                            }`}
                        onClick={() => handleTabClick('Advisors')}
                    >
                        Advisors
                    </div>
                </div>
                <div className="p-4 mt-2">
                    {activeTab === 'Customers' && <Customers />}
                    {activeTab === 'Partners' && <Partners />}
                    {activeTab === 'Advisors' && <Advisors />}
                </div>
            </div>
        </div>
    )
}

export default Tabs
