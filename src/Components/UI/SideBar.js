import { FaDog, FaRuler } from 'react-icons/fa';
import { GiWeightLiftingUp, GiWeightScale, GiCardRandom } from 'react-icons/gi'
import { RiWindyFill } from "react-icons/ri";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col 
                        bg-primary text-secondary shadow-lg">

            <SideBarIcon icon={<FaDog size="28" />} text="Dog Years Calculator" />
        </div>
    );
};

const SideBarIcon = ({ icon, text }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default SideBar;