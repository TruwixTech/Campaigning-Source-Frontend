import React from 'react';
import Layout from '../components/Layout';

const Swags = () => {
    return (
        <Layout>
            <div>
                <div className='bg-blue-300 bg-opacity-80 rounded-lg mb-12 p-3'>
                <h1 className='title text-black'>Swags</h1>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSec-v_XeyGS_objQDKdjvrP0MQIUwqxLVqz1UAlV_c0Gky7TA/viewform?embedded=true"
                        width="80%"
                        height="2400"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                        className='mx-auto'
                        >
                        Loading…
                    </iframe>
                </div>
            </div>
        </Layout>
    );
};

export default Swags;
