import Layout from "@/components/Layout";
import Head from "next/head";
import data from "@/data/pricingData";
import { React, useState, useRef } from "react";
import { IoMdSearch } from "react-icons/io";

const Pricing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const pricingTableRef = useRef(null);

  const filteredPricingData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToPricingTable = () => {
    pricingTableRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Pricing | Campaigning Source</title>
      </Head>
      <Layout>
        <div className="py-8">
          <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-wider md:text-5xl lg:text-6xl/none">
                Pricing
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Find out pricing for the services we offer. Select a card to view its corresponding table.
              </p>
              <div className="relative">
                <input
                  className="w-full p-2 pl-10 border border-gray-800 bg-gray-700 rounded-md focus:outline-none focus:ring-primaryText focus:border-primaryText sm:text-sm"
                  placeholder="Search pricing for a specific service"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <IoMdSearch className="absolute top-2.5 left-3 h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* PRICING CARDS */}
            <div className="flex flex-col gap-6 py-8">
              {filteredPricingData.length > 0 && (
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-4 lg:gap-6">
                    {filteredPricingData?.map((item, index) => (
                      <div
                        key={item.id}
                        className={`p-4 border rounded-lg shadow-md text-gray-600 hover:text-gray-400 hover:border-primaryText md:hover:scale-[0.98] transition-all md:h-32 ${selectedCardIndex === index ? "border-primaryText" : ""
                          }`}
                        onClick={() => {
                          setSelectedCardIndex(index)
                          scrollToPricingTable()
                        }}
                      >
                        <h3 className="flex items-center font-semibold text-xl text-primaryText">
                          {item.title}
                        </h3>
                        <p className="text-base text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* PRICING TABLE */}
            <div className="" ref={pricingTableRef}>
              <div className="mt-10">
                {filteredPricingData.map((item, index) => (
                  <div
                    key={index}
                    className={`${selectedCardIndex === index ? "" : "hidden"
                      } flex gap-12 flex-col  items-center`}
                  >
                    <div className="relative w-full py-12 rounded-lg mx-auto h-fit text-center">
                      <h3 className="text-4xl font-semibold">
                        Pricing for {item.title}
                      </h3>
                      <p className="text-gray-500 text-lg py-2">{item.description}</p>
                    </div>
                    <div className="w-full text-center overflow-x-auto rounded-xl">
                      <table className="w-full table-auto backdrop-blur-sm ">
                        <thead className="text-gray-800 uppercase text-xl">
                          <tr className="text-primaryText border-b-2 border-gray-100">
                            <th className="px-2 py-3  border-e-2">Plan</th>
                            <th className="px-2 py-3  border-e-2">
                              Description
                            </th>
                            <th className="px-2 py-3">Price<sup>*</sup></th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-100 text-lg">
                          {item.plans.map((plan, index) => (
                            <tr key={index} className="">
                              <td className="px-2 py-4 border-b-2 border-e-2 w-1/3 border-gray-500">
                                {plan.title}
                              </td>
                              <td className="px-2 py-4 border-b-2 border-e-2 w-1/3 border-gray-500">
                                {plan.description}
                              </td>
                              <td className="px-2 py-4 border-b-2 w-1/3 border-gray-500 text-xl font-bold text-primaryText/80">
                                ₹{plan.price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
              <div className="my-4 text-xs">
                <p className="text-gray-500">
                  <span className="text-primaryText">*</span> All prices are exclusive of GST.
                </p>
                <p className="text-gray-500">
                  <span className="text-primaryText">*</span> Pricing of TV ads are dynamic in nature and can be different from the above .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Pricing;
