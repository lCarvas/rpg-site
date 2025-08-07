import { headers } from "next/headers"
import Link from "next/link"
import NavbarSignout from "@/components/navbar-signout"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { getSession } from "@/dal/dal"

export async function Navbar() {
	const session = await getSession(headers())
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Link href="/">Home</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Link href="/characters">Characters</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Link href="/campaigns">Campaigns</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Link href="/homebrew">Homebrew</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				{session ? (
					<NavbarSignout />
				) : (
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<Link href="/login">Login</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				)}
			</NavigationMenuList>
		</NavigationMenu>
	)
}
