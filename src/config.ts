export const config = {
  appname: import.meta.env.VITE_APP_NAME,
  ui: {
    sidebarWidth: 56,
    defaultTheme: "dark",
  },
  clerk: {
    key: import.meta.env.VITE_PUBLIC_CLERK_PUBLISHABLE_KEY,
    afterSignOutUrl: import.meta.env.VITE_CLERK_AFTER_SIGN_OUT_URL ?? "/",
  }
}