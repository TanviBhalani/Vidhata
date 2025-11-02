import React from 'react'

export default function Choose() {
  return (
    <div>
      <div className="bg-[#e6e6e6] w-full pt-30 pb-15 px-5">
        {/* Heading */}
        <div className="flex justify-between max-sm:flex-col max-sm:items-center max-sm:text-center ">
          <h1 className="w-100 text-5xl tracking-widest leading-13 font-medium flex items-center px-5 max-sm:text-3xl max-sm:px-5">
            Why Choose VIDHATA
          </h1>
        </div>

        {/* Section 1 */}
        <div className="flex items-center justify-center mt-10 max-sm:flex-col max-sm:text-center">
          <div className="left max-sm:mb-5">
            <img src="/images/s1.png" alt="support" className="h-120 max-sm:h-60 max-sm:w-auto" />
          </div>
          <div className="right ml-10 my-10 max-sm:ml-0">
            <h1 className="text-3xl font-medium max-sm:text-2xl">TECHNICAL SUPPORT</h1>
            <p className="text-xl w-100 max-sm:text-base max-sm:px-3">
              We follow the customer in choosing the right product for his needs, also offering a technical after-sales service.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex items-center justify-center max-sm:flex-col-reverse max-sm:text-center">
          <div className="left ml-10 my-10 max-sm:ml-0">
            <h1 className="text-3xl font-medium max-sm:text-2xl">PRODUCTS QUALITY</h1>
            <p className="text-xl w-100 max-sm:text-base max-sm:px-3">
              Innovative ideas and paying particular attention to environmental impacts of industrial production are Vidhata's mission.
            </p>
          </div>
          <div className="right max-sm:mb-5">
            <img src="/images/s2.png" alt="quality" className="h-120 max-sm:h-60 max-sm:w-auto" />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex items-center justify-center  max-sm:flex-col max-sm:text-center">
          <div className="left max-sm:mb-5">
            <img src="/images/s3.png" alt="customization" className="h-120 max-sm:h-60 max-sm:w-auto" />
          </div>
          <div className="right ml-10 my-10 max-sm:ml-0">
            <h1 className="text-3xl font-medium max-sm:text-2xl">CUSTOMIZATION</h1>
            <p className="text-xl w-100 max-sm:text-base max-sm:px-3">
              We follow the customer during the product configuration to identify the best performance settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
