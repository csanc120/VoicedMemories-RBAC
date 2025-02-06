import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { SettingsSidebar } from "~/components/pages/SettingsSidebar";

export default function layout({children}:{children:React.ReactNode}){
    return (
        <SidebarProvider>
            <SettingsSidebar/>
            <main className="w-screen bg-primary_pastel_blue">
                <header className = "font-bold text-3xl border-2 border-black text-center">Settings Page Header</header>
                <div className="w-1/2">
                    {children}
                </div> 
            </main>
        </SidebarProvider>
    )
}