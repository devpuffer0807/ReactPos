import React from 'react';
import { connect } from "react-redux";
import CallendarPage from "./pages/callendar.page";
import "./index.css"

function App({message}) {
  return (
    <div className="App">
      <CallendarPage/>
    </div>
  );
}

const _mapStateToProps = (state) => ({
  message: state['store']['callendar']['reminder']['value']
});

// { console.log(state['store']['callendar']['reminder']['value']); return state; }

// const _mapDispatchToProps = {
//   functionName,
// };


export default connect(_mapStateToProps)(App);
