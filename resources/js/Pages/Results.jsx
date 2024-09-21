import FindJobCard from "@/Components/FindJobCard";
import Navbar from "../Components/Navbar";
import TextInput from "@/Components/TextInput";
import { useState } from "react";

export default function Results({ jobs, tags }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if search term has at least 3 characters
        if (searchTerm.length < 3) {
            setError("Please enter at least 3 characters to search.");
            return; // Prevent form submission if validation fails
        }

        // If validation passes, clear the error and submit the form
        setError("");
        e.target.submit();
    };

    return (
        <div className="min-h-screen bg-primary pb-10 font-hanken-grotesk text-white">
            <Navbar />

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl py-20">
                    <h1 className="pb-6 text-center text-3xl font-bold">
                        Let's Find You A Great Job
                    </h1>

                    {/* Search Bar */}
                    <form action="/search" method="GET" onSubmit={handleSubmit}>
                        <TextInput
                            className="w-full px-4 py-3 dark:bg-white/5"
                            type="text"
                            name="search"
                            placeholder="Search Jobs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {/* Error Message */}
                        {error && (
                            <div className="mt-2 text-red-500">{error}</div>
                        )}
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
