import { Link } from "@inertiajs/react";
import Logo from "@/Assets/logo.svg";

export default function Navbar({ auth }) {
    return (
        <div className="border-b border-gray-800 bg-primary">
            <div className="mx-auto flex max-w-7xl justify-between py-4 text-white sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center">
                    <img src={Logo} alt="logo" />
                </Link>
                <div className="space-x-8">
                    <Link className="transition-colors duration-300 hover:text-gray-400">
                        Jobs
                    </Link>
                    <Link className="transition-colors duration-300 hover:text-gray-400">
                        Career
                    </Link>
                    <Link className="transition-colors duration-300 hover:text-gray-400">
                        Salaries
                    </Link>
                    <Link className="transition-colors duration-300 hover:text-gray-400">
                        Companies
                    </Link>
                </div>
                <div>
                    {auth ? (
                        <div className="space-x-4">
                            <Link
                                href="jobs/create"
                                className="rounded-md bg-white/10 px-2 py-1 text-sm transition-colors duration-300 hover:bg-white/25 hover:text-white"
                            >
                                Post a Job
                            </Link>

                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="rounded-md bg-white/10 px-2 py-1 text-sm transition-colors duration-300 hover:bg-white/25 hover:text-white"
                            >
                                Log Out
                            </Link>
                        </div>
                    ) : (
                        <div className="space-x-4">
                            <Link
                                href={route("login")}
                                className="rounded-md bg-white/10 px-2 py-1 text-sm transition-colors duration-300 hover:bg-white/25 hover:text-white"
                            >
                                Login
                            </Link>
                            <Link
                                href={route("register")}
                                className="rounded-md bg-white/10 px-2 py-1 text-sm transition-colors duration-300 hover:bg-white/25 hover:text-white"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
