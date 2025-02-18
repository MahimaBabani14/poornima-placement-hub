
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Bell, CheckCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleNotifications = [
  {
    id: 1,
    type: "new_job",
    title: "New Job Opportunity",
    company: "Tech Solutions Inc",
    role: "Software Developer",
    date: "2024-03-20",
    read: false
  },
  {
    id: 2,
    type: "selection",
    title: "Congratulations! You've been selected",
    company: "Innovation Labs",
    round: "Technical Interview",
    date: "2024-03-18",
    read: false
  },
  {
    id: 3,
    type: "round",
    title: "Next Round Information",
    company: "Global Tech",
    round: "HR Interview",
    date: "2024-03-15",
    scheduledFor: "2024-03-22",
    read: true
  }
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [showAll, setShowAll] = useState(false);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const displayedNotifications = showAll 
    ? notifications 
    : notifications.slice(0, 3);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-primary">Notifications</h2>
          {unreadCount > 0 && (
            <span className="bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
              {unreadCount} new
            </span>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {displayedNotifications.map((notification) => (
          <Card
            key={notification.id}
            className={`p-4 transition-all ${
              !notification.read 
                ? "border-2 border-primary/30 bg-primary/5" 
                : "border border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {notification.type === "selection" ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Building2 className="h-5 w-5 text-primary" />
                  )}
                  <h3 className="font-medium text-primary">
                    {notification.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Company: {notification.company}
                </p>
                {notification.role && (
                  <p className="text-sm text-gray-600">
                    Role: {notification.role}
                  </p>
                )}
                {notification.round && (
                  <p className="text-sm text-gray-600">
                    Round: {notification.round}
                  </p>
                )}
                {notification.scheduledFor && (
                  <p className="text-sm text-pink-600">
                    Scheduled for: {new Date(notification.scheduledFor).toLocaleDateString()}
                  </p>
                )}
                <p className="text-xs text-gray-400">
                  {new Date(notification.date).toLocaleDateString()}
                </p>
              </div>
              {!notification.read && (
                <Button
                  variant="ghost"
                  className="text-xs text-primary hover:text-primary/80"
                  onClick={() => markAsRead(notification.id)}
                >
                  Mark as read
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {notifications.length > 3 && (
        <Button
          variant="link"
          className="text-primary mt-2"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : `Show ${notifications.length - 3} more`}
        </Button>
      )}
    </div>
  );
};

export default Notifications;
