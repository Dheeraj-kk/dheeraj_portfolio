"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Reactangle from "./Reactangle";

const ReactangleTransition = () => {
    const pathname = usePathname();
    return (
      <AnimatePresence mode="wait"> 
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 z-50 flex pointer-events-none"
          >
            <Reactangle />
          </div>
        </div>
      </AnimatePresence>
    );
}

export default ReactangleTransition