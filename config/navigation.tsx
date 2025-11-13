import {
    Dashboard,
    FormatListBulleted,
    CalendarMonth,
    Contacts,
    Chat,
    Email,
    ViewKanban,
    Folder,
    ShoppingCart,
    Business,
    Assignment,
    School,
    Headset,
    Event,
    RssFeed,
    Receipt,
    People,
    Person,
    Star,
    Apps,
    Insights,
    BarChart,
  } from "@mui/icons-material"
  import type { INavSection } from "@/types"
  
  export const navItems: INavSection[] = [
    {
      section: "MAIN",
      items: [{ text: "Dashboard", icon: <Dashboard />, path: "/", badge: 5 ,
        children: [
          { text: "Overview", path: "/over-view", icon: <Insights /> }, // Insights icon
          { text: "Analytics", path: "/dashboard/analytics", icon: <BarChart /> }, // Bar chart icon
          { text: "Reports", path: "/dashboard/reports", icon: <FormatListBulleted /> }, // Reports icon
        ], 
      }],
    },
    {
      section: "APPS",
      items: [
        { text: "To Do List", icon: <FormatListBulleted />, path: "/todo" },
        { text: "Calendar", icon: <CalendarMonth />, path: "/calendar" },
        { text: "Contacts", icon: <Contacts />, path: "/contacts" },
        { text: "Chat", icon: <Chat />, path: "/chat" },
        { text: "Email", icon: <Email />, path: "/email" },
        { text: "Kanban Board", icon: <ViewKanban />, path: "/kanban" },
        { text: "File Manager", icon: <Folder />, path: "/files" },
      ],
    },
    {
      section: "PAGES",
      items: [
        { text: "E-Commerce", icon: <ShoppingCart />, path: "/ecommerce" },
        { text: "CRM", icon: <Business />, path: "/crm" },
        { text: "Project Management", icon: <Assignment />, path: "/projects" },
        { text: "LMS", icon: <School />, path: "/lms" },
        { text: "Help Desk", icon: <Headset />, path: "/help" },
        { text: "Events", icon: <Event />, path: "/events" },
        { text: "Social Feed", icon: <RssFeed />, path: "/feed" },
        { text: "Invoices", icon: <Receipt />, path: "/invoices" },
        { text: "Users", icon: <People />, path: "/users" },
        { text: "Profile", icon: <Person />, path: "/profile" },
        { text: "Starter", icon: <Star />, path: "/starter" },
      ],
    },
    {
      section: "MODULES",
      items: [{ text: "Icons", icon: <Apps />, path: "/icons" }],
    },
  ]
  