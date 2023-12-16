import React,{useState} from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import TabNav from "../TabNavItem/TabNav";
import TabItem from "../TabContent/TabItem";
import Daily from "./Daily/Daily";
import Weekly from "./Weekly/Weekly";
import Monthly from "./Monthly/Monthly";
import Yearly from "./Yearly/Yearly";

const Horoscope = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    return (
    <div className="px-16">
      <div className="pt-14">
            <h2 className="flex flex-row justify-start items-center text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-Lexend not-italic font-medium leading-[normal] ">Home 
            <span className="px-3"> <FaArrowRightLong /></span> <span className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px] font-inter not-italic font-medium leading-[normal]">Horoscopes</span><span className="px-3"> <FaArrowRightLong /></span>
             <span className="text-[color:var(--Black-text-color,#3A3A3A)] text-[14px]  font-inter not-italic font-medium leading-[normal]">Daily</span></h2>
        </div>


        <div className=" py-5">
      <ul className="bgtab h-[50px] border-[color:var(--grey-1,#A1A1A1)] rounded-[8px] border-[0.5px] border-solid flex items-center justify-center   overflow-hidden px-5">
        <TabNav
          title="Daily"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNav
          title="Weekly"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNav
          title="Monthly"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNav
          title="Yearly"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div>
        <TabItem id="tab1" activeTab={activeTab}>
          <Daily/>
        </TabItem>
        <TabItem id="tab2" activeTab={activeTab}>
          <Weekly/>
        </TabItem>
        <TabItem id="tab3" activeTab={activeTab}>
          <Monthly/>
        </TabItem>
        <TabItem id="tab4" activeTab={activeTab}>
          <Yearly/>
        </TabItem>
      </div>
    </div>



</div>   
  );
};

export default Horoscope
