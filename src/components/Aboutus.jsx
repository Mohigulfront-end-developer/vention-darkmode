import React from 'react'

const Aboutus = () => {
  return (
    <div className="bg-[#EBEBED]">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="w-[15vw]"></div>
        <div className="border-b-2 border-l-2 border-gray-300 py-20 px-10">
          <h2 className="pt-12 font-semibold text-[35px]">
            With 20+ years of providing software development services for
            technological enterprises, successful startups, and AI-empowered
            companies worldwide, our developers demonstrate exceptional
            efficiency and expertise.
          </h2>
          <div className="flex justify-end">
            <p className="text-[20px] pt-5 w-[48vw]">
              On average, Vention clients benefit $600,000+ from annual savings
              as a result of our collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus