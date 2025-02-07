'use client'
import { ChangePassword } from "~/app/_components/ChangePassword";
import { ChangeEmail} from "~/app/_components/ChangeEmail"
import { useSettingsContext } from "~/components/utils/SettingsContext";

export default function Settings(){
    const { menuItem} = useSettingsContext();
    return (
       <>
            {menuItem === "Password" && <ChangePassword/>}
            {menuItem === "Email" && <ChangeEmail/>}
        </>
    )
}