import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from 'datatables.net-react';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.html5';
import jszip from 'jszip';
import pdfmake from 'pdfmake';
DataTable.use(DT);
DT.Buttons.jszip(jszip);
DT.Buttons.pdfMake(pdfmake);
function Customer_list() {

    const data = [
        [
            1,
            "parvez",
            'dhaka',
            '39208423',
            'parvez@gmail.com',
        ],
        [
            2,
            "parvez",
            'dhaka',
            '39208423',
            'parvez@gmail.com',
        ],
        [
            3,
            "parvez",
            'dhaka',
            '39208423',
            'parvez@gmail.com',
        ],
        [
            4,
            "parvez",
            'dhaka',
            '39208423',
            'parvez@gmail.com',
        ]
    ]

    return (
        <AuthenticatedLayout>
            <h1 className="text-lg mb-3">
                Customer List
            </h1>

            <div className="flex justify-between items-center mb-3">
                <button className="btn btn-error">All Delete</button>
                <button className="btn btn-primary">Add Customer</button>
            </div>

            <div className="data-table">
                <DataTable className="table"
                options={{
                responsive: true,
                layout: {
                    top: 'buttons',
                  },
                select: true,
            }}
             data={data}
             >
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Mobile</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                </DataTable>
            </div>

        </AuthenticatedLayout>
    )

}

export default Customer_list;
