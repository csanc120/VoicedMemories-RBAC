import { DualInputForm, DualInputFormProps } from "~/components/pages/DualInputForm"

export function ChangeEmail(){

    let emailLabels:DualInputFormProps = {
        mainHeader: "Change Email", 
        subHeader: "Use the fields below to enter your current email and new email.", 
        label1Input: "Enter Current Email:", 
        label2Input: "Enter New Email:", 
        buttonText : "Confirm"
    }

    return (
        <DualInputForm {...emailLabels}/>
    )
}