import { Link } from "@inertiajs/react";

export default function ({ job, tags }) {
    return (
        <>
            <div className="group mx-auto flex max-w-5xl cursor-pointer gap-10 rounded-lg border border-white/5 bg-white/5 p-6 transition-colors duration-300 hover:border hover:border-blue-500/30">
                <img
                    className="h-28 w-28 rounded-md"
                    src={job.employer.logo}
                    alt="logo"
                />

                <div className="w-full font-bold">
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-400">
                            {job.employer.name}
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="rounded-md border border-gray-700/60 bg-primary p-1 px-2 text-xs">
                                {job.location}
                            </p>
                            <p className="rounded-md border border-gray-700/60 bg-primary p-1 px-2 text-xs">
                                22h
                            </p>
                        </div>
                    </div>
                    <h3 className="py-2 text-2xl transition-colors duration-300 group-hover:text-blue-500">
                        {job.title}
                    </h3>
                    <div className="mt-8 flex justify-between">
                        <p className="text-sm text-gray-400">
                            <span>{job.schedule}</span> - From {job.salary}
                        </p>
                        <div className="space-x-2 self-end">
                            {tags.map(({ name }, index) => (
                                <Link
                                    key={index}
                                    className="rounded-md bg-white/10 px-2 py-1 text-sm transition-colors duration-300 hover:bg-white/25 hover:text-white"
                                    href={"tags/" + name}
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
