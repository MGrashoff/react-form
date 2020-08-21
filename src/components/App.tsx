import * as React from "react";
import {RegistrationForm} from "./form/RegistrationForm/RegistrationForm";
import './App.css';

class App extends React.Component {
    public render() {
        return (
            <div className="wrapper">
                <RegistrationForm/>
            </div>
        );
    }
}

export default App;
