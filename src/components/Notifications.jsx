
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Bell, CheckCircle, Building2, PartyPopper, Clock, Briefcase, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const sampleNotifications = [
  {
    id: 1,
    type: "selection_announcement",
    title: "Congratulations to Selected Students!",
    company: "Tech Solutions Inc",
    role: "Software Developer",
    package: "12",
    date: "2024-03-20",
    selectedStudents: [
      { name: "John Doe", department: "CSE", package: "12", role: "Software Developer" },
      { name: "Jane Smith", department: "ECE", package: "12", role: "Software Developer" },
    ],
    read: false
  },
  {
    id: 2,
    type: "personal_selection",
    title: "Congratulations! You've been selected",
    company: "Innovation Labs",
    role: "Frontend Developer",
    package: "10",
    date: "2024-03-18",
    selectionDetails: {
      roundsCleared: ["Technical", "HR"],
      joiningDate: "2024-06-01",
      offerStatus: "Pending"
    },
    read: false
  },
  {
    id: 3,
    type: "round",
    title: "Next Round Information",
    company: "Global Tech",
    round: "Technical Interview",
    date: "2024-03-15",
    scheduledFor: "2024-03-22",
    venue: "Online - Microsoft Teams",
    instructions: "Please keep your resume and college ID ready",
    read: true
  },
  {
    id: 4,
    type: "achievement",
    title: "Your Placement Journey",
    date: "2024-03-10",
    stats: {
      companiesSelected: 2,
      highestPackage: "12",
      totalOffers: 2,
      upcomingRounds: 1
    },
    read: true
  }
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [showAll, setShowAll] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const handleNotificationClick = (notification) => {
    if (!notification.read) {
      markAsRead(notification.id);
    }
    setSelectedNotification(notification);
    setShowDialog(true);
  };

  const displayedNotifications = showAll 
    ? notifications 
    : notifications.slice(0, 3);

  const unreadCount = notifications.filter(n => !n.read).length;

  const renderNotificationIcon = (type) => {
    switch (type) {
      case "selection_announcement":
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case "personal_selection":
        return <PartyPopper className="h-5 w-5 text-green-500" />;
      case "round":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "achievement":
        return <Briefcase className="h-5 w-5 text-purple-500" />;
      default:
        return <Bell className="h-5 w-5 text-primary" />;
    }
  };

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
            className={`p-4 transition-all cursor-pointer hover:shadow-md ${
              !notification.read 
                ? "border-2 border-primary/30 bg-primary/5" 
                : "border border-gray-200"
            }`}
            onClick={() => handleNotificationClick(notification)}
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {renderNotificationIcon(notification.type)}
                  <h3 className="font-medium text-primary">
                    {notification.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  {notification.company && `Company: ${notification.company}`}
                </p>
                {notification.role && (
                  <p className="text-sm text-gray-600">
                    Role: {notification.role}
                  </p>
                )}
                {notification.package && (
                  <p className="text-sm text-green-600">
                    Package: {notification.package} LPA
                  </p>
                )}
                <p className="text-xs text-gray-400">
                  {new Date(notification.date).toLocaleDateString()}
                </p>
              </div>
              {!notification.read && (
                <span className="h-2 w-2 rounded-full bg-pink-500" />
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

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl">
          {selectedNotification && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {renderNotificationIcon(selectedNotification.type)}
                  {selectedNotification.title}
                </DialogTitle>
                <DialogDescription>
                  <div className="space-y-4 mt-4">
                    {selectedNotification.type === "selection_announcement" && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-green-600">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{selectedNotification.company}</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3">Selected Students</h4>
                          <div className="grid gap-3">
                            {selectedNotification.selectedStudents.map((student, index) => (
                              <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-2 bg-white rounded border">
                                <div>
                                  <p className="font-medium">{student.name}</p>
                                  <p className="text-sm text-gray-600">{student.department}</p>
                                </div>
                                <div className="mt-2 sm:mt-0 text-right">
                                  <p className="text-green-600">{student.package} LPA</p>
                                  <p className="text-sm text-gray-600">{student.role}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedNotification.type === "personal_selection" && (
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-medium text-green-700 mb-2">Selection Details</h4>
                          <div className="space-y-2">
                            <p className="text-green-600">Role: {selectedNotification.role}</p>
                            <p className="text-green-600">Package: {selectedNotification.package} LPA</p>
                            <p>Rounds Cleared: {selectedNotification.selectionDetails.roundsCleared.join(", ")}</p>
                            <p>Joining Date: {new Date(selectedNotification.selectionDetails.joiningDate).toLocaleDateString()}</p>
                            <p>Offer Status: {selectedNotification.selectionDetails.offerStatus}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedNotification.type === "round" && (
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-700 mb-2">Round Details</h4>
                          <div className="space-y-2">
                            <p>Company: {selectedNotification.company}</p>
                            <p>Round: {selectedNotification.round}</p>
                            <p>Date: {new Date(selectedNotification.scheduledFor).toLocaleDateString()}</p>
                            <p>Venue: {selectedNotification.venue}</p>
                            <div className="mt-4 p-3 bg-blue-100 rounded">
                              <p className="text-sm">{selectedNotification.instructions}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedNotification.type === "achievement" && (
                      <div className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-medium text-purple-700 mb-2">Your Achievements</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-white rounded border">
                              <p className="text-sm text-gray-600">Companies Selected</p>
                              <p className="text-xl font-semibold text-purple-600">
                                {selectedNotification.stats.companiesSelected}
                              </p>
                            </div>
                            <div className="p-3 bg-white rounded border">
                              <p className="text-sm text-gray-600">Highest Package</p>
                              <p className="text-xl font-semibold text-green-600">
                                {selectedNotification.stats.highestPackage} LPA
                              </p>
                            </div>
                            <div className="p-3 bg-white rounded border">
                              <p className="text-sm text-gray-600">Total Offers</p>
                              <p className="text-xl font-semibold text-blue-600">
                                {selectedNotification.stats.totalOffers}
                              </p>
                            </div>
                            <div className="p-3 bg-white rounded border">
                              <p className="text-sm text-gray-600">Upcoming Rounds</p>
                              <p className="text-xl font-semibold text-pink-600">
                                {selectedNotification.stats.upcomingRounds}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="text-sm text-gray-500 mt-4">
                      Received on {new Date(selectedNotification.date).toLocaleDateString()}
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Notifications;
