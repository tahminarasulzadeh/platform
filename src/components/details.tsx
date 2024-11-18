import TableApplicants from "./tableApplicants";

function Detail() {
    const detailsData = [
        { id: 1, jobApplicant: 'Ali Mammadov', cityName: "Baku", companyName: "BakuTech", htSpeciaslist: 'Aysel Hasanova', position: "Chief Technol... ", source: "hellojob", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },
        { id: 2, jobApplicant: 'Leyla Aliyeva', cityName: "Baku", companyName: "Baku Pearl", htSpeciaslist: 'Farid Aliyev', position: "Head of Marke... ", source: "Linkedin", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },
        { id: 3, jobApplicant: 'Farid Hasanov', cityName: "Ganja", companyName: "AgroExp", htSpeciaslist: 'Səma Safarova', position: "Operations Dir... ", source: "Linkedin", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },
        { id: 4, jobApplicant: 'Narmin Safarova', cityName: "Ganja", companyName: "NaxTrans", htSpeciaslist: 'Hikmət Karimov', position: "Logistics Man... ", source: "Jobsearch", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },
        { id: 5, jobApplicant: 'Turaj Ismayilov', cityName: "Baku", companyName: "BakuTech", htSpeciaslist: 'Aysel Hasanova', position: "Software Engi... ", source: "Jobsearch", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },
        { id: 6, jobApplicant: 'Sevinj Karimova', cityName: "Lənkəran", companyName: "LenFarms", htSpeciaslist: 'Aysel Hasanova', position: "Production Sup... ", source: "glorry", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },
        { id: 7, jobApplicant: 'Elnur Guliyev', cityName: "Baku", companyName: "BakuTech", htSpeciaslist: 'Narmin Guliyeva', position: "Chief Technol... ", source: "Linkedin", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },
        { id: 8, jobApplicant: 'Ali Mammadov', cityName: "Baku", companyName: "BakuTech", htSpeciaslist: 'Aysel Hasanova', position: "Creative Direc... ", source: "Linkedin", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },
        { id: 9, jobApplicant: 'Ali Mammadov', cityName: "Baku", companyName: "BakuTech", htSpeciaslist: 'Aysel Hasanova', position: "Creative Direc... ", source: "Linkedin", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },
        { id: 10, jobApplicant: 'Ali Mammadov', cityName: "Baku", companyName: "BakuTech", htSpeciaslist: 'Aysel Hasanova', position: "Creative Direc... ", source: "Linkedin", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },
        { id: 11, jobApplicant: 'Ali Mammadov', cityName: "Baku", companyName: "BakuTech", htSpeciaslist: 'Aysel Hasanova', position: "Creative Direc... ", source: "Linkedin", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },
        { id: 12, jobApplicant: 'Ali Mammadov', cityName: "Baku", companyName: "BakuTech", htSpeciaslist: 'Aysel Hasanova', position: "Creative Direc... ", source: "Linkedin", sharingDate: "01/Oct/24", applicationDate: "05/Oct/24", vacancy: "01/Oct/22", review: "11/Jan/23" },

    ];


    return (

        <div className="flex justify-start mt-3 w-[1400px] rounded-lg overflow-x-scroll ">
            <div className="flex rounded-lg ">
            <TableApplicants /> 
            <div className=" w-[1300px] mt-[5px]  rounded-lg  bg-[#295197]">
          
          <table className="min-w-full  bg-white border border-r-[10px] rounded-lg border-r-[#22385F] ">
              <thead className="rounded">
                  <tr className="bg-[#E8EEF8]  mt-2 rounded-lg border-[1px] border-solid border-white h-[43px] bo">
                      <th className="px-1 py-1 rounded-lg font-noto border-[1px] border-solid border-white  text-center w-[80px] text-[14px] font-noto font-medium text-[#22385F] ">Şəhər adı:</th>
                      <th className="px-1 py-1  rounded-lg font-noto  border-[1px] border-solid border-white text-center w-[80px] text-[14px] font-medium  font-noto text-[#22385F]">Şirkətin adı:</th>
                      <th className="px-1 py-1 rounded-lg rounded-lg font-noto border-[1px] border-solid border-white text-center  w-[80px] text-[14px] font-medium  font-noto text-[#22385F]">HR mütəxəsssis:</th>
                      <th className="px-1 py-1 font-noto rounded-lg border-[1px] border-solid border-white text-center  w-[80px] text-[14px] font-medium  font-noto text-[#22385F]">Vəzifə:</th>
                      <th className="px-1 py-1 font-noto rounded-lg border-[1px] border-solid border-white text-center  w-[80px] text-[14px] font-medium  font-noto text-[#22385F]"> Müraciət mənbəyi:</th>
                      <th className="px-1 py-1  font-noto rounded-lg border-[1px] border-solid border-white text-center  w-[80px] text-[14px] font-medium  font-noto text-[#22385F]">Faktiki Bitmə</th>
                      <th className="px-1 py-1 font-noto rounded-lg border-[1px] border-solid border-white text-center  w-[80px] text-[14px] font-medium  font-noto text-[#22385F]">Faktiki Bitmə</th>
                      <th className="px-1 py-1 font-noto rounded-lg border-[1px] border-solid border-white text-center  w-[80px] text-[14px] font-medium  font-noto text-[#22385F]">Faktiki Bitmə</th>
                      <th className="px-1 py-1  font-noto rounded-lg border-[1px] border-solid border-white text-center  w-[80px] text-[14px] font-medium  font-noto text-[#22385F]">Faktiki Bitmə</th>
                  </tr>
              </thead>
              <tbody>
                  {detailsData.map((item) => (
                      <tr key={item.id} className="border-b border-[#DFE0E2] rounded-lg  border-[1px] border-solid bg-white">
                          <td className="px-3 py-2 font-noto text-[14px]  text-center border-[1px] border-solid border-[#DFE0E2] text-[#000000]">{item.cityName}</td>
                          <td className="px-3 py-2  font-noto text-[14px]   text-center border-[1px] border-solid border-[#DFE0E2] text-[#000000]">{item.companyName}</td>
                          <td className="px-3 py-2  font-noto  border-[1px] text-center border-solid border-[#DFE0E2] text-[14px]  text-[#000000]">{item.htSpeciaslist}</td>
                          <td className="px-3 py-2  font-noto border-[1px] text-center border-solid border-[#DFE0E2] text-[14px]  text-[#000000]">{item.position}</td>
                          <td className="px-3 py-2  font-noto  border-[1px] text-center border-solid border-[#DFE0E2] text-[14px]  text-[#000000]">{item.source}</td>
                          <td className="px-3 py-2  font-noto border-[1px] text-center border-solid border-[#DFE0E2] text-[14px]  text-[#000000]">{item.sharingDate}</td>
                          <td className="px-3 py-2 font-noto  border-[1px] text-center border-solid border-[#DFE0E2] text-[14px]  text-[#000000]">{item.applicationDate}</td>
                          <td className="px-3 py-2  font-noto border-[1px] text-center border-solid border-[#DFE0E2] text-[14px]  text-[#000000]">{item.vacancy}</td>
                          <td className="px-3 py-2 font-noto  border-[1px] text-center border-solid border-[#DFE0E2] text-[14px]  text-[#000000]">{item.review}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
            </div>

 
        </div>
      
    )
}

export default Detail;