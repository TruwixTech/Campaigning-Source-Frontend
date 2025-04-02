import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cookies = ({ closeDialog }) => {
  return (
    <AnimatePresence>
      {/* Use key to let Framer Motion know when the component is actually removed */}
      <motion.section
        key="cookies-section"
        initial={{ opacity: 0, x:-20 }}
        animate={{ opacity: 1, x:0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed flex items-center justify-between max-w-4xl p-4 mx-auto bg-bg border border-gray-600 shadow-md left-12 bottom-12 md:gap-x-4 rounded-2xl"
      >
        <p className="text-sm text-gray-200">
          By continuing to use this site you consent to the use of cookies in accordance with our cookie policy.
        </p>

        <button
          onClick={closeDialog}
          className="flex items-center justify-center text-gray-600 transition-colors duration-300 rounded-full shrink-0 w-7 h-7 focus:outline-none hover:text-red-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
            />
          </svg>
        </button>
      </motion.section>
    </AnimatePresence>
  );
};

export default Cookies;
