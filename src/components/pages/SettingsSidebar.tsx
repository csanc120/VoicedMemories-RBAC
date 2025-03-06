import {
    Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator,
} from "~/components/ui/sidebar";
import { useSettingsContext } from "../utils/SettingsContext";

export function SettingsSidebar() {
    const { menuItem, setMenuItem } = useSettingsContext();

    return (
        <Sidebar>
            <SidebarHeader className="text-2xl bg-gray">
                Settings Options
            </SidebarHeader>
            <SidebarSeparator />
            <SidebarContent >
                <SidebarGroup className="text-xl bg-gray">
                    <SidebarGroupLabel className="text-base text-xl">
                        Manage Account
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setMenuItem("Password")}
                                    className={`text-base px-2 py-1 hover:bg-[#b0e0e6]/50 rounded-md transition-colors ${menuItem === "Password" ? "bg-[#b0e0e6]" : "bg-transparent"}`}>
                                    Change Password
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setMenuItem("Email")}
                                    className={`text-base px-2 py-1 hover:bg-[#b0e0e6]/50 rounded-md transition-colors  ${menuItem === "Email" ? "bg-[#b0e0e6]" : "bg-transparent"}`}>
                                    Change Email
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator />
            </SidebarContent>
        </Sidebar >
    )
}
