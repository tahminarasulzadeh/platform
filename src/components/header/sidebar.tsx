import { useState, useRef, useEffect } from "react";
import dotsMenu from '../../assets/mage_dots-menu.svg';
import cross from '../../assets/cuida_x-outline.svg';
import search from '../../assets/bitcoin-icons_search-outline.svg';
import sales from '../../assets/sales.svg';
import plan from '../../assets/plan.svg';
import Dropdown from "./dropwdown";
import finance from '../../assets/Group.svg';
import comInfo from '../../assets/company-info.svg';
import graphic from '../../assets/graphic.svg';
import quality from '../../assets/quality.svg';
import master from '../../assets/Frame 427320129.svg';
import report from '../../assets/carbon_report-data.svg';
import state from '../../assets/mingcute_government-line.svg'


function Sidebar() {
   const [open, setOpen] = useState<boolean>(false)

   const sidebarRef = useRef<HTMLDivElement | null>(null);


   const toggleSidebar = () => {
      setOpen(!open);
   };


   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setOpen(false);
         }
      };


      if (open) {
         document.addEventListener('mousedown', handleClickOutside);
      }

      // Cleanup the event listener when the component unmounts or when the sidebar closes
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [open]); // Only re-run when `isOpen` changes


   return (
      <aside className="flex sidebar justify-star" ref={sidebarRef}>
         <div className={`bg-[#172847]  min-h-screen  ${open ? "w-[290px]" : "w-[40px]"}`}>
            <div className={`py-3 flex ${open ?  "justify-start ml-[10px]" : "justify-center  hover:bg-[#275EC3]"}`}>
               <img src={dotsMenu} alt='dotsMenu' className="cursor-pointer" onClick={toggleSidebar} />
               {open ? <h2 className="text-[#C9CACB] font-noto font-normal ml-[5px] mt-[3px] text-[14px] leading-[19.07px]">Menu</h2> : null}
               {open ? <img src={cross} alt="cross" className="relative left-[11rem] mt-[5px] cursor-pointer" onClick={() => setOpen(false)} /> : null}
            </div>

            {open && <div className="flex justify-center relative">
               <img src={search} alt="search" className=" mr-[-30px] mt-[3px] z-10" />
               <input type="text" placeholder="Search" className="bg-[#223250] w-[270px] text-white text-noto font-normal text-[14px] h-[30px] rounded-[8px] focus:outline-none pl-[35px] placeholder:font-noto placeholder:text-[14px] placeholder:font-normal placeholder:text-[#5B677E]" />
            </div>
            }

            <div className={`py-2 px-2 mt-7 flex transition-all  hover:bg-[#275EC3] duration-[1000ms]   ${open ? "justify-start rounded-md ml-[10px] w-[270px] cursor-pointer  " : "justify-center"}`} onClick={() => setOpen(true)}>
               <img src={sales} alt='dotsMenu' className="cursor-pointer" />
               {open ? <h2 className="text-[#C9CACB] font-noto font-normal ml-[7px] mt-[3px] text-[14px] leading-[19.07px]  ">Satınalma İcmalı</h2> : null}
               {open ? <div className="w-[10px] h-[10px] border-[1px] border-[#C9CACB] rounded-full mt-[10px] ml-[6.8rem]"></div> : null}
            </div>


            <div className={`py-1 mt-3 flex ${open ? "justify-start ml-[10px]" : "justify-center"}`} onClick={() => setOpen(true)}>
               {open ? <Dropdown /> :
                  <div className=" flex flex-col items-center gap-[10px] transition-all duration-[1000ms]">
                     <img src={plan} alt='dotsMenu' className="cursor-pointer  justify-center" />
                     <div>
                        <div className="flex justify-center mt-[5px] w-[40px] h-[21px]">
                           <img src={master} alt='dotsMenu' className="cursor-pointer w-[11px] h-[15.28px]" />
                        </div>

                        <div className="flex items-center mt-[-1px] flex-col w-[40px] h-[24px] gap-[10px] ">
                           <img src={state} alt='dotsMenu' className="cursor-pointer mt-[5px] w-[12.23px] h-[14.67px]" />
                            </div>
                          <div className="flex items-center mt-[-1px] flex-col w-[40px] h-[24px] gap-[10px] " >
                           <img src={report} alt='dotsMenu' className="cursor-pointer  ml-[3px] w-[10.04px] h-[14.67px]]" />
                        </div>


                     </div>
                  </div>


               }
            </div>


            <div className={`py-2 flex mt-3 px-2 transition-all duration-[1000ms] hover:bg-[#1F3D74] ${open ? "justify-start ml-[10px] w-[270px] cursor-pointer   rounded-md  " : "justify-center"}`} onClick={() => setOpen(true)}>
               <img src={finance} alt='dotsMenu' className="cursor-pointer" />
               {open ? <h2 className="text-[#C9CACB] font-noto font-normal ml-[12px] mt-[1px] text-[14px] leading-[19.07px]">Maliyyə</h2> : null}
               {open ? <div className="w-[10px] h-[10px] border-[1px] border-[#C9CACB] rounded-full mt-[6px] ml-[10.3rem]"></div> : null}
            </div>


            <div className={`py-2  mt-3 flex px-2 transition-all duration-[1000ms] hover:bg-[#1F3D74] ${open ? "justify-start ml-[10px] w-[270px] cursor-pointer    rounded-md" : "justify-center"}`} onClick={() => setOpen(true)}>
               <img src={comInfo} alt='company-info' className="cursor-pointer" />
               {open ? <h2 className="text-[#C9CACB] font-noto font-normal ml-[9px] mt-[1px] text-[14px] leading-[19.07px]">Şirkət Məlumatları</h2> : null}
               {open ? <div className="w-[10px] h-[10px] border-[1px] border-[#C9CACB] rounded-full mt-[5px] ml-[6.0rem]"></div> : null}
            </div>


            <div className={`py-2 mt-3 flex px-2 transition-all duration-[1000ms] hover:bg-[#1F3D74] ${open ? "justify-start ml-[10px]  w-[270px] cursor-pointer   rounded-md" : "justify-center"}`} onClick={() => setOpen(true)}>
               <img src={graphic} alt='company-info' className="cursor-pointer" />
               {open ? <h2 className="text-[#C9CACB] font-noto font-normal ml-[9px] mt-[1px] text-[14px] leading-[19.07px]">İş qrafiki</h2> : null}
               {open ? <div className="w-[10px] h-[10px] border-[1px] border-[#C9CACB] rounded-full mt-[5px] ml-[10.2rem]"></div> : null}
            </div>

            <div className={`py-2 mt-3 flex px-2 transition-all duration-[1000ms] hover:bg-[#1F3D74] ${open ? "justify-start ml-[10px] w-[270px] cursor-pointer   rounded-md " : "justify-center"}`} onClick={() => setOpen(true)}>
               <img src={quality} alt='company-info' className="cursor-pointer" />
               {open ? <h2 className="text-[#C9CACB] font-noto font-normal ml-[9px] mt-[1px] text-[14px] leading-[19.07px]">Keyfiyyət</h2> : null}
               {open ? <div className="w-[10px] h-[10px] border-[1px] border-[#C9CACB] rounded-full mt-[5px] ml-[9.9rem]"></div> : null}
            </div>
            <div>

            </div>
         </div>

      </aside>
   )
}

export default Sidebar;
