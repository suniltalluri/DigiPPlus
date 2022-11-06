import {Component} from "react"
import { BiRupee } from 'react-icons/bi';
import Headers from "../Headers"
import "./index.css"

class MyPayment extends Component{
    render(){
        return(
            <div className="PaymentPage">
                <Headers/>
                <div className="paymentBillContainer">
                      <div className="PaymentbillCard">
                        <h1 className="PaymentNavi_head">PAYMENT NAVIGATION</h1>
                        <p className="Invoices_head">INVOICES</p>
                        <p className="BankDetails">MY BANK DETAILS</p>
                        </div>
                    <div className="paymentDetailsCard">
                        <div className="paymentTimeCard">
                            <p className="payTime">Payment Date: <span>Oct.25,2022, 11:07</span></p>
                            <p className="payAmount">Amount Paid: 
                            <span><BiRupee className="rupeeIcon" />1350</span></p>
                        </div>
                        <p className="paymentText">Payment Made For Project</p>
                        <p className="paymentText">K10 Maths Text Book Solution</p>
                        <p className="paymentText">K12 Maths Text Book Solution</p>
                    </div>
                   <div className="paymentEarningCard">
                    <p className="LifeEarning_head">Lifetime Earning</p>
                    <p className="EarningAmount"><BiRupee className="rupeeIcon" />3150</p>
                    <p className="MonthEarning_head">This Month Earning</p>
                    <p className="EarningAmount"><BiRupee className="rupeeIcon"/>0</p>
                <div>

                </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default MyPayment