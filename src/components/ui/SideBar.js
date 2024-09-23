import { FaDog, FaRuler, FaRandom } from 'react-icons/fa';
import { GiWeightLiftingUp, GiWeightScale } from 'react-icons/gi';
import { RiWindyFill } from 'react-icons/ri';
import { LuBinary } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import React from 'react';

const SideBar = () => {
   return (
      <div
         className="fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col 
        bg-primary text-secondary shadow-lg"
      >
         <Link to="/dog-years">
            <SideBarIcon
               icon={<FaDog size="28" />}
               text="Dog Years Calculator"
            />
         </Link>

         <Link to="/feet-to-inches">
            <SideBarIcon
               icon={<FaRuler size="28" />}
               text="Feet to Inches Calculator"
            />
         </Link>

         <Link to="/barbell-weight">
            <SideBarIcon
               icon={<GiWeightLiftingUp size="28" />}
               text="Barbell Weight Calculator"
            />
         </Link>

         <Link to="/bmi">
            <SideBarIcon
               icon={<GiWeightScale size="28" />}
               text="BMI Calculator"
            />
         </Link>

         <Link to="/windchill">
            <SideBarIcon
               icon={<RiWindyFill size="28" />}
               text="Wind Chill Calculator"
            />
         </Link>

         <Link to="/random-number">
            <SideBarIcon
               icon={<FaRandom size="28" />}
               text="Random Number Generator"
            />
         </Link>

         <Link to="/decimal-to-binary">
            <SideBarIcon
               icon={<LuBinary size="28" />}
               text="Decimal To Binary"
            />
         </Link>
      </div>
   );
};

const SideBarIcon = ({ icon, text }) => (
   <div className="sidebar-icon group">
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
   </div>
);

export default SideBar;
