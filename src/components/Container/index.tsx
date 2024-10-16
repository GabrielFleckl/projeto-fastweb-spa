import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  id?: string;
};

function Container({ children, id }: ContainerProps) {
  return (
    <section id={id} className="m-auto w-full px-8 lg:w-full lg:px-8 xl:w-[80%] xl:px-0">
      {children}
    </section>
  );
}

export default Container;
