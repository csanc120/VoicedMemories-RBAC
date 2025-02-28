import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, 
         SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator,} from "~/components/ui/sidebar";
import {useSettingsContext } from "../utils/SettingsContext";

export function SettingsSidebar(){
    const { menuItem, setMenuItem } = useSettingsContext();

    return (
        <Sidebar>
            <SidebarHeader className="text-xl">
                Settings Options
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-base">
                        Manage Account
                    </SidebarGroupLabel>
                     <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setMenuItem("Password")} className = "text-base">
                                    Change Password
                                 </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setMenuItem("Email")} className="text-base">
                                    Change Email
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator/>
            </SidebarContent>
        </Sidebar>
    )
}