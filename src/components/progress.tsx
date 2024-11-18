import TableApplicants from "./tableApplicants";

function Progress() {

    interface Vacancy {
        id: number,
        num: number,
    }

    const planVacancy: Vacancy[] = [
        { id: 1, num: 0.3 },
        { id: 2, num: 0.9 },
        { id: 3, num: 1 },
        { id: 4, num: 1 },
        { id: 5, num: 0.6 },
        { id: 6, num: 0.6 },
        { id: 7, num: 1 },
        { id: 8, num: 0.2 },
        { id: 9, num: 0.3 },
        { id: 10, num: 1 },
        { id: 11, num: 0.6 },
        { id: 12, num: 0.14 },


    ];



    return (
        <div className="flex justify-start mt-5 w-[1400px] overflow-x-scroll ">
            <div className="flex rounded-xl ">
                <TableApplicants />
                {/* Vakansiya elanı */}
                <div className="w-[300px]  rounded-xl  bg-[#295197]">
                    <h1 className="text-center text-white text-[14px]   font-noto h-[18px]">Vakansiya elanı</h1>
                    <table className="min-w-full  bg-white border  ">

                        <thead className="w-[10px]">
                            <tr className="bg-[#295197] border-[1px] border-solid border-white h-[15px] bo">
                                <th className="px-3 py-1  border-[1px] border-solid border-[#4069B2] text-center  w-[70px] text-xs font-medium  font-noto text-white">
                                    <div>
                                        <div className="flex justify-center px-1 gap-[5px] ">
                                            <p>Plan</p>
                                            <div className="w-[10px]  h-[10px] mt-[3px] rounded-lg bg-[#22385F]"></div>
                                            <p>Faktiki</p>
                                            <div className="w-[10px] h-[10px] mt-[3px] rounded-lg bg-[#4F7FC6]"></div>
                                        </div>

                                    </div>
                                </th>
                                <th className="px-1 py-1 border-[1px] border-solid border-[#4069B2]  text-center w-[70px] text-xs font-noto font-medium text-white ">
                                    <div className="flex justify-start gap-[10px]">
                                        <p className="font-noto ">SPİ</p>
                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px] mt-[3px] bg-[#C51212] rounded-lg"></div>
                                            <span className="text-[#C51212] font-noto">{'>'}0,9</span>
                                        </div>

                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px] mt-[3px] bg-[#EEBE17] rounded-lg"></div>
                                            <span className="text-[#EEBE17] font-noto">{'>'}0,9-1</span>
                                        </div>

                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px]  mt-[3px] bg-[#47E69A] rounded-lg"></div>
                                            <span className="text-[#47E69A] font-noto">{'>'}1</span>
                                        </div>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody >
                            {planVacancy.map((item) => (
                                <tr key={item.id} className="border-b border-white h-[15px] border-[1px] border-solid bg-[#E9ECF3] ">
                                    <td className="  border-[1px] border-solid text-center border-white">
                                        <div className="flex justify-center gap-5">
                                            <div className="w-full bg-gray-200 mt-[5px] rounded-full h-1.5 dark:bg-gray-300">
                                                <div className="bg-[#22385F] h-1.5 rounded-full w-[67%] dark:bg-blue-500" ></div>
                                            </div>
                                            <span className="font-noto text-[11px] leading-[14.98px] font-[500] text-[#000000] ">67.6%</span>
                                        </div>

                                        <div className="flex justify-center gap-5">
                                            <div className="w-full bg-gray-200 mt-[5px] rounded-full h-1.5  dark:bg-gray-300">
                                                <div className="bg-[#4F7FC6] h-1.5 rounded-full w-[48%] dark:bg-blue-500" ></div>
                                            </div>
                                            <span className="font-noto text-[11px] leading-[14.98px] font-[500] text-[#4F7FC6] ">48.3%</span>
                                        </div>
                                    </td>

                                    <td className={` px-2 py-2 text-[14px]  text-center border-[1px] border-solid border-white  ${item.num < 0.9 ? 'text-red-500 !important' : item.num >= 1 ? 'text-green-500 !important' : 'text-yellow-500 !important'}`}>{item.num}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Cv Dəyərləndirmə */}
                <div className="w-[300px]   rounded-lg  bg-[#368AC2]">
                    <h1 className="text-center text-white text-[14px]   font-noto h-[18px]">Vakansiya elanı</h1>
                    <table className="min-w-full  bg-white border ">

                        <thead className="w-[10px]">
                            <tr className="bg-[#368AC2] border-[1px] border-solid border-[#368AC2] h-[15px] bo">
                                <th className="px-3 py-1  border-[1px] border-solid border-[#55A5DB] text-center  w-[70px] text-xs font-medium  font-noto text-white">
                                    <div>
                                        <div className="flex justify-center px-1 gap-[5px] ">
                                            <p>Plan</p>
                                            <div className="w-[10px]  h-[10px] mt-[3px] rounded-lg bg-[#22385F]"></div>
                                            <p>Faktiki</p>
                                            <div className="w-[10px] h-[10px] mt-[3px] rounded-lg bg-[#4F7FC6]"></div>
                                        </div>

                                    </div>
                                </th>
                                <th className="px-1 py-1 border-[1px] border-solid border-[#55A5DB]  text-center w-[70px] text-xs font-noto font-medium text-white ">
                                    <div className="flex justify-start gap-[10px]">
                                        <p className="font-noto ">SPİ</p>
                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px] mt-[3px] bg-[#C51212] rounded-lg"></div>
                                            <span className="text-[#C51212] font-noto">{'>'}0,9</span>
                                        </div>

                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px] mt-[3px] bg-[#EEBE17] rounded-lg"></div>
                                            <span className="text-[#EEBE17] font-noto">{'>'}0,9-1</span>
                                        </div>

                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px] mt-[3px] bg-[#47E69A] rounded-lg"></div>
                                            <span className="text-[#47E69A] font-noto">{'>'}1</span>
                                        </div>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody >
                            {planVacancy.map((item) => (
                                <tr key={item.id} className="border-b bg-white h-[15px] border-[1px] border-solid border-[#E9ECF3] ">
                                    <td className="  border-[1px] border-solid text-center border-[#E9ECF3]">
                                        <div className="flex justify-center gap-5">
                                            <div className="w-full bg-gray-200 mt-[5px] rounded-full h-1.5 dark:bg-gray-300">
                                                <div className="bg-[#22385F] h-1.5 rounded-full w-[67%] dark:bg-blue-500" ></div>
                                            </div>
                                            <span className="font-noto text-[11px] leading-[14.98px] font-[500] text-[#000000] ">67.6%</span>
                                        </div>

                                        <div className="flex justify-center gap-5">
                                            <div className="w-full bg-gray-200 mt-[5px] rounded-full h-1.5  dark:bg-gray-300">
                                                <div className="bg-[#4F7FC6] h-1.5 rounded-full w-[48%] dark:bg-blue-500" ></div>
                                            </div>
                                            <span className="font-noto text-[11px] leading-[14.98px] font-[500] text-[#4F7FC6] ">48.3%</span>
                                        </div>
                                    </td>

                                    <td className={` px-2 py-2 text-[14px]  text-center border-[1px] border-solid border-[#E9ECF3]  ${item.num < 0.9 ? 'text-red-500 !important' : item.num >= 1 ? 'text-green-500 !important' : 'text-yellow-500 !important'}`}>{item.num}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                {/* İmtahan */}
                <div className="w-[300px]  border-[#32B19F] rounded-lg  bg-[#219886]">
                    <h1 className="text-center text-white text-[14px]   font-noto h-[18px]">İmtahan</h1>
                    <table className="min-w-full  border-[#32B19F]  ">

                        <thead className="w-[10px]">
                            <tr className="bg-[#219886] border-[1px] border-solid border-[#32B19F] h-[15px] bo">
                                <th className="px-3 py-1  border-[1px] border-solid border-[#32B19F] text-center  w-[70px] text-xs font-medium  font-noto text-white">
                                    <div>
                                        <div className="flex justify-center px-1 gap-[5px] ">
                                            <p>Plan</p>
                                            <div className="w-[10px]  h-[10px] mt-[3px] rounded-lg bg-[#22385F]"></div>
                                            <p>Faktiki</p>
                                            <div className="w-[10px] h-[10px] mt-[3px] rounded-lg bg-[#4F7FC6]"></div>
                                        </div>

                                    </div>
                                </th>
                                <th className="px-1 py-1 border-[1px] border-solid border-[#32B19F]  text-center w-[70px] text-xs font-noto font-medium text-white ">
                                    <div className="flex justify-start gap-[10px]">
                                        <p className="font-noto ">SPİ</p>
                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px] mt-[3px] bg-[#C51212] rounded-lg"></div>
                                            <span className="text-[#C51212] font-noto">{'>'}0,9</span>
                                        </div>

                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px] mt-[3px] bg-[#EEBE17] rounded-lg"></div>
                                            <span className="text-[#EEBE17] font-noto">{'>'}0,9-1</span>
                                        </div>

                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px] mt-[3px] bg-[#47E69A] rounded-lg"></div>
                                            <span className="text-[#47E69A] font-noto">{'>'}1</span>
                                        </div>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody >
                            {planVacancy.map((item) => (
                                <tr key={item.id} className="border-b border-white h-[15px] border-[1px] border-solid bg-[#E9ECF3] ">
                                    <td className="  border-[1px] border-solid text-center border-white">
                                        <div className="flex justify-center gap-5">
                                            <div className="w-full bg-gray-200 mt-[5px] rounded-full h-1.5 dark:bg-gray-300">
                                                <div className="bg-[#22385F] h-1.5 rounded-full w-[67%] dark:bg-blue-500" ></div>
                                            </div>
                                            <span className="font-noto text-[11px] leading-[14.98px] font-[500] text-[#000000] ">67.6%</span>
                                        </div>

                                        <div className="flex justify-center gap-5">
                                            <div className="w-full bg-gray-200 mt-[5px] rounded-full h-1.5  dark:bg-gray-300">
                                                <div className="bg-[#4F7FC6] h-1.5 rounded-full w-[48%] dark:bg-blue-500" ></div>
                                            </div>
                                            <span className="font-noto text-[11px] leading-[14.98px] font-[500] text-[#4F7FC6] ">48.3%</span>
                                        </div>
                                    </td>

                                    <td className={` px-2 py-2 text-[14px]  text-center border-[1px] border-solid border-white  ${item.num < 0.9 ? 'text-red-500 !important' : item.num >= 1 ? 'text-green-500 !important' : 'text-yellow-500 !important'}`}>{item.num}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                {/* Mərhələ */}

                <div className="w-[300px]  rounded-lg  bg-[#177668]">
                    <h1 className="text-center text-white text-[14px]   font-noto h-[18px]">Mərhələ</h1>
                    <table className="min-w-full  bg-white border ">

                        <thead className="w-[10px]">
                            <tr className="bg-[#177668] border-[1px] border-solid border-[#177668] h-[15px] bo">
                                <th className="px-3 py-1  border-[1px] border-solid border-[#55A5DB] text-center  w-[70px] text-xs font-medium  font-noto text-white">
                                    <div>
                                        <div className="flex justify-center px-1 gap-[5px] ">
                                            <p>Plan</p>
                                            <div className="w-[10px]  h-[10px] mt-[3px] rounded-lg bg-[#22385F]"></div>
                                            <p>Faktiki</p>
                                            <div className="w-[10px] h-[10px] mt-[3px] rounded-lg bg-[#4F7FC6]"></div>
                                        </div>

                                    </div>
                                </th>
                                <th className="px-1 py-1 border-[1px] border-solid border-[#55A5DB]  text-center w-[70px] text-xs font-noto font-medium text-white ">
                                    <div className="flex justify-start gap-[10px]">
                                        <p className="font-noto ">SPİ</p>
                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px] mt-[3px] bg-[#C51212] rounded-lg"></div>
                                            <span className="text-[#C51212] font-noto">{'>'}0,9</span>
                                        </div>

                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px] mt-[3px] bg-[#EEBE17] rounded-lg"></div>
                                            <span className="text-[#EEBE17] font-noto">{'>'}0,9-1</span>
                                        </div>

                                        <div className="flex  justify-center">
                                            <div className="w-[10px] h-[10px] mt-[3px] bg-[#47E69A] rounded-lg"></div>
                                            <span className="text-[#47E69A] font-noto">{'>'}1</span>
                                        </div>
                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody >
                            {planVacancy.map((item) => (
                                <tr key={item.id} className="border-b bg-white h-[15px] border-[1px] border-solid border-[#E9ECF3] ">
                                    <td className="  border-[1px] border-solid text-center border-[#E9ECF3]">
                                        <div className="flex justify-center gap-5">
                                            <div className="w-full bg-gray-200 mt-[5px] rounded-full h-1.5 dark:bg-gray-300">
                                                <div className="bg-[#22385F] h-1.5 rounded-full w-[67%] dark:bg-blue-500" ></div>
                                            </div>
                                            <span className="font-noto text-[11px] leading-[14.98px] font-[500] text-[#000000] ">67.6%</span>
                                        </div>

                                        <div className="flex justify-center gap-5">
                                            <div className="w-full bg-gray-200 mt-[5px] rounded-full h-1.5  dark:bg-gray-300">
                                                <div className="bg-[#4F7FC6] h-1.5 rounded-full w-[48%] dark:bg-blue-500" ></div>
                                            </div>
                                            <span className="font-noto text-[11px] leading-[14.98px] font-[500] text-[#4F7FC6] ">48.3%</span>
                                        </div>
                                    </td>

                                    <td className={` px-2 py-2 text-[14px]  text-center border-[1px] border-solid border-[#E9ECF3]  ${item.num < 0.9 ? 'text-red-500 !important' : item.num >= 1 ? 'text-green-500 !important' : 'text-yellow-500 !important'}`}>{item.num}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>




             
                    <div className="w-[300px]  border-[#32B19F] rounded-lg   bg-[#22385F]">
                        <h1 className="text-center text-white text-[14px]   font-noto h-[18px]">İmtahan</h1>
                        <table className="min-w-full  border-[#32B19F] border  border-r-[10px] border-r-[#22385F]  ">

                            <thead className="w-[10px]">
                                <tr className="bg-[#22385F] border-[1px] border-solid border-[#32B19F] h-[15px] bo">
                                    <th className="px-1 py-1  border-[1px] border-solid border-[#32B19F] text-center  w-[77px] text-xs font-medium  font-noto text-white">
                                        <div >
                                            <div className="flex justify-center px-1 gap-[5px] ">
                                                <p>Plan</p>
                                                <div className="w-[10px]  h-[10px] mt-[3px] rounded-lg bg-[#22385F]"></div>
                                                <p>Faktiki</p>
                                                <div className="w-[10px] h-[10px] mt-[3px] rounded-lg bg-[#4F7FC6]"></div>
                                            </div>

                                        </div>
                                    </th>
                                    <th className="px-1 py-1 border-[1px] border-solid border-[#32B19F]  text-center w-[70px] text-xs font-noto font-medium text-white ">
                                        <div className="flex justify-start gap-[10px]">
                                            <p className="font-noto ">SPİ</p>
                                            <div className="flex  justify-center">
                                                <div className="w-[10px] h-[10px] mt-[3px] bg-[#22385F] rounded-lg"></div>
                                                <span className="text-[#C51212] font-noto">{'>'}0,9</span>
                                            </div>

                                            <div className="flex  justify-center">
                                                <div className="w-[10px] h-[10px] mt-[3px] bg-[#EEBE17] rounded-lg"></div>
                                                <span className="text-[#EEBE17] font-noto">{'>'}0,9-1</span>
                                            </div>

                                            <div className="flex  justify-center">
                                                <div className="w-[10px] h-[10px] mt-[3px] bg-[#47E69A] rounded-lg"></div>
                                                <span className="text-[#47E69A] font-noto">{'>'}1</span>
                                            </div>
                                        </div>
                                    </th>

                                </tr>
                            </thead>
                            <tbody >
                                {planVacancy.map((item) => (
                                    <tr key={item.id} className="border-b border-white h-[15px]    border-[1px] border-solid bg-[#E9ECF3] ">
                                        <td className="  border-[1px] border-solid text-center border-white">
                                            <div className="flex justify-center gap-5">
                                                <div className="w-full bg-gray-200 mt-[5px] rounded-full h-1.5 dark:bg-gray-300">
                                                    <div className="bg-[#22385F] h-1.5 rounded-full w-[67%] dark:bg-blue-500" ></div>
                                                </div>
                                                <span className="font-noto text-[11px] leading-[14.98px] font-[500] text-[#000000] ">67.6%</span>
                                            </div>

                                            <div className="flex justify-center gap-5">
                                                <div className="w-full bg-gray-200 mt-[5px] rounded-full h-1.5  dark:bg-gray-300">
                                                    <div className="bg-[#4F7FC6] h-1.5 rounded-full w-[48%] dark:bg-blue-500" ></div>
                                                </div>
                                                <span className="font-noto text-[11px] leading-[14.98px] font-[500] text-[#4F7FC6] ">48.3%</span>
                                            </div>
                                        </td>

                                        <td className={` px-2 py-2 text-[14px]  text-center border-[1px] border-solid border-white  ${item.num < 0.9 ? 'text-red-500 !important' : item.num >= 1 ? 'text-green-500 !important' : 'text-yellow-500 !important'}`}>{item.num}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
              


            </div>


        </div>
    )
}

export default Progress;