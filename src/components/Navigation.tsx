import { config } from "@/config"
import { ThemeToggle } from "./ThemeToggle"
import { Link } from "react-router-dom"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { Button } from "./ui/button"
import { UserRoundPenIcon } from "lucide-react"
import { t } from "i18next"

export const Navigation = () => {
  return (
    <div
      className="flex flex-col h-screen fixed top-0 left-0 bg-white dark:bg-black items-center py-4 border-r"
      style={{
        width: config.ui.sidebarWidth,
      }}
    >
      <p className="text-sm">logo</p>
      <nav className="mt-4">
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/" className="text-sm">
              {t('home')}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-auto flex flex-col gap-3">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link to="/sign-in" className="text-sm">
            <Button variant="outline" size="icon" tooltip={t('signIn')}>
              <UserRoundPenIcon className="h-4 w-4" />
            </Button>
          </Link>
        </SignedOut>
        <ThemeToggle />
      </div>
    </div>
  )
}