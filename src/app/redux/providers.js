"use client"

import DisplayUser from "../displayuser/page"
import { store } from "./store"
import { Provider } from "react-redux"


export function Providers({children}){
  return <Provider store={store}>{children}</Provider>
}



// export function Providers({childern}){
//     return  <Provider store={store}>{childern}</Provider>;
//   }

// "use client";

// import { store } from "./store";
// import { Provider } from "react-redux"; // Use ES6 import instead of require

// export function Providers({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }
