export const mockData = {
  stats: [
    {
      title: "Total Revenue",
      value: "$48,750.21",
      change: "+12.5%",
      isPositive: true,
      color: "#a855f7", // purple-500
      data: [
        { value: 20 }, { value: 35 }, { value: 25 }, { value: 45 }, { value: 30 }, { value: 55 }, { value: 40 }
      ]
    },
    {
      title: "Active Users",
      value: "14,908",
      change: "+8.1%",
      isPositive: true,
      color: "#3b82f6", // blue-500
      data: [
        { value: 10 }, { value: 25 }, { value: 15 }, { value: 30 }, { value: 20 }, { value: 45 }, { value: 35 }
      ]
    },
    {
      title: "New Signups",
      value: "1,245",
      change: "+18.7%",
      isPositive: true,
      color: "#3b82f6", // blue-500
      data: [
        { value: 5 }, { value: 15 }, { value: 10 }, { value: 25 }, { value: 15 }, { value: 35 }, { value: 45 }
      ]
    }
  ],
  trends: [
    { day: "Aug", sales: 400, engagement: 600 },
    { day: "3", sales: 1200, engagement: 1400 },
    { day: "6", sales: 2000, engagement: 1500 },
    { day: "9", sales: 1600, engagement: 1000 },
    { day: "12", sales: 1800, engagement: 1500 },
    { day: "15", sales: 3210, engagement: 1900 },
    { day: "18", sales: 1400, engagement: 1500 },
    { day: "24", sales: 2200, engagement: 2800 },
    { day: "27", sales: 1800, engagement: 2200 },
    { day: "30", sales: 3800, engagement: 2900 },
  ],
  projects: [
    { name: "Alpha", status: "Completed", progress: 100, color: "from-purple-500 to-fuchsia-500" },
    { name: "Beta", status: "In Progress", progress: 65, color: "from-blue-500 to-cyan-500" },
    { name: "Gamma", status: "Review", progress: 85, color: "from-purple-400 to-fuchsia-400" },
    { name: "Delta", status: "Review", progress: 50, color: "from-blue-400 to-cyan-400" },
  ],
  activities: [
    {
      id: 1,
      user: "Alex Carter",
      avatar: "https://i.pravatar.cc/150?u=alex",
      action: "updated the market protest newsteat.",
      time: "3 minutes ago"
    },
    {
      id: 2,
      user: "Alex Carter",
      avatar: "https://i.pravatar.cc/150?u=alex",
      action: "updated this alert, usenst and newsroom.",
      time: "3 minutes ago"
    },
    {
      id: 3,
      user: "Alex Carter",
      avatar: "https://i.pravatar.cc/150?u=alex",
      action: "updated the riewatert blog post.",
      time: "5 minutes ago"
    }
  ]
};
