import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
// datatables
import 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'datatables.net-buttons-dt';
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-buttons/js/buttons.print.mjs';
import 'datatables.net-responsive-dt';
import 'datatables.net-staterestore-dt';
import jszip from 'jszip';
import pdfmake from 'pdfmake';
function Category_list() {

    useEffect(() => {
        $.fn.dataTable.Buttons.jszip = jszip;
        $.fn.dataTable.Buttons.pdfMake = pdfmake;

        const table = $('.data-table').DataTable({
            responsive: true,
            stateSave: true,
            autoWidth: true,
            columnDefs: [
                { orderable: false, targets: 0 },
                { orderable: false, targets: -1 },
            ],
            lengthMenu: [10, 25, 50, 100, { label: 'All', value: -1 }],
            layout: {
                top: {
                    buttons: [
                        'colvis',
                        {
                            extend: 'csv',
                            text: 'CSV',
                            exportOptions: {
                                columns: ':visible',
                                modifier: {
                                    page: 'current'
                                }
                            }
                        },
                        {
                            extend: 'print',
                            text: 'Print',
                            exportOptions: {
                                columns: ':visible',
                                modifier: {
                                    page: 'current'
                                }
                            }
                        }
                    ]
                }
            }
        })

        return () => {
            table.destroy();
        };

    }, [])

    const data = [
        {
            id: 1,
            name: "parvez",
            status:'1'
        },
        {
            id: 1,
            name: "parvez",
            status:'0'
        },
        {
            id: 1,
            name: "parvez",
            status:'1'
        },


    ]

    return(
        <AuthenticatedLayout>
             <h1 className="text-lg mb-3">
                Category List
            </h1>

            <div className="flex justify-between items-center mb-3">
                <button className="btn btn-error">All Delete</button>
                <Link href={route('medicine.category.add')} className="btn btn-primary">Add Category</Link>
            </div>

            <table className="data-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((data, index) =>
                    (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.status == 1 ? <span className="badge badge-success">Active</span> : <span className="badge badge-error">Inactive</span>}</td>

                            <td className="text-end">
                                <button className="btn btn-primary btn-sm m-1">Edit</button>
                                <button className="btn btn-error btn-sm m-1">Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </AuthenticatedLayout>
    )
}

export default Category_list


