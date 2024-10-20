import { PluginCreator } from "tailwindcss/types/config";

export const centerPlugin: PluginCreator = ({addUtilities}) => {
  addUtilities({
    ".center": {
      "right": "50%",
      "bottom": "50%",
      "transform": "translate(50%, 50%)",
    },
    ".center-x": {
      "right": "50%",
      "transform": "translateX(50%)",
    },
    ".center-y": {
      "bottom": "50%",
      "transform": "translateY(50%)",
    },
  });
};
