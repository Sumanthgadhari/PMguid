
import React from "react";
import { Link } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Menu, Briefcase, Home, Users, Shield, User, Leaf, Gavel, BarChart2, Calendar, ArrowDownWideNarrow, Handshake, Layers, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { title: "Home", icon: Home, href: "/" },
  { title: "Teams", icon: Users, href: "/topic/teams" },
  { title: "Risk", icon: Shield, href: "/topic/risk" },
  { title: "Leadership", icon: User, href: "/topic/leadership" },
  { title: "Ethics", icon: Briefcase, href: "/topic/ethics" },
  { title: "Sustainability", icon: Leaf, href: "/topic/sustainability" },
  { title: "Governance", icon: Gavel, href: "/topic/governance" },
  { title: "Strategy", icon: BarChart2, href: "/topic/strategy" },
  { title: "Planning", icon: Calendar, href: "/topic/planning" },
  { title: "Implementation", icon: ArrowDownWideNarrow, href: "/topic/implementation" },
  { title: "Stakeholders", icon: Handshake, href: "/topic/stakeholders" },
  { title: "Methodologies", icon: Layers, href: "/topic/methodologies" },
  { title: "AI", icon: BrainCircuit, href: "/topic/ai" },
];

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <SidebarProvider defaultOpen={false}>
        <div className="min-h-screen flex w-full">
          {/* The sidebar with proper styling for dark mode */}
          <Sidebar className="border-r bg-sidebar">
            <SidebarContent>
              <div className="p-4">
                <Link to="/" className="flex items-center gap-2">
                  <Briefcase size={24} className="text-pmblue" />
                  <h1 className="font-bold text-xl">Project Management Guide</h1>
                </Link>
              </div>
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link to={item.href} className="flex items-center gap-2">
                            <item.icon size={18} />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          
          <div className="flex-1 flex flex-col">
            <header className="border-b p-4 bg-white flex justify-between items-center">
              <SidebarTrigger>
                <Button variant="ghost" size="icon">
                  <Menu size={20} />
                </Button>
              </SidebarTrigger>
              <div className="font-medium">A Guide to Project Management</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/about">About</Link>
                </Button>
              </div>
            </header>
            <main className="flex-1 overflow-auto">
              {children}
            </main>
            <footer className="border-t p-4 bg-gray-50 text-sm text-center text-gray-500">
              © {new Date().getFullYear()} Project Management Guide for Small Businesses and Charities in Ireland
            </footer>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

