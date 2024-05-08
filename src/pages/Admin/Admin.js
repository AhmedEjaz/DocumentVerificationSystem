import React from "react"
import Uploader from "../../components/Uploader/Uploader";
import AdminNavbar from "../../components/Admin/AdminNavbar";
const AdminPage = () => {
    return(
        <div>
            <AdminNavbar/>
            <div>
                <Uploader/>
            </div>
        </div>
    )
}

export default AdminPage;