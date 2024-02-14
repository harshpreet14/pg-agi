import {workflow, company,bot, home} from '../assets';

function Sidebar() {
    const mainMenu = [
        { name: "Home", icon: home },
        { name: "Company", icon: company },
        { name: "AI Agent", icon: bot },
        { name: "Workflow", icon: workflow },
    ];
    

    return( 
    <div className="hidden md:w-20 lg:w-64 border-r border-gray-200 bg-[#FAFAFA] p-5 px-6 md:block ">
            <div className="flex items-center">
                <img src={company} alt="Company" className="w-12 h-12 cursor-default"/>
                <span className="hidden lg:block text-2xl px-3 font-bold text-[#0A337A]">Company</span>
            </div>
            <div className="mb-10">
                <p className="lg:block text-start text-[#818181] text-xs mt-10 mb-5 whitespace-nowrap overflow-hidden cursor-default">MAIN MENU</p>
                <ul>
                    {mainMenu.map((val, index) => (
                        <li key={index} className="mb-7 flex items-center cursor-pointer">
                            <img src={val.icon} alt={val.name} className="w-6 h-6"/>
                           <span className={`hidden md:hidden lg:block ml-3 hover:text-[#FF5151] ${val.name === "Home" ? "text-[#FF5151] " : ""} `}>{val.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar
