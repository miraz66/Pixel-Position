import React from "react";

export default function TopJobs() {
    return (
        <>
            <div className="text-white">
                <div className="flex items-center gap-2 pb-6">
                    <div className="h-3 w-3 bg-white"></div>
                    <h1 className="text-xl font-bold">Top Jobs</h1>
                </div>

                <div className="flex justify-between gap-10">
                    {Array.map((_, index) => (
                        <TopJobCard key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}
