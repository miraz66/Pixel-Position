import { Link } from "@inertiajs/react";

export default function TopJobCard({ job, tags }) {
    return (
        <>
            <div className="group w-1/3 cursor-pointer rounded-xl border border-white/5 bg-white/5 p-4 transition-colors duration-300 hover:border hover:border-blue-500/30">
                <div className="self-start text-sm">{job.employer.name}</div>

                <div className="mx-auto max-w-80 py-8 text-center">
                    <h1 className="text-2xl transition-colors duration-300 group-hover:text-blue-500">
                        {job.title}
                    </h1>
                    <p className="pt-1 text-sm text-gray-400">
                        <span>{job.schedule}</span> - From {job.salary}
                    </p>
                </div>

                <div className="flex justify-between text-sm">
                    <div className="space-x-2 self-end">
                        {tags.map(({ name }, index) => (
                            <Link
                                key={index}
                                className="rounded-md bg-white/10 px-2 py-1 text-xs transition-colors duration-300 hover:bg-white/25 hover:text-white"
                                href=""
                            >
                                {name}
                            </Link>
                        ))}
                    </div>

                    <img
                        className="h-14 w-14 rounded"
                        src={job.employer.logo}
                        alt="company-logo"
                    />
                </div>
            </div>
        </>
    );
}
