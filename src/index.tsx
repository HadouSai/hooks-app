import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//import HookApp from './HookApp';
/* import { CounterApp } from "./components/01-useState/CounterApp";
import CounterWithCustomHookApp from "./components/01-useState/CounterWithCustomHookApp";
import { SimpleForm } from "./components/02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./components/02-useEffect/FormWithCustomHook";
import MultiplesCustomHooks from "./components/examples/MultiplesCustomHooks"; */
//import { ExampleUseRef } from "./components/04-useRef/ExampleUseRef";
//import LayoutEffect from "./components/05-useLayoutEffect/LayoutEffect";
/* import { Memorize } from "./components/06-memos/Memorize";
import { MemoHooks } from "./components/06-memos/MemoHook"; */
//import { CallbackHook } from "./components/06-memos/CallbackHook";
import { FatherTask } from "./components/Tarea/FatherTask";

ReactDOM.render(
  <React.StrictMode>
    <FatherTask />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
