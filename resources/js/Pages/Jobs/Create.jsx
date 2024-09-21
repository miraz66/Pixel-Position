import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function Create() {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        location: "",
        schedule: "",
        tag: "",
        url: "",
        salary: "",
        feature: false, // Add feature field to the form data
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("jobs.store"));
    };

    return (
        <div className="min-h-screen bg-primary py-12 text-white">
            <div className="mx-auto max-w-7xl">
                <h1 className="pb-10 text-center text-3xl font-bold">
                    Post A Job
                </h1>

                <form action="/jobs" onSubmit={submit}>
                    <div className="mx-auto max-w-4xl space-y-4 border border-white/5 bg-white/5 p-6 shadow sm:rounded-lg">
                        {/* Title */}
                        <div>
                            <InputLabel
                                className="pb-2"
                                htmlFor="title"
                                value="Title"
                            />
                            <TextInput
                                className="w-full px-4 py-3 dark:bg-white/5"
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.title}
                                className="mt-2"
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <InputLabel
                                className="pb-2"
                                htmlFor="location"
                                value="Location"
                            />
                            <TextInput
                                className="w-full px-4 py-3 dark:bg-white/5"
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={data.location}
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.location}
                                className="mt-2"
                            />
                        </div>

                        {/* Schedule */}
                        <div>
                            <InputLabel
                                className="pb-2"
                                htmlFor="schedule"
                                value="Schedule"
                            />
                            <SelectInput
                                name="schedule"
                                className="w-full px-4 py-3 dark:bg-white/5"
                                value={data.schedule}
                                onChange={(e) =>
                                    setData("schedule", e.target.value)
                                }
                            >
                                <option className="bg-gray-800">Select</option>
                                <option
                                    className="bg-gray-800"
                                    value="Part Time"
                                >
                                    Part-time
                                </option>
                                <option
                                    className="bg-gray-800"
                                    value="Full Time"
                                >
                                    Full-time
                                </option>
                            </SelectInput>
                            <InputError
                                message={errors.schedule}
                                className="mt-2"
                            />
                        </div>

                        {/* Salary */}
                        <div>
                            <InputLabel
                                className="pb-2"
                                htmlFor="salary"
                                value="Salary"
                            />
                            <TextInput
                                className="w-full px-4 py-3 dark:bg-white/5"
                                type="text"
                                name="salary"
                                placeholder="Salary"
                                value={data.salary}
                                onChange={(e) =>
                                    setData("salary", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.salary}
                                className="mt-2"
                            />
                        </div>

                        {/* URL */}
                        <div>
                            <InputLabel
                                className="pb-2"
                                htmlFor="url"
                                value="Url"
                            />
                            <TextInput
                                className="w-full px-4 py-3 dark:bg-white/5"
                                type="text"
                                name="url"
                                placeholder="url"
                                value={data.url}
                                onChange={(e) => setData("url", e.target.value)}
                            />
                            <InputError message={errors.url} className="mt-2" />
                        </div>

                        {/* Feature */}
                        <div>
                            <InputLabel
                                className="pb-2"
                                htmlFor="feature"
                                value="Feature"
                            />
                            <Checkbox
                                className="w-full px-4 py-3 dark:bg-white/5"
                                name="feature"
                                checked={data.feature}
                                onChange={(e) =>
                                    setData("feature", e.target.checked)
                                } // Handle checkbox state
                            />
                            <InputError
                                message={errors.feature}
                                className="mt-2"
                            />
                        </div>

                        {/* Tag */}
                        <div>
                            <InputLabel
                                className="pb-2"
                                htmlFor="tag"
                                value="Tag"
                            />
                            <TextInput
                                className="w-full px-4 py-3 dark:bg-white/5"
                                type="text"
                                name="tag"
                                placeholder="Tag"
                                value={data.tag}
                                onChange={(e) => setData("tag", e.target.value)} // Handle tag state
                            />
                            <InputError message={errors.tag} className="mt-2" />
                        </div>

                        {/* Action Buttons */}
                        <div className="space-x-4 self-end">
                            <SecondaryButton type="button" onClick={reset}>
                                Reset
                            </SecondaryButton>

                            <PrimaryButton type="submit" disabled={processing}>
                                Post
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
