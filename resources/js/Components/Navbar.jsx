import { Link } from "@inertiajs/react";
import Logo from "@/Assets/logo.svg";

export default function Navbar() {
    return (
        <div className="border-b border-gray-800 bg-primary">
            <div className="mx-auto flex max-w-7xl justify-between py-4 text-white sm:px-6 lg:px-8">
                <Link>
                    <img src={Logo} alt="logo" />
                </Link>
                <div className="space-x-8">
                    <Link>Jobs</Link>
                    <Link>Career</Link>
                    <Link>Salaries</Link>
                    <Link>Companies</Link>
                </div>
                <div className="">
                    <Link>Post a job</Link>
                </div>
            </div>
        </div>
    );
}
