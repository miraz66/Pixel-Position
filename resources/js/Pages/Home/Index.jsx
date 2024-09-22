import FindJobCard from "@/Components/FindJobCard";
import Navbar from "@/Components/Navbar";
import TextInput from "@/Components/TextInput";
import TopJobCard from "@/Components/TopJobCard";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";

const Tag = [
    "Frontend",
    "Backend",
    "Fullstack",
    "UI/UX",
    "Mobile",
    "DevOps",
    "QA",
    "Data Science",
    "Cloud",
    "Backend",
    "Fullstack",
    "UI/UX",
    "Mobile",
    "DevOps",
    "QA",
    "Data Science",
    "Cloud",
    "Cloud",
    "Backend",
    "Fullstack",
    "UI/UX",
    "Mobile",
    "DevOps",
    "QA",
    "Data Science",
    "Cloud",
];

export default function Index({ jobs, tags, auth }) {
    const { flash } = usePage().props;
    return (
        <div className="bg-primary font-hanken-grotesk text-white">
            <Head title="Home" />
            <Navbar auth={auth} />

            {/* {flash.success && (
                <div className="rounded bg-green-500 p-4 text-white">
                    {flash.success}
                </div>
            )} */}

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

                {/* Jobs */}
                <div className="">
                    {/* Top Jobs */}
                    <div className="pb-20">
                        <div className="flex items-center gap-2 pb-6">
                            <div className="h-3 w-3 bg-white"></div>
                            <h1 className="text-xl font-bold">Top Jobs</h1>
                        </div>

                        <div className="flex justify-between gap-10">
                            {jobs.slice(0, 3).map((job, index) => (
                                <TopJobCard job={job} tags={tags} key={index} />
                            ))}
                        </div>
                    </div>

                    {/* Featured Jobs */}
                    <div className="pb-20">
                        <div className="flex items-center gap-2 pb-4">
                            <div className="h-3 w-3 bg-white"></div>
                            <h1 className="text-xl font-bold">Tag</h1>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {Tag.map((tag, index) => (
                                <Link
                                    key={index}
                                    href={"tags/" + tag}
                                    className="rounded-md bg-white/10 px-2 py-1 text-sm transition-colors duration-300 hover:bg-white/25 hover:text-white"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Find Jobs */}
                    {/* Add infinite scroll */}
                    <div>
                        <div className="flex items-center gap-2 pb-6">
                            <div className="h-3 w-3 bg-white"></div>
                            <h1 className="text-xl font-bold">Find Jobs</h1>
                        </div>

                        <div className="space-y-6">
                            {jobs.map((job, index) => (
                                <div key={index}>
                                    <FindJobCard job={job} tags={tags} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
