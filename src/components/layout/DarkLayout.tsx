import { ReactNode } from "react";

type Props = {
  children?: ReactNode
};

export const DarkLayout = ({ children }: Props) => {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "2rem",
    }}>
      <h4 style={{color: "darkgray"}}>Dark Layout</h4>
      <div>
        {children}
      </div>
    </div>
  );
};