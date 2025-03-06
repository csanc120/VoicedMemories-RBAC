'use client'
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { api } from "~/trpc/react"
import { useRouter } from "next/navigation"


export default function AccountLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState("");
    const pageRouter = useRouter();

    const input = api.userVerifier.checkLogin.useMutation(
        {
            onSuccess(data) {//TODO: User password change page route
                if (data.type == "validation") {
                    console.log(data.validationKeys);
                    pageRouter.push("/ResetEmail");
                } else { //success
                    const userTokens = data.tokens;
                    if (userTokens?.IdToken && userTokens.AccessToken && userTokens.RefreshToken) {
                        sessionStorage.setItem("idToken", userTokens?.IdToken);
                        sessionStorage.setItem("accessToken", userTokens?.AccessToken);
                        sessionStorage.setItem("refreshToken", userTokens?.RefreshToken);
                        if (userTokens.ExpiresIn) {
                            sessionStorage.setItem("tokenExp", userTokens.ExpiresIn.toString());
                        }
                    }
                    //Need ot check route
                    pageRouter.push("/Dashboard");
                }
            },
            onError(error) {
                setLoginError(error.message);
            },
        }
    );

    function initLogin() {
        input.mutate({ userName: email, password: password });
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#001f54] font-Inter">
            <Card className="shadow-2xl w-1/2 ">
                <CardHeader className="text-center">
                    <CardTitle className="text-5xl">Patient Login</CardTitle>
                    <CardDescription className="text-2xl">Please Enter your Information Below</CardDescription>
                    {loginError != "" && <label className="text-lg text-red-600">{loginError}</label>}
                </CardHeader>
                <CardContent className="flex justify-center">
                    <div className="w-1/2 space-y-5">
                        <div className="flex flex-col justify-center space-y-1">
                            <label className="text-xl font-semibold">
                                Email Address:
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="border-black rounded-md border-2 focus:border-primary_baby_blue focus:outline-none p-1" />
                        </div>
                        <div className="flex flex-col justify-center space-y-1">
                            <label className="text-xl font-semibold">
                                Password:
                            </label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="border-black rounded-md border-2 focus:border-primary_baby_blue focus:outline-none p-1" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <div className="flex flex-col space-y-2 items-center">
                        <button className="text-2xl border-2 rounded-md border-black bg-[#4cafce] mt-5 hover:bg-[#2c8099] hover:text-black text-black font-semibold w-full p-3" onClick={() => { initLogin() }}>
                            Sign in to Account
                        </button>
                        <Link href="/ResetPassword" className="text-blue-500 underline"> Forgot your Password?</Link>
                        <Link href="/ResetEmail" className="text-blue-500 underline ">Forgot your Email?</Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
