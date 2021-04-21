import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Route from "./Route";
import Tlush from "./Tlush";
import Permissions from "./Permissions";
import Python from "./Python";
import T106 from "./T106";
import T161 from "./T161";
import Otzar from "./Otzar";

//Time picker imports:
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const App = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
        <Header />
        <Route path="/Tlush">
          <Tlush />
        </Route>
        <Route path="/106">
          <T106 />
        </Route>
        <Route path="/161">
          <T161 />
        </Route>
        <Route path="/Otzar">
          <Otzar />
        </Route>
        <Route path="/Permissions">
          <Permissions />
        </Route>
        <Route path="/Python">
          <Python />
        </Route>
        <br />
        <br />
        App
      </div>
    </MuiPickersUtilsProvider>
  );
};
export default App;
