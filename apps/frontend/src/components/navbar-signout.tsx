"use client"

import Link from "next/link"
import {
	NavigationMenuItem,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { authClient } from "@/lib/auth-client"

const signOut = async () => await authClient.signOut()

export default function NavbarSignout() {
	return (
		<NavigationMenuItem>
			<NavigationMenuLink asChild>
				<Link href="" onClick={signOut}>
					Logout
				</Link>
			</NavigationMenuLink>
		</NavigationMenuItem>
	)
}
