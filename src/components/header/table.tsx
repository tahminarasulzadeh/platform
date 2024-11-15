import TableApplicants from "../tableApplicants";

function Table() {

    const data = [
        { id: 1, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },
        { id: 2, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },
        { id: 3, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },
        { id: 4, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },
        { id: 5, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },
        { id: 6, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },
        { id: 7, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },
        { id: 8, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },
        { id: 9, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },
        { id: 10, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },
        { id: 11, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },
        { id: 12, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22', actualCompletion: '01/Oct/22' },

    ];

    const cvData = [
        { id: 1, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },
        { id: 2, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },
        { id: 3, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },
        { id: 4, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },
        { id: 5, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },
        { id: 6, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },
        { id: 7, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },
        { id: 8, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },
        { id: 9, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },
        { id: 10, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },
        { id: 11, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },
        { id: 12, scheduledStart: '01/Oct/22', scheduledCompletion: '30/Nov/22', actualStart: '01/Oct/22' },

    ];

    return (
        <div className="flex justify-start mt-3 w-[1400px] overflow-x-scroll  ">
            <div className="flex ">
                <TableApplicants />
      {/* Vakansiya elanı */}
      <div className="w-[549px] mt-[5px]  rounded-lg  bg-[#295197]">
                <h1 className="text-center text-white text-[14px]   font-noto h-[18px]">Vakansiya elanı</h1>
                <table className="min-w-full  bg-white border ">

                    <thead className="w-[10px]">
                        <tr className="bg-[#295197] border-[1px] border-solid border-white h-[15px] bo">
                            <th className="px-1 py-1 border-[1px] border-solid border-white w-[70px] text-[10px] font-noto font-medium text-white ">Planlaşdırılmış Başlama:</th>
                            <th className="px-1 py-1 border-[1px] border-solid border-white  text-center w-[70px] text-xs font-noto font-medium text-white ">Planlaşdırılmış bitmə</th>
                            <th className="px-1 py-1 border-[1px] border-solid border-white text-center w-[70px] text-xs font-medium  font-noto text-white">Faktiki Başlama</th>
                            <th className="px-1 py-1  border-[1px] border-solid border-white text-center  w-[70px] text-xs font-medium  font-noto text-white">Faktiki Bitmə</th>
                        </tr>
                    </thead>
                    <tbody >
                        {data.map((item) => (
                            <tr key={item.id} className="border-b border-white h-[15px] border-[1px] border-solid bg-[#E9ECF3] ">
                                <td className=" px-2 py-2 text-center text-[14px] border-[1px] border-solid border-white text-[#295197]">{item.scheduledStart}</td>
                                <td className=" px-2 py-2 text-[14px]  text-center border-[1px] border-solid border-white text-[#295197]">{item.scheduledCompletion}</td>
                                <td className=" px-2 py-2  text-[14px]  text-center border-[1px] border-solid border-white text-[#295197]">{item.actualStart}</td>
                                <td className="  px-2 py-2 border-[1px] text-center border-solid border-white text-[14px] text-[#295197]">{item.actualCompletion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Cv Dəyərləndirmə */}
            <div className="w-[549px]  mt-[5px] rounded-lg  bg-[#368AC2]">
                <h1 className="text-center  text-white text-[14px] font-noto h-[18px]">Cv Dəyərləndirmə</h1>
                <table className="min-w-full  border-[#55A5DB] ">

                    <thead>
                        <tr className="bg-[#368AC2] border-[1px] border-solid border-[#55A5DB] h-[15px] bo">
                            <th className="px-1 py-1  border-[1px] border-solid border-white text-center w-[70px] text-[10px] font-noto font-medium text-white ">Planlaşdırılmış Başlama:</th>
                            <th className="px-1 py-1 border-[1px] border-solid border-white  text-center w-[70px] text-xs font-noto font-medium text-white ">Planlaşdırılmış bitmə</th>
                            <th className="px-1 py-1  border-[1px] border-solid border-white text-center w-[70px] text-xs font-medium  font-noto text-white">Faktiki Başlama</th>
                            <th className="px-1 py-1  border-[1px] border-solid border-white text-center  w-[70px] text-xs font-medium  font-noto text-white">
                                <div>
                                    <div className="flex justify-center gap-[5px] ">
                                        <p>Plan</p>
                                        <div className="w-[10px] h-[10px] mt-[3px] rounded-lg bg-[#22385F]"></div>
                                        <p>Faktiki</p>
                                        <div className="w-[10px] h-[10px] mt-[3px] rounded-lg bg-[#4F7FC6]"></div>
                                    </div>

                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cvData.map((item) => (
                            <tr key={item.id} className="border-b border-white  border-[1px] border-solid bg-white">
                                <td className=" px-2 py-2 text-[14px] border-[1px] border-solid text-center border-[#E9ECF3] text-[#295197]">{item.scheduledStart}</td>
                                <td className=" px-2 py-2  text-[14px]  border-[1px] border-solid text-center border-[#E9ECF3] text-[#295197]">{item.scheduledCompletion}</td>
                                <td className=" px-2 py-2  text-[14px]  border-[1px] border-solid text-center border-[#E9ECF3] text-[#295197]">{item.actualStart}</td>
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

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            {/* Imtahan */}
            <div className="w-[549px]  mt-[5px] rounded-lg  bg-[#219886]">
                <h1 className="text-center  text-white text-[14px] font-noto h-[18px]">Cv Dəyərləndirmə</h1>
                <table className="min-w-full  border-[#55A5DB] ">

                    <thead>
                        <tr className="bg-[#219886] border-[1px] border-solid border-[#33B3A0] h-[15px] bo">
                            <th className="px-1 py-1  border-[1px] border-solid border-white text-center w-[70px] text-[10px] font-noto font-medium text-white ">Planlaşdırılmış Başlama:</th>
                            <th className="px-1 py-1 border-[1px] border-solid border-white  text-center w-[70px] text-xs font-noto font-medium text-white ">Planlaşdırılmış bitmə</th>
                            <th className="px-1 py-1  border-[1px] border-solid border-white text-center w-[70px] text-xs font-medium  font-noto text-white">Faktiki Başlama</th>
                            <th className="px-1 py-1  border-[1px] border-solid border-white text-center  w-[70px] text-xs font-medium  font-noto text-white">
                                <div>
                                    <div className="flex justify-center gap-[5px] ">
                                        <p>Plan</p>
                                        <div className="w-[10px] h-[10px] mt-[3px] rounded-lg bg-[#22385F]"></div>
                                        <p>Faktiki</p>
                                        <div className="w-[10px] h-[10px] mt-[3px] rounded-lg bg-[#4F7FC6]"></div>
                                    </div>

                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cvData.map((item) => (
                            <tr key={item.id} className="border-b border-white  border-[1px] border-solid bg-[#DCEEEC] ">
                                <td className=" px-2 py-2 text-[14px] border-[1px] border-solid text-center border-[#E9ECF3] text-[#22385F]">{item.scheduledStart}</td>
                                <td className=" px-2 py-2  text-[14px]  border-[1px] border-solid text-center border-[#E9ECF3] text-[#22385F]">{item.scheduledCompletion}</td>
                                <td className=" px-2 py-2  text-[14px]  border-[1px] border-solid text-center border-[#E9ECF3] text-[#22385F]">{item.actualStart}</td>
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

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            
      
        </div>

    )
}

export default Table 