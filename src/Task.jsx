import React, { useState } from 'react';
import './assest/style.css'
import RevenueComponent from './RevenueComponent';
import Details from './Details';

const Task = () => {
    let [dataShown, setDataShown] = useState(false);
    let [isActive, setIsActive] = useState(false);

    let showComponent = () => {
        setIsActive(current => !current);
        setDataShown((dataShown) => !dataShown);
    }
    return (
        <>
            <div className="container">
                <div className="Heading">
                    <i className="Ticket" />
                    <p className="right-component">Rock Revolt: A Fusion of Power and Passion</p>
                </div>
                <div className="box-container">
                    <div className="firstBox">
                        <div className="left-container">
                            <p>Total Revenue</p>
                            <p className="Number">$11,763</p>
                            <div className="Increment">
                                <i className="Arrow-drop"></i>
                                <p>5.39%</p>
                            </div>
                        </div>
                        <i className="RevenueIcon"></i>
                        {/* <div className="image-container">
                        </div> */}
                    </div>
                    <div className="ProfitContainer">
                        <div className="left-container">
                            <p>Profit</p>
                            <p className="Number">$32,218</p>
                        </div>
                        <i className="DollarIcon"></i>
                    </div>
                    <div className="CostContainer">
                        <div className="left-container">
                            <p>Cost</p>
                            <p className="Number">$20,455</p>
                        </div>
                        <i className="CostIcon"></i>
                        {/* <div className="image-container">
                        </div> */}
                    </div>
                </div>
                <div className="Btn-container">
                    <button onClick={showComponent} className={isActive ? "btn-active" : " "}>Revenue</button>
                    <button>Cost</button>
                </div>
                {
                    dataShown ? <RevenueComponent /> : " "
                }
                <Details />
            </div>
        </>
    )
}

export default Task