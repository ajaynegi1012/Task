import React from 'react';
import chartImg from './assest/Chart.png';
import pieImg from './assest/PieChart.png';


<canvas id="myChart" style="width:100%;max-width:600px"></canvas>

const RevenueComponent = () => {
    return (
        <>
            <div className="ticket-container">
                <div className="ticket-Sales">
                    <h4>Ticket Sale</h4>
                    <span>From 1-15 June, 2022</span>
                    <div className="graph-container">
                        <div className="statics">
                            <img src={chartImg} alt="charImg" />
                        </div>
                        <div className="statics-category">
                            <div className="values">
                                <span className="Circle" id="Blue"></span>
                                <p>VVIP</p>
                            </div>
                            <div className="values">
                                <span className="Circle" id="Green"></span>
                                <p>VIP</p>
                            </div>
                            <div className="values">
                                <span className="Circle" id="Orange"></span>
                                <p>Regular</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ticket-sales-right">
                    <div className="ticket-sales-right-upper-container">
                        <div className="upper-left-container">
                            <div className="details">
                                <p>VVIP</p>
                                <p>VIP</p>
                                <p>REGULAR</p>
                            </div>
                            <div className="value">
                                <p><span>$</span>4,200</p>
                                <p><span>$</span>7,000</p>
                                <p><span>$</span>8,000</p>
                            </div>
                        </div>
                        <div className="column-chart-container">
                            {/* <p>Column chart will apear here</p> */}
                            <div className="chart-vvip-column" />
                            <div className="chart-vip-column" />
                            <div className="chart-regular-column" />
                        </div>
                        <div className="upper-right-sales-details">
                            <p>200 tickets</p>
                            <p>500 tickets</p>
                            <p>1000 tickets</p>
                        </div>
                    </div>
                    <div className="ticket-sales-right-bottom-container">
                        <div className="total-revenue-container">
                            <p>Total Revenue : </p>
                            <p><span>$</span>19,200</p>
                        </div>
                        <div className="total-tickets-container">
                            <p>Total Tickets Sold : </p>
                            <p>1700</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sponsorShip-bottom-container">
                <h3>Sponsorship</h3>
                <div className="sponsorShip-container">
                    <div className="sponsorShip-left-container">
                        <div className="pie">
                            <img src={pieImg} alt="Pie Image" />
                        </div>
                        <p>Total Investment : <span>$</span>20,000</p>
                    </div>
                    <div className="sponsorShip-right-container">
                        <div className="sponsorShip-right-container-row">
                            <p></p>
                            <p>Investors</p>
                            <p>Invested</p>
                        </div>
                        <div className="sponsorShip-right-container-row" id="row1">
                            <div className="row">
                                <i className="RectangleIcon-blue" />
                                <p>Advertisement</p>
                            </div>
                            <p>4</p>
                            <p><span>$</span>1200</p>
                        </div>
                        <div className="sponsorShip-right-container-row" id="row2">
                            <div className="row">
                                <i className="RectangleIcon-green" />
                                <p>Printing</p>
                            </div>
                            <p>1</p>
                            <p><span>$</span>200</p>
                        </div>
                        <div className="sponsorShip-right-container-row" id="row3">
                            <div className="row">
                                <i className="RectangleIcon-orange" />
                                <p>Traveling</p>
                            </div>
                            <p>2</p>
                            <p><span>$</span>600</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RevenueComponent