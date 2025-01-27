"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { createPortal } from "react-dom";

const titleContext = createContext<{
  titleContainer: HTMLElement | null;
  registerTitleContainer: (_container: HTMLElement | null) => void;
}>({
  titleContainer: null,
  registerTitleContainer: (_container) => {
    throw new Error("Cannot register title container outside of provider");
  },
});

export const TitleProvider = ({ children }: PropsWithChildren) => {
  const [titleContainer, setTitleContainer] = useState<HTMLElement | null>(
    null,
  );

  return (
    <titleContext.Provider
      value={{
        titleContainer,
        registerTitleContainer: setTitleContainer,
      }}
    >
      {children}
    </titleContext.Provider>
  );
};

export const Title = () => {
  const { registerTitleContainer } = useContext(titleContext);
  return <h1 className="text-xl font-bold" ref={registerTitleContainer} />;
};

export const SetTitle = ({ children }: { children: string }) => {
  const { titleContainer } = useContext(titleContext);
  return titleContainer && createPortal(children, titleContainer);
};
