import resetBtn from '../../assets/reset.svg';
import status from '../../assets/f7_status.svg';
import arrow from '../../assets/vector-filter.svg';
import date from '../../assets/stash_data-date-duotone.svg';
import nots from '../../assets/Vector (1).svg'
import user1image from '../../assets/WhatsApp Image 2024-05-31 at 14.59 2.svg';
import eyeicon from '../../assets/iconoir_eye.svg';
import list from '../../assets/list.svg';
import details from '../../assets/details.svg';
import fileDoc from '../../assets/vscode-icons_file-type-excel.svg';
import pdfDoc from '../../assets/vscode-icons_file-type-pdf2.svg';

import FilterDropdown from './filterDropdown';
import { useState } from 'react';

function Header() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


  const handleToggle = (filterName: string) => {
    setActiveDropdown(activeDropdown === filterName ? null : filterName);
  }

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = (checkboxId:number) => {
    if (checkboxId === 1) {
      setIsChecked1(true);
      setIsChecked2(false);
    } else {
      setIsChecked1(false);
      setIsChecked2(true);
    }
  };


    const years: string[] = [

        '2016',
        '2017',
        '2018',
        '2020',
        '2021',
        '2022',
        '2023',
        '2024'
    ]



    const months: string[] = [
        'Yanvar',
        'Fevral',
        'Mart',
        "Aprel",
        'May',
        'İyun',
        'Iyul',
        'Avqust',
        'Sentyabr',
        'Oktyabr',
        'Noyabr',
        "Dekarbr"

    ]


    const cities: string[] = [
        'Baku',
        'Ganja',
        "Lankaran",
        "Nakhchivan",
        'Shaki',
        "Guba"
    ]


    const positions: string[] = [
        'Team Lead',
        'Project Manager',
        "Deparment Manager",
        "Conten Creator",
        'Marketing Manager',
    ]


    const companies: string[] = [
        'AgroExp',
        'Baku Tech',
        "Baku Pearl",
        "LenFarms",
        'NaxTrans',
    ]


    const hrTeams: string[] = [
        'Aysel Hasanova',
        'Farid Aliyev',
        "Sama Safarova",
        "Hikmet Karimov",
    ];


    return (
        <div className="h-screen flex-1 p-2" >
            {/* Header part one */}
            <div className='flex justify-between  mt-[25px] ml-[5px] mr-[5px]'>

                {/* filter select boxes */}
                <div className='flex justify-start mt-[5px]  gap-[6px]'>

                     <div className='flex relative w-[77px] top-[5px] bottom-[10px] justify-center '>
                       <FilterDropdown isOpen={activeDropdown === "Şəhər"} onToggle={() => handleToggle("Şəhər")} filterData={cities} filterName="Şəhər" />
                       </div> 


                    <div className='flex relative w-[47px] top-[5px] bottom-[10px] ml-[15px] justify-center'>
                        <FilterDropdown isOpen={activeDropdown === "İl"} onToggle={() => handleToggle("İl")} filterData={years} filterName="İl" />
                    </div>

                    <div className='flex relative  ml-3 w-[77px] top-[5px] bottom-[10px] justfy-center'>
                        <FilterDropdown isOpen={activeDropdown === "Ay"} onToggle={() => handleToggle("Ay")} filterData={months} filterName="Ay" />

                    </div>

                    <div className='flex relative w-[77px] top-[5px] bottom-[10px] justify-center'>
                        <FilterDropdown isOpen={activeDropdown === "Vəzifə"} onToggle={() => handleToggle("Vəzifə")} filterData={positions} filterName="Vəzifə" />

                    </div>

                    <div className='flex relative w-[77px] top-[5px] bottom-[10px]  ml-[15px] justify-center'>
                        <FilterDropdown isOpen={activeDropdown === "Şirkət"} filterData={companies} onToggle={() => handleToggle("Şirkət")} filterName="Şirkət" />

                    </div>


                    <div className='flex relative max-w-[150px] top-[5px] bottom-[10px]  ml-[15px] justify-center'>
                        <FilterDropdown isOpen={activeDropdown === "Hr mütəxəssis"} filterData={hrTeams} onToggle={() => handleToggle("Hr mütəxəssis")} filterName="Hr mütəxəssis" />
                    </div>


                </div>


                <div className='flex justify-end '>

                    <div className='h-[44px]  mt-[15px] mr-[10px] w-[49px]  border-[1px] border-[border-[#FF5733]] rounded-md pt-[10px] pr-[10px] pb-[10px] pl-[12px] gap-[10px] cursor-pointer' >
                        <button>
                            <img src={resetBtn} alt="resetbtn" />
                        </button>
                    </div>

                    <div className='flex relative justify-center'>
                        <button className='w-[125px] h-[44px] rounded-lg text-white bg-btn-blue mt-[15px] text-left text-[12px] font-medium font-[Noto Sans] leading-[19.07px] p-[10px]'>Layihə əlavə et  </button>
                        <span className='text-[30px]  font-light mt-[12px]  ml-[-25px] text-white'>+</span>
                    </div>


                    <div className="flex w-[102px] h-[20px] mt-[25px] mr-[50px] items-center space-x-4 flex relative">

                        <input type="file" id="file" className="hidden" />
                        <img className='w-[15px] absolute left-[3px] ' src={fileDoc} alt="file" />
                        <label htmlFor="file" className="text-file-color font-medium text-[14px]  leading-[19.07px]  border-[1px] border-[#E5E7EA] py-[12px] px-[20px] rounded-lg shadow-lg flex cursor-pointer">
                            Upload.xlsx
                        </label>
                    </div>


                    <div className='mr-[20px]  mt-[15px] flex relatice'>
                        <button>
                            <img src={nots} className='w-[25px]' alt="nots" />
                        </button>
                        <div className='mt-[13px] ml-[-12.5px] w-[12.5px] h-[12.5px] top-[2.5px] left-[12.5px] bg-[#CF2121] rounded-xl'>
                            <p className='text-white font-bold ml-[3.5px] text-[8.33px]'>5</p>
                        </div>

                    </div>



                    <ul className="mt-[15px]">
                        <li>
                            <img src={user1image} alt="Option 1" />
                            <img className='ml-[7px]' src={arrow} alt="arrow" />
                       </li>
                    </ul>
                </div>


            </div>
            {/* Header part two */}
            <div className='flex justify-between mt-[20px] ml-[5px] mr-[25px]'>
                <div className='flex justify-start gap-[10px]'>
                    <div className='flex justify-start  w-[160px] h-[30px] rounded-md border-[1px] border-[#E5E7EA] cursor-pointer'>
                        <img src={eyeicon} alt='views' />
                        <p className='font-normal font-[16px] ml-[5px] mt-[3px] text-[#6D6D6D] leading-[21.79px]'>Progress izləmə</p>
                    </div>

                    <div className='flex justify-center  w-[160px] h-[30px] rounded-md border-[1px] border-[#E5E7EA] cursor-pointer'>
                        <img src={list} alt='list' />
                        <p className='font-normal font-[16px] ml-[5px] mt-[3px] text-[#6D6D6D] leading-[21.79px]'>Plan & Faktiki</p>
                    </div>


                    <div className='flex justify-center  w-[120px] h-[30px] rounded-md border-[1px] border-[#E5E7EA] cursor-pointer'>
                        <img src={details} alt='details' />
                        <p className='font-normal font-[16px] ml-[5px] mt-[3px] text-[#6D6D6D] leading-[21.79px]'>Detallar</p>
                    </div>
                </div>

                <div className='flex justify-center gap-[20px] mr-[18px] '>
                    <div className='flex justify-center gap-[5px]'>
                        <img className='w-[25px]' src={status} alt="status" />
                        <p className='font-normal font-14px leading-[19.07px] text-[#403f3f] mt-[5px]'>Status</p>
                    </div>

                    <div className='flex justify-center gap-[5px]'>
                        <img className='w-[25px]' src={date} alt="date" />
                        <p className='font-normal font-14px leading-[19.07px] text-[#403f3f] mt-[5px]'>Tarix</p>
                    </div>
                </div>

            </div>
            <hr className='ml-[35px] mr-[35px]' />

            {/* Header part three */}
            <div className='flex justify-between mt-[20px] ml-[35px] mr-[35px]'>

                <div className='flex justify-center gap-[10px]'>
                    <div className='flex justify-center gap-[7px] w-[65px]  h-[30px] border-[1px] pt-[5px] border-[#E5E7EA] rounded-[8px] ' >
                        <input type="checkbox" id="checkbox1" checked={isChecked1} onChange={() => handleCheckboxChange(1)} className="appearance-none mt-[4px] h-[10px] w-[10px] border border-[#E5E7EA] rounded-full bg-white checked:bg-[#22385F] checked:border-transparent focus:outline-none" />
                        <label htmlFor='checkbox1' className='font-noto font-normal text-[14px]  leading-[19.07px] text-[#22385F]'>İcmal</label>
                    </div>

                    <div className='flex justify-center gap-[7px] w-[60px]  h-[30px]  border-[1px] pt-[5px] border-[#E5E7EA] rounded-[8px] ' >
                        <input type="checkbox" id="checkbox2" checked={isChecked2} onChange={() => handleCheckboxChange(2)} className="appearance-none mt-[4px] h-[10px] w-[10px] border border-[#E5E7EA] rounded-full bg-white checked:bg-[#22385F] checked:border-transparent focus:outline-none" />
                        <label htmlFor='checkbox2' className='font-noto font-normal text-[14px]  leading-[19.07px] text-[#22385F]'>Tam</label>
                    </div>
                </div>

                <div className='flex justify-center gap-[15px]'>
                    <div className="flex w-[108px] h-[30px]  mr-[20px] items-center space-x-4 relative">
                        <input type="file" id="excel" className="hidden" />
                        <img className='w-[22px] absolute left-[3px]' src={fileDoc} alt="file" />
                        <label htmlFor="excel" className=" font-noto text-file-color font-medium text-[14px]  leading-[19.07px]  border-[1px] border-[#E5E7EA] py-[5px] pl-[30px] pr-[20px] rounded-lg shadow-lg flex cursor-pointer">
                            Export.xlsx
                        </label>
                    </div>

                    <div className="flex w-[148px] h-[30px]  items-center space-x-4 flex relative">
                        <input type="file" id="pdf-file" className="hidden" />
                        <img className='w-[22px] absolute' src={pdfDoc} alt="file" />
                        <label htmlFor="pdf-file" className="font-noto text-file-color font-medium text-[14px]  leading-[19.07px]  border-[1px] border-[#E5E7EA] py-[5px] pl-[30px] pr-[20px] rounded-lg shadow-lg flex cursor-pointer">
                            Export PDF
                        </label>
                    </div>


                </div>
            </div>



        </div>
    )
}

export default Header;