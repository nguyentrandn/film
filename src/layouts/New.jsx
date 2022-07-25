import {useEffect, useState, useContext} from "react"
import {ResultContext} from "../App"
import axios from "axios"

function New() {
    const [customer, setCustomer] = useState([])
    useEffect(() => {
        axios.get('http://192.168.0.106:8080/customer/api/v1')
        .then((response) => {
            console.log(response.data);
            setCustomer(response.data)
            if (response.data == 404) {
                alert("loi")
            }else{

            }
        })
    },[])

    return ( 
    <div>
        {customer.map((cus) => (
            <div>
                {cus.customerName}
                
            </div>
        ))}
    </div> );
}

export default New;