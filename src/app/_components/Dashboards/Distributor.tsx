import { useState } from "react"
import { ClickableItemProps } from "~/components/pages/ClickableItem"
import { ItemBar } from "~/components/pages/ItemBar"

export function Distributor({fullName}:{fullName:string}){

    let [patientLicenses,setPatientLicenses] = useState<number>(10);
    let createPatient:ClickableItemProps = {
        imgSrc: "/addPatient.png", 
        imgDimensions :{
            width: 200,
            height: 200
        }, 
        labelText: "Create Patient", 
        pageLink: "/Dashboard"
    }

    let patientAssignments:ClickableItemProps = {
        imgSrc : "/assignments.png", 
        imgDimensions: {
            width:200, 
            height:200
        }, 
        labelText: "Assign Caregivers", 
        pageLink: "/Dashboard"
    }

    let deletePatient:ClickableItemProps = {
        imgSrc : "/RemovePatients.png", 
        imgDimensions: {
            width:200, 
            height:200
        }, 
        labelText: "Delete Patient", 
        pageLink: "/Dashboard"
    }

    let createCaregiver:ClickableItemProps = {
        imgSrc : "/femaleDoctor.png", 
        imgDimensions: {
            width:200, 
            height:200
        }, 
        labelText: "Create Caregiver", 
        pageLink: "/Dashboard"
    }

    return (
        <div className = "flex flex-col min-h-screen font-Inter bg-healthBlue text-navyBlue"> 
            <div className="text-center text-5xl border-2 border-black bg-dodgerBlue">Distributor Dashboard</div>
            <div className="flex justify-between">
                <span className="text-4xl pl-7">
                        Welcome, {"Carlos"} 
                </span>
                <span className="text-4xl pr-7">
                    Number of Patient Licenses: {patientLicenses}
                </span>
            </div>
            <div className="flex flex-grow flex-col items-center justify-center space-y-7">
                <div className="flex flex-col items-center justify-center space-y-9 border-2 bg-white pr-10 pl-10 pb-2 pt-2 rounded-3xl shadow-2xl">
                    <ItemBar clickableItems={[createPatient,deletePatient]}/>
                    <ItemBar clickableItems = {[createCaregiver, patientAssignments]}/>
                </div>
                <button className="px-16 py-4 text-white rounded-md bg-dodgerBlue hover:bg-gray-600 text-xl">Logout</button>
            </div>
        </div>
    )
}