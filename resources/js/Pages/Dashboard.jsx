import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
export default function Dashboard() {
    // const user = usePage().props.auth.user
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight ">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className='grid grid-cols-3 gap-3'>
                <div className='glass bg-primary card p-4'>
                    <div className='card-header'>
                        hgjgfhj
                    </div>

                </div>
                <div className='glass bg-success card p-4 '>
            jghjg
                </div>
                <div className='glass card p-4 '>
            hgjg
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
