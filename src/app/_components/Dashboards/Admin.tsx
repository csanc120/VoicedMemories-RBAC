'use client'
import { ClickableItemProps } from "~/components/pages/ClickableItem";
import { ItemBar } from "~/components/pages/ItemBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Admin() {
    let pageRouter = useRouter();


    const [activePage, setActivePage] = useState<string>("");
    const [distPage, setDistPage] = useState<string>("main");
    const [adminPage, setAdminPage] = useState<string>("main");

    return (
        <div className="flex min-h-screen flex-col font-Inter">
            <div className="border-1 bg-[#4CAFCE] text-center font-bold text-5xl">
                <button className="flex justify-start px-4 py-2 text-white rounded bg-blue-500 hover:bg-gray-600">
                    Back
                </button>
                <h1 className="text-5xl font-bold text-center">
                    Admin Dashboard
                </h1>
            </div>
            <div className="flex flex-1">
                <div className="flex flex-col space-y-8 w-64 p-8 bg-[#B0E0E6] text-white text-center border-t-8 border-[#4CAFCE]">
                    <button
                        onClick={() => { setActivePage("Distributors"); setDistPage("main") }}
                        className="p-4 px-8 bg-[#1E90FF] hover:bg-[#1B5590] text-white font-bold rounded-xl">
                        Distributors
                    </button>
                    <button
                        onClick={() => { setActivePage("Admin"); setAdminPage("main") }}
                        className="p-4 px-8 bg-[#1E90FF] hover:bg-[#1B5590] text-white font-bold rounded-xl">
                        Admin
                    </button>
                </div>
                <div className="flex-1 p-8 bg-[#B0E0E6] text-white border-l-8 border-t-8 border-[#4CAFCE]">
                    {activePage === "" && <h2 className="text3xl font-semibold text-white">Welcome User</h2>}
                    {activePage === "Distributors" && distPage === "main" && (
                        <div className="flex flex-col pt-6">
                            <div className="flex-1">
                                <h2 className="text-3xl text-black font-semibold">Distributor Management</h2>
                            </div>
                            <div className="flex flex-col pt-6">
                                <button
                                    onClick={() => { setActivePage("Distributors"); setDistPage("List") }}
                                    className="w-80 h-16 bg-[#1E90FF] hover:bg-[#1B5590] text-2xl font-semibold w-64 rounded-xl"
                                >
                                    Distributor List
                                </button>
                            </div>
                            <div className="flex flex-col pt-6">
                                <button
                                    onClick={() => { setActivePage("Distributors"); setDistPage("Create") }}
                                    className="w-80 h-16 bg-[#1E90FF] hover:bg-[#1B5590] text-2xl font-semibold w-64 rounded-xl"
                                >
                                    Create Distributor Account
                                </button>
                            </div>
                        </div>
                    )}
                    {activePage === "Distributors" && distPage === "List" && (
                        <div className="flex flex-row pt-6 text-black">
                            <button
                                onClick={() => { setActivePage("Distributors"); setDistPage("main"); }}
                                className="w-16 h-8 bg-[#1E90FF] hover:bg-[#1B5590] rounded-3xl text-white"
                            >
                                Back
                            </button>
                            <h2 className="text-3xl font-semibold pl-6">Distributor List</h2>
                        </div>
                        /* TODO: Distributor List Here */
                    )}
                    {activePage === "Distributors" && distPage === "Create" && (
                        <div className="flex flex-row pt-6 text-black">
                            <button
                                onClick={() => { setActivePage("Distributors"); setDistPage("main"); }}
                                className="w-16 h-8 bg-[#1E90FF] hover:bg-[#1B5590] rounded-3xl text-white"
                            >
                                Back
                            </button>
                            <h2 className="text-3xl font-semibold pl-6">Create Distributor Account</h2>
                        </div>
                        /* TODO: Create Distributor Account UI Here */
                    )}
                    {activePage === "Admin" && adminPage === "main" && (
                        <div className="flex flex-col pt-6">
                            <div className="flex-1">
                                <h2 className="text-3xl text-black font-semibold">Admin Tools</h2>
                            </div>
                            <div className="flex flex-col pt-6">
                                <button
                                    onClick={() => { setActivePage("Admin"); setAdminPage("LicenseEdit") }}
                                    className="w-80 h-16 bg-[#1E90FF] hover:bg-[#1B5590] text-2xl font-semibold w-64 rounded-xl"
                                >
                                    Set License Expiration Date
                                </button>
                            </div>
                            <div className="flex flex-col pt-6">
                                <button
                                    onClick={() => { setActivePage("Admin"); setAdminPage("Reminder") }}
                                    className="w-80 h-16 bg-[#1E90FF] hover:bg-[#1B5590] text-2xl font-semibold w-64 rounded-xl"
                                >
                                    Send Email Reminder
                                </button>
                            </div>
                        </div>
                    )}
                    {activePage === "Admin" && adminPage === "LicenseEdit" && (
                        <div className="flex flex-row pt-6 text-black">
                            <button
                                onClick={() => { setActivePage("Admin"); setAdminPage("main"); }}
                                className="w-16 h-8 bg-[#1E90FF] hover:bg-[#1B5590] rounded-3xl text-white"
                            >
                                Back
                            </button>
                            <h2 className="text-3xl font-semibold pl-6">Set License Expiration Date</h2>
                        </div>
                        /* TODO: Set License Expiration Date UI Here */
                    )}
                    {activePage === "Admin" && adminPage === "Reminder" && (
                        <div className="flex flex-row pt-6 text-black">
                            <button
                                onClick={() => { setActivePage("Admin"); setAdminPage("main"); }}
                                className="w-16 h-8 bg-[#1E90FF] hover:bg-[#1B5590] rounded-3xl text-white"
                            >
                                Back
                            </button>
                            <h2 className="text-3xl font-semibold pl-6">Send Email Reminder</h2>
                        </div>
                        /* TODO: Send Email Reminder UI Here */
                    )}
                </div>
            </div>
        </div >
    )
}
