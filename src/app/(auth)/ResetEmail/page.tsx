'use client'
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

export default function ResetEmail(){
    const [success,setSuccess] = useState(true)
    const [phone, setPhone] = useState<string>("")

    function sendVerification(){
        setSuccess(true)
    }
    return (
        <div className = "min-h-screen border-2 border-black flex items-center justify-center font-sans bg-healthBlue">
            <Card className="shadow-2xl w-1/2 text-navyBlue">
                <CardHeader className="text-center">
                    <CardTitle className = "text-4xl">Reset Email</CardTitle>
                    <CardDescription className="text-xl">Enter the phone number associated with your account <br></br> for a verification code</CardDescription>
                </CardHeader>
                <CardContent className="justify-center flex">
                    <div className="w-1/2 space-y-1 flex-col flex">
                        <label className="font-semibold">Phone Number:</label>
                        <input onChange = {(e) => {setPhone(e.target.value)}} type = "tel" placeholder ="480-523-6734" className="border-black rounded-md border-2 focus:border-primary_baby_blue focus:outline-none p-1"></input>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <button className="px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-gray-600">Send Verfication Code</button>
                </CardFooter>
            </Card>  
        </div>
    )
}