import { Link } from "@inertiajs/react";

export default function TopJobCard() {
    return (
        <>
            <div className="group w-1/3 cursor-pointer rounded-xl border border-white/5 bg-white/5 p-4 transition-colors duration-300 hover:border hover:border-blue-500/30">
                <div className="self-start text-base">Laracasts</div>

                <div className="mx-auto max-w-60 py-8 text-center">
                    <h1 className="text-2xl transition-colors duration-300 group-hover:text-blue-500">
                        Laravel Developer
                    </h1>
                    <p className="pt-1 text-sm text-gray-400">
                        Full Time - From $60,000
                    </p>
                </div>

                <div className="flex justify-between text-sm">
                    <div className="space-x-2 self-end">
                        <Link
                            className="rounded-md bg-white/10 px-2 py-1 text-xs transition-colors duration-300 hover:bg-white/25 hover:text-white"
                            href=""
                        >
                            Frontend
                        </Link>
                        <Link
                            className="rounded-md bg-white/10 px-2 py-1 text-xs transition-colors duration-300 hover:bg-white/25 hover:text-white"
                            href=""
                        >
                            Backend
                        </Link>
                        <Link
                            className="rounded-md bg-white/10 px-2 py-1 text-xs transition-colors duration-300 hover:bg-white/25 hover:text-white"
                            href=""
                        >
                            DevOps
                        </Link>
                    </div>

                    <img
                        className="h-14 w-14 rounded"
                        src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="company-logo"
                    />
                </div>
            </div>
        </>
    );
}
