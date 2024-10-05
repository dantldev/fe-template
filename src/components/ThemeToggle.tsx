import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" tooltip="Change Theme">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500 ease-in-out"
          >
            <mask id="mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <circle
                className={`${
                  theme === "dark" ? "scale-100" : "scale-50"
                } transform origin-center transition-transform duration-500 ease-in-out`}
                cx="12"
                cy="12"
                r={theme === "dark" ? "6" : "3"}
                fill="black"
              />
            </mask>
            <circle
              cx="12"
              cy="12"
              r="5"
              mask="url(#mask)"
              className={`${
                theme === "dark" ? "scale-150" : "scale-110"
              } transform origin-center transition-transform duration-500 ease-in-out`}
            />
            <g
              className={`${
                theme === "dark" ? "scale-0" : "scale-100"
              } transform origin-center transition-transform duration-500 ease-in-out`}
            >
              {[45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line
                  key={angle}
                  x1="12"
                  y1="1"
                  x2="12"
                  y2="3"
                  transform={`rotate(${angle} 12 12)`}
                />
              ))}
            </g>
          </svg>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}