import { Link } from "@inertiajs/react";

export default function () {
    return (
        <>
            <div className="group mx-auto flex max-w-5xl cursor-pointer gap-10 rounded-lg border border-white/5 bg-white/5 p-6 transition-colors duration-300 hover:border hover:border-blue-500/30">
                <img
                    className="h-28 w-28 rounded-md"
                    src="https://images.unsplash.com/photo-1611611158643-4796542ca752?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />

                <div className="w-full font-bold">
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-400">GovExec</p>
                        <div className="flex items-center gap-2">
                            <p className="rounded-md border border-gray-700/60 bg-primary p-1 px-2 text-xs">
                                Remote
                            </p>
                            <p className="rounded-md border border-gray-700/60 bg-primary p-1 px-2 text-xs">
                                22h
                            </p>
                        </div>
                    </div>
                    <h3 className="py-2 text-2xl transition-colors duration-300 group-hover:text-blue-500">
                        Full Stack Developer
                    </h3>
                    <div className="mt-8 flex justify-between">
                        <p className="text-sm text-gray-400">
                            Full Time - From $60,000
                        </p>
                        <div className="space-x-2 self-end">
                            <Link
                                className="rounded-md bg-white/10 px-2 py-1 text-sm transition-colors duration-300 hover:bg-white/25 hover:text-white"
                                href=""
                            >
                                Frontend
                            </Link>
                            <Link
                                className="rounded-md bg-white/10 px-2 py-1 text-sm transition-colors duration-300 hover:bg-white/25 hover:text-white"
                                href=""
                            >
                                Backend
                            </Link>
                            <Link
                                className="rounded-md bg-white/10 px-2 py-1 text-sm transition-colors duration-300 hover:bg-white/25 hover:text-white"
                                href=""
                            >
                                DevOps
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
