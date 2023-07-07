import { createContext } from "react";

const format = {
  response: "response",
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop",
};

const PageFormatContext = createContext(format.response);

export { PageFormatContext, format };
