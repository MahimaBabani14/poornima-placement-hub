
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Calendar, UserCheck, HandHeart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Notifications = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: "Application Update",
      company: "Tech Corp",
      date: "2 hours ago",
      status: "shortlisted",
      read: false
    },
    {
      id: 2,
      title: "New Job Posting",
      company: "Data Solutions",
      date: "Yesterday",
      read: true
    },
    {
      id: 3,
      title: "Interview Scheduled",
      company: "WebTech Solutions",
      date: "Mar 25, 2024",
      status: "interview",
      read: false
    }
  ]);

  const [events] = useState([
    {
      id: 1,
      title: "Resume Building Workshop",
      date: "Apr 5, 2024",
      time: "10:00 AM - 12:00 PM"
    },
    {
      id: 2,
      title: "Mock Interview Session",
      date: "Apr 10, 2024",
      time: "2:00 PM - 5:00 PM"
    }
  ]);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'shortlisted':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Shortlisted</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Rejected</Badge>;
      case 'interview':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Interview</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          {notifications.length === 0 ? (
            <div className="text-center py-6 text-gray-500">
              <p>No new notifications</p>
            </div>
          ) : (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-3 rounded-lg transition-all ${notification.read ? 'bg-gray-50' : 'bg-blue-50 border-l-4 border-primary'}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">{notification.title}</h4>
                      <p className="text-sm text-gray-600">{notification.company}</p>
                      {notification.status && (
                        <div className="mt-1">
                          {getStatusBadge(notification.status)}
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{notification.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-0 shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          {events.length === 0 ? (
            <div className="text-center py-6 text-gray-500">
              <p>No upcoming events</p>
            </div>
          ) : (
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                    <Calendar className="h-3 w-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {event.time}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary-50 to-blue-50 border-0 shadow-md">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-3 bg-primary/10 rounded-full">
              <HandHeart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-primary">Need Assistance?</h3>
            <p className="text-sm text-gray-600">
              Contact the placement cell for any queries or support
            </p>
            <div className="text-primary font-medium">
              placement@college.edu
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;
