import React from 'react';
import { connect } from "react-redux";
import IndexPage from "./pages/index.page";

function App({message}) {
  return (
    <IndexPage/>
  );
}

const _mapStateToProps = (state) => ({
  
});

export default connect(_mapStateToProps)(App);
