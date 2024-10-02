import { X } from "lucide-react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Sidebar = ({ onClose }) => {
   return (
      <motion.div
         initial={{ width: 0 }}
         animate={{ width: "100%" }}
         exit={{ width: 0 }}
         className="absolute inset-0 z-10 bg-black/20"
      >
         <div className="min-h-svh max-w-lg bg-white">
            <div className="bg-gray-100 relative flex gap-3 p-4">
               <Button className="bg-navyBlue py-0 text-white">Menu</Button>
               <Button
                  variant="outline"
                  className="text-slate text-gray border-navyBlue py-0"
               >
                  Categories
               </Button>

               <span
                  onClick={onClose}
                  className="absolute right-5 top-0 translate-y-1/2"
               >
                  <X size={35} />
               </span>
            </div>
            <div className="flex flex-col">
               {/* {links} */}
               <div></div>
            </div>
         </div>
      </motion.div>
   );
};

Sidebar.propTypes = {
   onClose: PropTypes.func.isRequired,
};
export default Sidebar;
