import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "@/lib/use-follow-pointer";

const BigHeader = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <div className="m-[-25px]">
      <motion.div
        ref={ref}
        className="w-[50px] h-[50px] rounded-full bg-green-300 opacity-[0.5] flex justify-center items-center"
        animate={{ x, y }}
        title="sam"
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
    </div>
  );
};

export default BigHeader;

// import "./styles.css";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { useFollowPointer } from "./use-follow-pointer";

// export default function App() {
//   const ref = useRef(null);
//   const { x, y } = useFollowPointer(ref);

//   return (
//     <motion.div
//       ref={ref}
//       className="box"
//       animate={{ x, y }}
//       transition={{
//         type: "spring",
//         damping: 3,
//         stiffness: 50,
//         restDelta: 0.001
//       }}
//     />
//   );
// }
