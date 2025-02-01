
import Link from "next/link"
export default function AccountLogin(){
    return (
        <div className="flex flex-col h-screen border-solid border-4 border-blue-600 justify-center items-center ">
            <h6 className="text-4xl mb-5">Login to Account</h6>
            <div className = "border-2 w-1/4 text-lg space-y-5"> 
                <div className="flex flex-col border-2 justify-center">
                    <label>
                        Email:  
                    </label>
                    <input type = "email" className = "border-black rounded-md border-2"/>
                </div>
               
               <div className="flex flex-col border-2 justify-center">
                    <label>
                        Password:
                    </label>
                    <input type = "password" className = "border-black rounded-md border-2"/>
                </div>
            </div>
            <div className="flex flex-col space-y-2 text-center">
                <button className = "border-2 rounded-md border-yellow-300 bg-gray-300 mt-2 hover:bg-slate-500 ">Log in to account</button>
                <Link href = "./ResetPassword" className = "text-blue-500 underline"> Forgot your Password?</Link>
                <Link href = "./ResetEmail" className="text-blue-500 underline">Forgot your Email?</Link>
            </div>
        </div>
    )
}