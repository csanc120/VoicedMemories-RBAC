'use client'
import { ClickableItemProps } from "~/components/pages/ClickableItem";
import { ItemBar } from "~/components/pages/ItemBar";
import { useRouter } from "next/navigation";

export function Patient({patientName}:{patientName:string}){
    let pageRouter = useRouter();

    let Doctors:ClickableItemProps = 
    {imgSrc:"/doctor-icon.png",
        labelText:"View Caregivers",
        imgDimensions: {width:200, height:200}, 
        pageLink:"/Dashboard/Settings"
    }

    let settings:ClickableItemProps = 
    {imgSrc:"/setting-line-icon.png", 
        labelText:"Settings",
        imgDimensions: {width:200, height:200}, 
        pageLink: "/Dashboard/Settings"
    }

    return (
        <div className="flex min-h-screen flex-col font-Inter"> 
            <div className="border-2 bg-primary_grey_blue text-center font-bold text-5xl">
               Dashboard Header
            </div>
            <label className="text-4xl pl-7"> 
                Welcome, {patientName}
            </label>
            <div className="flex flex-grow items-center justify-center flex-col">
                <div className="flex flex-grow">
                    <ItemBar clickableItems={[Doctors, settings]}/>
                </div>
                <button className = "border-2 rounded-md border-gold bg-primary_black mt-5 hover:bg-primary_gray hover:text-black text-white px-16 py-6 text-2xl">
                    Sign Out
                </button>
            </div>
        </div>
    )
}