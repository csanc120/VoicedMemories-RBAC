'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card"

export default function ResetPassword(){
    const [password, setPassword] = useState("");
    const pageRouter = useRouter()

    function resetPassword(){
        pageRouter.push("/VerificationCode")
    }
    return (
        <div className="flex min-h-screen border-2 border-black justify-center items-center font-Inter bg-healthBlue">
            <Card className="w-1/2 shadow-2xl text-navyBlue">
                <CardHeader className = "text-center">
                    <CardTitle className = "text-4xl">Reset Password</CardTitle>
                    <CardDescription className = "text-xl">Enter your email to send a validation code to reset your password</CardDescription>
                </CardHeader>
                <CardContent className = "flex justify-center">
                    <div className="flex flex-col space-y-1 w-1/2">
                        <label className="font-semibold">Enter your Email:</label>
                        <input type = "email" className = "border-black rounded-md border-2 focus:border-primary_baby_blue focus:outline-none p-1"></input>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <button className="px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-gray-600">Send Verification Code</button>
                </CardFooter>
            </Card>
        </div>
    )
}