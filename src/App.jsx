import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initApp } from "./store/reducers/App/AppThunks";
import { Root } from "./components/Root";
import "./App.scss";
import "rsuite/dist/rsuite.min.css"

const App = () => {
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(initApp());
    }, []);

    return (
        <>
            <div className="container">
                <Root />
            </div>
        </>
    );
};

export default App;
