"use client";

import { useStore } from "@/store/useStore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { BookOpen, LayoutDashboard, Book, FileText, Dumbbell, Bot, Settings, LogOut, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser, setCurrentUser } = useStore();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/learn", icon: Book, label: "Learn" },
    { href: "/test", icon: FileText, label: "Test" },
    { href: "/practice", icon: Dumbbell, label: "Practice" },
    { href: "/chatbot", icon: Bot, label: "Chatbot" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ];

  const handleLogout = () => {
    setCurrentUser(null);
    router.push("/login");
  };

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {links.map((l) => {
        const isActive = pathname === l.href || pathname.startsWith(l.href + "/");
        return (
          <Link
            key={l.href}
            href={l.href}
            onClick={onClick}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              isActive
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <l.icon className="w-5 h-5" />
            {l.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-background to-muted/50 overflow-hidden">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-card/60 glass z-20">
        <div className="p-6 font-bold text-2xl tracking-tight text-primary flex items-center gap-2">
          <BookOpen className="w-6 h-6" /> Magic Learn
        </div>
        <nav className="flex-1 px-4 space-y-1">
          <NavLinks />
        </nav>
        <div className="p-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-destructive hover:bg-destructive/10 transition-colors"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        {/* Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-4 md:px-6 bg-background/60 glass z-10">
          <div className="flex items-center gap-4">
            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon", className: "md:hidden" })}>
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <VisuallyHidden><SheetTitle>Navigation Menu</SheetTitle></VisuallyHidden>
                <div className="flex flex-col h-full bg-card">
                  <div className="p-6 font-bold text-2xl tracking-tight text-primary flex items-center gap-2">
                    <BookOpen className="w-6 h-6" /> Magic Learn
                  </div>
                  <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                    <NavLinks onClick={() => setIsMobileMenuOpen(false)} />
                  </nav>
                  <div className="p-4 border-t border-border">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <LogOut className="w-5 h-5" /> Logout
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <h2 className="text-lg font-semibold capitalize">
              {pathname === "/" ? "Dashboard" : pathname.split("/")[1] || "Dashboard"}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="h-9 w-9 border border-primary/30 shadow-sm cursor-pointer" title={currentUser || ""}>
              <AvatarFallback className="bg-primary/20 text-primary font-bold">
                {currentUser?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Scrollable View Area */}
        <div className="flex-1 overflow-auto p-4 md:p-8 relative z-0">
          <div className="h-full">{children}</div>
        </div>
      </main>
    </div>
  );
}
