import { DualInputForm, DualInputFormProps } from "~/components/pages/DualInputForm"

export function ChangePassword(){

    let passwordLabels:DualInputFormProps = {
        mainHeader: "Change Password", 
        subHeader: "Use the fields below to enter your current password and new password.", 
        label1Input: "Enter Current Password:", 
        label2Input: "Enter New Password:", 
        buttonText : "Confirm"
    }

    return (
        <DualInputForm {...passwordLabels}/>
    )
}