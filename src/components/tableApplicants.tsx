function TableApplicants () {
    const tableData = [
        { id: 1, name: "Ali Mammadov" },
        { id: 2, name: "Leyla Aliyeva" },
        { id: 3, name: "Farid Hasanov" },
        { id: 4, name: "Tural Ismayilova" },
        { id: 5, name: "Sevinj Karimova" },
        { id: 6, name: "Elnur Guliev" },
        { id: 7, name: "Aysel Nurullayeva" },
        { id: 8, name: "Ali Mammadova" },
        { id: 9, name: "Leyla Aliyeva" },
        { id: 10, name: "Farid Hasanov" },
        { id: 11, name: "Sevinj Karimova" },
        { id: 12, name: "Ali Mammadova" },
        

    ];


    return (
        <div className="w-[220px]  mt-[5px] rounded-lg  bg-[#22385F] border-r border-l-[10px] border-l-[#22385F] ">
        <h1 className="text-center mt-2 text-white text-[18px] font-noto h-[35px]">İşə müraciət edən:</h1>
        <table className="min-w-full  border-[#55A5DB] ">

           
            <tbody>
                {tableData.map((item) => (
                    <tr key={item.id} className="border-b border-white h-[15px]  border-[1px] border-solid bg-white">
                        <td className="px-2 py-2 text-[14px] border-[1px] ] border-solid text-start border-[#E9ECF3] text-[#295197]">{item.name}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default TableApplicants;