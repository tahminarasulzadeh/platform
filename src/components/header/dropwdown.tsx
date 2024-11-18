import React, { useState } from 'react';
import plan from '../../assets/plan.svg'
import select from '../../assets/prime_sort-down-fill.svg';
import master from '../../assets/Frame 427320129.svg';
import report from '../../assets/carbon_report-data.svg';
import state from '../../assets/mingcute_government-line.svg'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` ${isOpen && "h-[144px]" } w-[270px] relative  inline-block  text-left`}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex  justify-start w-full px-2 py-2    transition-all duration-[1000ms] text-white font-medium rounded-md shadow-sm hover:bg-[#275EC3] focus:outline-none"
      >
        <img src={plan} alt="plan" />
        <span className='ml-[10px] font-noto text-[14px] font-[400] leading-[19.07px]'>Planlama</span>
        <img src={select} alt="select" className=' w-[20px] ml-[3px] mt-[1px]' />
        <div className="w-[10px] h-[10px] border-[1px] border-[#FFFFFF] rounded-full mt-[7.5px] ml-[8.1rem]"></div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-[270px] right-0 mt-2 bg bg-white mt-[-3px] rounded-md shadow-lg">
          <ul className=" bg-[#1F3D74] border-none rounded-md">
            <li className='hover:bg-[#275EC3'>
              <a href="#item1" className="flex h-[33px] justify-between w-full px-6 py-2 text-sm text-[#C9CACB]  transition-all duration-[1000ms] hover:bg-[#275EC3] hover:text-white ">
                <div className='flex'>
                <img src={master} alt="plan" />
                <span className='ml-[5px]'>Master Schedule</span>
                </div>
                
                <div className="w-[7px] h-[7px] border-[1px] border-[#c9cacb] hover:border-white rounded-full mt-[7.5px] ml-[4rem]"></div>

              </a>
            </li>

            <li className='hover:bg-[#275EC3'>
              <a href="#item1" className="flex w-full h-[33px] justify-between transition-all duration-[1000ms] px-6 py-2 text-sm text-[#C9CACB] hover:bg-[#275EC3] hover:text-white ">
                <div className='flex'>
                <img src={state} alt="plan" />
                <span className='ml-[5px]'>Dövlət qürumları ilə iş</span>
                </div>
                
                <div className="w-[7px] h-[7px] border-[1px] rounded-full mt-[7.5px] "></div>

              </a>
            </li>

            <li className='hover:bg-[#275EC3'>
              <a href="#item1" className="flex w-full justify-between h-[33px] px-6 py-2 text-sm  transition-all duration-[1000ms] text-[#C9CACB] hover:bg-[#275EC3] hover:text-white ">
               
               <div className='flex'>
               <img src={report} alt="plan" />
                <span className='ml-[2px]'>Hesabat</span>
               </div>
                <div className="w-[7px] h-[7px] border-[1px]  border-[#c9cacb] hover:border-white rounded-full mt-[7.8px]  flex justify-end"></div>
              </a>
            </li>


          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
