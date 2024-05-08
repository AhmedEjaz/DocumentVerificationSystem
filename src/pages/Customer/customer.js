import React from "react"
import Uploader from "../../components/Uploader/Uploader";
import NavbarCustomer from "../../components/Customer/navbarCustomer";
const CustomerPage = () => {
    return(
        <div>
            <NavbarCustomer/>
            <div>
                <Uploader/>
            </div>
        </div>
    )
}

export default CustomerPage;