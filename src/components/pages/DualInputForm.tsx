import { useState } from "react";

//ButtonAction is the action that should be done when the button inside the form is clicked. 
//Kept abstract so that other components can define their own logic using their forms input fields (changePassword and ChangeEmail)
export type DualInputFormProps = {
    mainHeader:string, 
    subHeader:string, 
    label1Input:string, 
    label2Input:string, 
    buttonText:string, 
    buttonAction: (input1:string, input2:string) => void
}

export function DualInputForm({mainHeader, subHeader, label1Input, label2Input, buttonText, buttonAction}:DualInputFormProps){
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    function submitValues(){
        buttonAction(input1, input2);
    }

    return (
        <div className="flex flex-col space-y-14 ml-8 font-Inter">
            <div className="space-y-1">
                <h1 className="text-4xl font-semibold">{mainHeader}</h1>
                <label className="block">{subHeader}</label>
            </div>
            <div className="space-y-5">
                <div className="flex flex-col space-y-1">
                    <label className="font-semibold">{label1Input}</label>
                    <input onChange = {(e) => setInput1(e.target.value)} type="text" className="border-2 border-black rounded-md w-1/2 p-1"/>
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="font-semibold">{label2Input}</label>
                    <input onChange  = {(e) => setInput2(e.target.value)} type="text" className="border-2 border-black rounded-md w-1/2 p-1"/>
                </div>
            </div>
            <button onClick = {submitValues} className = "border-2 rounded-md border-gold bg-primary_black mt-5 hover:bg-primary_gray hover:text-black text-white w-1/3 p-3">
                {buttonText}
            </button>
        </div>
    )
}