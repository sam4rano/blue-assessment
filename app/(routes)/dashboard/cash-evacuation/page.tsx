import ContainerCashEvacuation from "@/app/containers/cash-evacuation/ContainerCashEvacuation";
import Navbar from "@/app/containers/control-tower/Navbar";
import Sidebar from "@/app/containers/control-tower/Sidebar";




const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-row h-min-screen bg-color_off_white">
        <div className="w-[270px] pr-5">
          <Sidebar />
        </div>
        <ContainerCashEvacuation />
      </div>
    </>
  );
};

export default page;
