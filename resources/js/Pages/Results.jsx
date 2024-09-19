import FindJobCard from "@/Components/FindJobCard";
import Navbar from "../Components/Navbar";
import TextInput from "@/Components/TextInput";
import { useState } from "react";

export default function Results({ jobs, tags }) {
    return (
        <div className="min-h-screen bg-primary pb-10 font-hanken-grotesk text-white">
            <Navbar />

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl py-20">
                    <h1 className="pb-6 text-center text-3xl font-bold">
                        Let's Find You A Great Job
                    </h1>

                    {/* Search Bar */}
                    <form action="/search" method="GET">
                        <TextInput
                            className="w-full px-4 py-3 dark:bg-white/5"
                            type="text"
                            name="search"
                            placeholder="Search Jobs..."
                        />
                    </form>
                </div>

                <div className="space-y-6">
                    {jobs.length > 0 ? (
                        jobs.map((job, index) => (
                            <div key={index}>
                                <FindJobCard job={job} tags={tags} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No jobs found</p>
                    )}
                </div>
            </div>
        </div>
    );
}
