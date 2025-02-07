import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, 
         SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator,} from "~/components/ui/sidebar";
import {useSettingsContext } from "../utils/SettingsContext";

export function SettingsSidebar(){
    const { menuItem, setMenuItem } = useSettingsContext();

    return (
        <Sidebar>
            <SidebarHeader>
                Settings
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Manage Account
                    </SidebarGroupLabel>
                     <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setMenuItem("Password")}>
                                    Change Password
                                 </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setMenuItem("Email")}>
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