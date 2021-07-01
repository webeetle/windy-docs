import React from "react";
import { WindyProvider } from "@webeetle/windy";

// Default implementation, that you can customize
function Root({ children }) {
  return <WindyProvider>{children}</WindyProvider>;
}

export default Root;
