import ApplicationLogo from '@/Components/auth/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 dark:bg-slate-800 pt-6 sm:justify-center sm:pt-0">

             <div className="mt-6 w-full overflow-hidden bg-white dark:bg-slate-950 dark:text-white px-10 py-6 shadow-md sm:max-w-md sm:rounded-lg">
            <div className='flex items-center justify-center'>
                <Link href="/">
                    <ApplicationLogo src={'name'}  className="h-20 w-20 fill-current text-gray-500" alt="Logo" />
                </Link>
            </div>
                {children}
            </div>



        </div>
    );
}
