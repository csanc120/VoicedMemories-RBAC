'use client'
import { ClickableItemProps } from "~/components/pages/ClickableItem";
import { ItemBar } from "~/components/pages/ItemBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Admin() {
    let pageRouter = useRouter();

    let Doctors: ClickableItemProps =
    {
        imgSrc: "/doctor-icon.png",
        labelText: "View Caregivers",
        imgDimensions: { width: 200, height: 200 },
        pageLink: "/Dashboard/Settings"
    }

    let settings: ClickableItemProps =
    {
        imgSrc: "/setting-line-icon.png",
        labelText: "Settings",
        imgDimensions: { width: 200, height: 200 },
        pageLink: "/Dashboard/Settings"
    }

    const [activePage, setActivePage] = useState<string>("");

    return (
        <div className="flex min-h-screen flex-col font-Inter">
            <div className="border-1 bg-primary_grey_blue text-center font-bold text-5xl">
                <button className="flex justify-start px-4 py-2 text-white rounded bg-blue-500 hover:bg-gray-600 rounded">
                    Back
                </button>
                Admin Dashboard
            </div>
            <div className="flex flex-1">
                <div className="flex flex-col space-y-8 w-64 p-8 bg-gray-800 text-white text-center">
                    <button
                        onClick={() => setActivePage("Distributors")}
                        className="p-4 px-8 bg-blue-300 hover:bg-blue-100 text-black rounded">
                        Distributors
                    </button>
                    <button
                        onClick={() => setActivePage("Admin")}
                        className="p-4 px-8 bg-blue-300 hover:bg-blue-100 text-black rounded">
                        Admin
                    </button>
                </div>
                <div className="flex-1 p-8 bg-gray-600 text-white">
                    {activePage === "" && <h2 className="text3xl font-semibold text-white">Welcome User</h2>}
                    {activePage === "Distributors" && (
                        <div>
                            <h2 className="text-3xl font-semibold">Distributors</h2>
                        </div>
                    )}
                    {activePage === "Admin" && (
                        <div>
                            <h2 className="text-3xl font-semibold">Admin</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
