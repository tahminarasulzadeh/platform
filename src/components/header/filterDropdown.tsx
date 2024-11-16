import React, { useState, useRef, useEffect } from 'react';
import plan from '../../assets/plan.svg'
import select from '../../assets/prime_sort-down-fill.svg';
import master from '../../assets/Frame 427320129.svg';
import report from '../../assets/carbon_report-data.svg';
import state from '../../assets/mingcute_government-line.svg';
import rotate from '../../assets/rotate.svg';
import search from '../../assets/search.svg';


interface MyComponentProps {
  filterData: string[];
  filterName: string;
  isOpen: boolean;
  onToggle: () => void;


}


const FilterDropdown: React.FC<MyComponentProps> = ({ filterData, isOpen, filterName, onToggle }) => {

  const [isSearch, setSearch] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean[]>([]);
  const [query, setQuery] = useState('');

  const handleSearchChange = (e: any) => {
    setQuery(e.target.value);
  };

  const filteredItems = filterData.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  console.log("filterData", filteredItems)

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onToggle(); // Close the dropdown when clicking outside
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const handleCheckboxChange = (index: number) => {
    setIsChecked((prevState) => {
      const newCheckedItems = [...prevState];
      newCheckedItems[index] = !newCheckedItems[index]; // Toggle the checked state at the specific index
      return newCheckedItems;

    });

  };

  const toggleSearch = () => {
    setSearch(!isSearch);
  };

  const selectAll = () => {

    const checkboxes = document.querySelectorAll('.test') as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  }


  const reseAll = () => {
    const checkboxes = document.querySelectorAll('.test') as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }



  const handleCheckbox = () => !isOpen;
  document.addEventListener('mousedown', handleCheckbox);

  return (
    <div className={`max-w-[150px] h-[44px] mt-2 relative inline-block  text-left}`} ref={dropdownRef} >
      {/* Dropdown Button */}
      <button
        onClick={onToggle}
        className={` transition-all duration-[1000ms] inline-flex max-w-[150px] max-h-[44px] py-3 border-[1px] hover:border-[#22385F] px-3 justify-start font-medium rounded-lg  focus:outline-none ${isOpen ? '  bg-[#22385F]' : 'bg-white'}`}
      >
        <span className={`font-noto text-[14px] max-w-[120px] max-h-[10px] font-normal leading-[19.07px] ${!isOpen ? "text-[#6D6D6D]" : "text-white"}`}>{filterName}</span>
        <div className={`w-[18px] mt-[3px] ml-[3px] h-0 border-l-[9px] border-l-transparent rounded border-r-[9px] border-r-transparent border-b-[10px]  ${!isOpen && ' border-[#6D6D6D] rotate-180 mt-[7.5px]'}`}></div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute flex flex-col items-left transition-all duration-[1000ms] pb-[5px] max-w-[313px] max-h-[503px] border-[1px] border-[#E5E7EA]  bg-[#FFFFFF] rounded-md shadow-lg">

          <div className='flex justify-between mt-3 w-[311px] px-3 h-[22px] bg-[#F6F7F8]'>
            <p className="font-noto font-medium leading-[21.97px] text-[16px] text-[#22385F] text-left" >{filterName}</p>
          </div>

          <div className='flex flex-col gap-[10px]'>
            <div className='flex justify-start px-3 py-2 gap-[7px]'>
              <span className='cursor-pointer font-noto font-normal text-[12px] text-[#1D7EB7] leading-[16.34px]' onClick={selectAll}>Hamısını seç</span>
              <div className='w-[3px] h-[3px] rounded bg-[#1D7EB7] mt-[0.4rem]'></div>
              <span className=' cursor-pointer font-noto font-normal text-[12px] text-[#1D7EB7] leading-[16.34px]' onClick={reseAll}>Sıfırla</span>
              <div className='w-[1px] border-[0.8px] border-[#6D6D6D]'></div>
              {isSearch && 
                <input type="text" placeholder='search' value={query}
                  onChange={handleSearchChange} className='border-none text-[12px] text-[#606060] font-noto font-normal w-[40px] h-[12px] focus:outline-none placeholder:text-[12px] font-noto font-normal  ' />
             

              }
              <img className='cursor-pointer' src={search} alt='search' onClick={toggleSearch} />


            </div>
            <div>

          

              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div key={index} className='flex justify-between px-3 mt-[3px]'>
                    <input id={`search-${index}`} type="checkbox" checked={isChecked[index] ? true : false} onChange={() => handleCheckboxChange(index)} className="peer test cursor-pointer appearance-none mt-2 ml-[17rem]  h-[15px] w-[15px] border border-[#E5E7EA] rounded-full bg-white checked:bg-[#22385F] checked:border-transparent focus:outline-none" />
                    <label htmlFor={`search-${index}`} className={`text-[#6D6D6D] absolute font-noto font-normal  mr-[7rem] text-[14px] leading-[19.07px] peer-checked:text-[#22385F] `}>{item}</label>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No results found</p>
              )}
              <div className='flex justify-center mt-3'>
                <button className='w-[282px] h-[40px] mt-1 rounded-md bg-[#22385F] text-white font-noto text-[14px] leading-[19.07px] cursor-pointer hover:bg-white hover:text-[#22385F] transition-all duration-[1000ms] hover:border-[#22385F] hover:border-[1px]'>Göstər</button>
              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default FilterDropdown;