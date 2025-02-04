
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card"
export default function AccountLogin(){
    return (
        <div className = "flex min-h-screen items-center justify-center bg-primary_pastel_blue font-Inter">
            <Card className = "shadow-2xl w-1/2 ">
                <CardHeader className="text-center"> 
                    <CardTitle className="text-4xl">Patient Login</CardTitle>
                    <CardDescription>Please Enter your Information Below</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <div className = "w-1/2 space-y-5">
                        <div className="flex flex-col justify-center space-y-1">
                            <label className="font-semibold">
                                Email Address: 
                            </label>
                            <input type = "email" className = "border-black rounded-md border-2 focus:border-primary_baby_blue focus:outline-none p-1"/>
                        </div>
                        
                        <div className="flex flex-col justify-center space-y-1">
                            <label className = "font-semibold">
                                Password:
                            </label>
                            <input type = "password" className = "border-black rounded-md border-2 focus:border-primary_baby_blue focus:outline-none p-1"/>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <div className="flex flex-col space-y-2 items-center">
                        <button className = "border-2 rounded-md border-gold bg-primary_black mt-5 hover:bg-primary_gray hover:text-black text-white w-full p-3">
                            Sign in to Account 
                        </button>
                        <Link href = "./ResetPassword" className = "text-blue-500 underline"> Forgot your Password?</Link>
                        <Link href = "./ResetEmail" className="text-blue-500 underline ">Forgot your Email?</Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}