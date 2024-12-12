import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Add_unit() {
    return(
        <AuthenticatedLayout>
            <h1 className="text-lg mb-3">
                Add Unit
            </h1>
            <div className="lg:grid grid-cols-2 p-6">
                <form>
                    <div className="form-control mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="input input-primary border-0 focus:border focus:ring-0 focus:outline-none" placeholder="Name" />
                    </div>

                    <div className="form-control mb-4">
                        <label htmlFor="status">Status</label>
                        <select className="select select-primary border-0 focus:border focus:ring-0 focus:outline-none" id="status">
                            <option value="1">Active</option>
                            <option value="">Inactive</option>
                        </select>
                    </div>
                <div className="flex justify-between">
                    <button className="btn btn-error m-1">Reset</button>
                    <button className="btn btn-primary m-1">Submit</button>
                </div>
                </form>


            </div>
        </AuthenticatedLayout>
    )
}

export default Add_unit

