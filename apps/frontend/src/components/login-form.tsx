"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { authClient } from "@/lib/auth-client"
import { cn } from "@/lib/utils"

const signInWithGoogle = async () => {
	await authClient.signIn.social({
		provider: "google",
		callbackURL: "http://localhost:3001/",
	})
}

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-center">Login to your account</CardTitle>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							{/* <div className="grid gap-3">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									placeholder="m@example.com"
									required
									type="email"
								/>
							</div>
							<div className="grid gap-3">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<a
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
										href="#"
									>
										Forgot your password?
									</a>
								</div>
								<Input id="password" required type="password" />
							</div> */}
							<div>
								<Button
									className="w-full"
									onClick={signInWithGoogle}
									type="button"
								>
									Login with Google
								</Button>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
