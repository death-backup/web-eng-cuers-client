"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import LoggedInUserAvatar from "@/components/LoggedInUserAvatar";
import {
    CreditCard,
    Keyboard,
    LifeBuoy,
    LogOut,
    Settings,
    User
} from "lucide-react";
import React, {useState} from "react";
import {AxiosInstance} from "@/utils/AxiosInstance";
import {useAuthStore} from "@/store/AuthStore";
import {useRouter} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {toast} from "sonner";

export default function LoggedInUserMenu() {
    const {deleteAuthenticatedSession} = useAuthStore();

    const router = useRouter()

    const {mutate: logout} = useMutation({
        mutationFn: () => AxiosInstance.post("/logout"),
        onSuccess: () => {
            toast.success("Logged out successfully");
            deleteAuthenticatedSession();
            router.push("/");
        },
        onError: () => {
            toast.error("Logout failed");
            deleteAuthenticatedSession();
            router.push("/");
        }

    })

    const [isSettingDialogOpen, setIsSettingDialogOpen] = useState(false)

    return (
        <div className={"p-2 w-full"}>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger className={"w-full"} asChild={false}>
                    <LoggedInUserAvatar className={"p-2"}/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" side={"top"}>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4"/>
                            <span>Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <CreditCard className="mr-2 h-4 w-4"/>
                            <span>Billing</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => setIsSettingDialogOpen(true)}>
                            <Settings className="mr-2 h-4 w-4"/>
                            <span>Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Keyboard className="mr-2 h-4 w-4"/>
                            <span>Keyboard shortcuts</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator/>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                        <LifeBuoy className="mr-2 h-4 w-4"/>
                        <span>Support</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className={"bg-destructive" +
                        " focus:bg-destructive text-background" +
                        " focus:text-background"}
                                      onSelect={() => logout()}>
                        <LogOut className="mr-2 h-4 w-4"/>
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}