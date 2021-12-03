import React, { } from "react";
import "./css/index.page.css";
import LeftLayout from "../components/LeftLayout";
import RightLayout from "../components/RightLayout";
import TopBar from "../components/TopBar";
import ToolBar from "../components/ToolBar";
import { connect } from "react-redux";

const CallendarPage = () => {
    return (
        <div className={"indexpage-container"}>
            <LeftLayout />
            <RightLayout>
                <TopBar />
                <ToolBar/>
            </RightLayout>
        </div>
    )
}
const _mapStateToProps = (state) =>({
    
});


const _mapDispatchToProps = {
    
}
export default connect(_mapStateToProps,_mapDispatchToProps)(CallendarPage);