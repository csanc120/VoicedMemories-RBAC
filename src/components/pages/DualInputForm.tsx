
export type DualInputFormProps = {
    mainHeader:string, 
    subHeader:string, 
    label1Input:string, 
    label2Input:string, 
    buttonText:string
}

export function DualInputForm({mainHeader, subHeader, label1Input, label2Input, buttonText}:DualInputFormProps){
    return (
        <div className="flex flex-col space-y-14 ml-8 font-Inter">
            <div className="space-y-1">
                <h1 className="text-4xl font-semibold">{mainHeader}</h1>
                <label className="block">{subHeader}</label>
            </div>
            <div className="space-y-5">
                <div className="flex flex-col space-y-1">
                    <label className="font-semibold">{label1Input}</label>
                    <input type="text" className="border-2 border-black rounded-md w-1/2 p-1"/>
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="font-semibold">{label2Input}</label>
                    <input type="text" className="border-2 border-black rounded-md w-1/2 p-1"/>
                </div>
            </div>
            <button className = "border-2 rounded-md border-gold bg-primary_black mt-5 hover:bg-primary_gray hover:text-black text-white w-1/3 p-3">
                {buttonText}
            </button>
        </div>
    )
}