'use client'
import { Patient } from "~/app/_components/Dashboards/Patient"
import { Admin } from "~/app/_components/Dashboards/Admin"
import { api } from "~/trpc/react"
import { useRouter } from "next/navigation";
import { Distributor } from "~/app/_components/Dashboards/Distributor";

export default function Dashboard() { 
    let fullName = "";
    const pageRouter = useRouter();

    if(typeof window != 'undefined'){
        const accessToken = sessionStorage.getItem("accessToken");
        fullName = sessionStorage.getItem("fullName") || "";
        //Fetch users name after login and place into the components chosen
        if(!fullName){
            if(accessToken){
                const response = api.userVerifier.getUserInformation.useQuery(accessToken);
                if(response.error){
                    pageRouter.back();
                }
                const data = response.data;
                const firstName = data?.firstName;
                const lastName = data?.lastName;
                if(firstName && lastName){
                    fullName = firstName + " " + lastName;
                    sessionStorage.setItem("fullName", fullName);
                }
            }else{
                pageRouter.back();
            }
        }
    }

    return (
        // <Admin></Admin>
        //<Distributor> <Distributor/>
        // <Patient> <Patient/>
        // <Cargiver/>
        //To-do: Fix hydration
        <div suppressHydrationWarning = {true}>
        
            <Distributor fullName ={"FullName"}/>
        {/* <Patient patientName = {fullName}/> */}
        </div>
    )
}