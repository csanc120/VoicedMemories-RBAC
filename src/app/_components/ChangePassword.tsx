'use client'
import { useState } from "react";
import { set } from "zod";
import { DualInputForm, DualInputFormProps } from "~/components/pages/DualInputForm"
import { api } from "~/trpc/react"

export function ChangePassword(){
    //TO-DO Next sprint: Modify logic of output messaages to the client 
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(true);

    const changePassword = api.userVerifier.resetPassword.useMutation(
        {onSuccess(data, variables, context) {
            setMessage(data.message);
            setSuccess(true);
        },
        onError(error, variables, context) {
            console.log(error.message)
            setMessage(error.message);
            setSuccess(false);
        },});
    
    let passwordLabels:DualInputFormProps = {
        mainHeader: "Change Password", 
        subHeader: "Use the fields below to enter your current password and new password.", 
        label1Input: "Enter Current Password:", 
        label2Input: "Enter New Password:", 
        buttonText : "Confirm", 
        buttonAction : (input1, input2) => {
            const accessToken = sessionStorage.getItem("accessToken");
            if (accessToken){
                console.log("An access token is available");
                changePassword.mutate({accessToken: accessToken, previousPassword:input1, newPassword:input2});
                return;
            }
        }
    }

    return (
        <>
            <DualInputForm {...passwordLabels}/>
            {success && message && <div className="text-green-600 font-bold text-xl text-center">{message}</div>}
            {!success && message && <div className="text-red-500 font-bold text-xl text-center">{message}</div>}
        </>
    )
}