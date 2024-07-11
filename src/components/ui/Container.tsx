// import { ReactNode } from "react";

import { children, ReactNode } from "react";

// type TContainerProps = {
//   children: ReactNode;
// };

// const Container = ({ children }: TContainerProps) => {
//   return (
//     <>
//       <div className="h-screen w-full max-w-7xl mx-auto">{children}</div>
//     </>
//   );
// };

// export default Container;

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className=" h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
