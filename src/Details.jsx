import React from 'react'

const Details = () => {
    return (
        <>
            <p className="Details-heading">Details</p>
            <div className="ticketSale-table">
                <div className="header">
                    <p>Ticket Sale</p>
                    <p><span>$</span>19200</p>
                </div>
                <table cellSpacing={0}>
                    <tr>
                        <th className="table-heading">Type</th>
                        <th className="table-heading">Sold</th>
                        <th className="table-heading">Amount</th>
                    </tr>
                    <tr>
                        <td className="table-data">VVIP</td>
                        <td className="table-data">200</td>
                        <td className="table-data">$4200</td>
                    </tr>
                    <tr>
                        <td className="table-data">VIP</td>
                        <td className="table-data">500</td>
                        <td className="table-data">$7000</td>
                    </tr>
                    <tr>
                        <td className="table-data">Regular</td>
                        <td className="table-data">1000</td>
                        <td className="table-data">$8000</td>
                    </tr>
                </table>
            </div>
            <div className="ticketSale-table">
                <div className="Sponsorship-header">
                    <p>Sponsorship</p>
                    <p><span>$</span>2400</p>
                </div>
                <table cellSpacing={0}>
                    <tr>
                        <th className="table-heading"></th>
                        <th className="table-heading">Investors</th>
                        <th className="table-heading">Invested</th>
                    </tr>
                    <tr>
                        <td className="table-data">Advertising</td>
                        <td className="table-data">4</td>
                        <td className="table-data">$1200</td>
                    </tr>
                    <tr>
                        <td className="table-data">Printing</td>
                        <td className="table-data">1</td>
                        <td className="table-data">$200</td>
                    </tr>
                    <tr>
                        <td className="table-data">Travelling</td>
                        <td className="table-data">2</td>
                        <td className="table-data">$600</td>
                    </tr>
                    <tr>
                        <td className="table-data">Others</td>
                        <td className="table-data">1</td>
                        <td className="table-data">$400</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Details