export function ChangePassword(){
    return (
        <div className="flex flex-col space-y-14 ml-8 font-Inter">
            <div className="space-y-1">
                <h1 className="text-4xl font-semibold">Change Password</h1>
                <label className="block">Use the fields below to enter your current password and new password.</label>
            </div>
            <div className="space-y-5">
                <div className="flex flex-col space-y-1">
                    <label className="font-semibold">Enter Current Password:</label>
                    <input type="text" className="border-2 border-black rounded-md w-1/2 p-1"/>
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="font-semibold">Enter New Password:</label>
                    <input type="text" className="border-2 border-black rounded-md w-1/2 p-1"/>
                </div>
            </div>
            <button className = "border-2 rounded-md border-gold bg-primary_black mt-5 hover:bg-primary_gray hover:text-black text-white w-1/3 p-3">
                Confirm
            </button>
        </div>
    )
}