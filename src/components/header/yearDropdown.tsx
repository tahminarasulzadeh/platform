import React, { useState } from 'react';
import plan from '../../assets/plan.svg'
import select from '../../assets/prime_sort-down-fill.svg';
import master from '../../assets/Frame 427320129.svg';
import report from '../../assets/carbon_report-data.svg';
import state from '../../assets/mingcute_government-line.svg';
import rotate from '../../assets/rotate.svg';
import search from '../../assets/search.svg'



interface MyComponentProps {
    dataName: string;
    dataMsg: string[];
  }


const YearDropdown:React.FC<MyComponentProps> = ({dataMsg, dataName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  

  


  return (
    <div className={`w-[70px] h-[44px] mt-2 mx-3 relative inline-block  text-left}`}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className={` transition-all border-none rounded-lg duration-[1000ms]  inline-flex w-[80px] h-[44px] py-4 px-5 justify-start font-medium  focus:outline-none ${isOpen ? '  bg-[#22385F]' : 'bg-transparent'}`}
      >
        <span className={`font-noto text-[14px] font-[400] leading-[19.07px] ${!isOpen ? "text-[#6D6D6D]" : "text-white"}`}>{dataName}</span>
        <div className={`w-[18px] mt-[3px] ml-[3px] h-0 border-l-[9px] border-l-transparent rounded border-r-[9px] border-r-transparent border-b-[10px]  ${!isOpen && ' border-[#6D6D6D] rotate-180 mt-[7.5px]'}`}></div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
          <select>
            {
                dataMsg.map((msg) => (
                    <option className='mt-[10px] text-[14px] text-center'>{msg}</option>
                ))
            }
          </select>
      
      )}
    </div>
  );
};

export default YearDropdown;