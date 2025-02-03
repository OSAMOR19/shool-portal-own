"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, ChevronDown, ChevronRight, Star, Trash } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import img1 from "@/components/images/announcementimage.svg";

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  type: "regular" | "important" | "special";
  isExpanded: boolean;
  isStarred: boolean;
}

const SuccessAlert = ({ children }: { children: React.ReactNode }) => (
  <Alert className="mb-4 bg-green-50 border-green-500">
    <AlertCircle className="h-4 w-4 text-green-500" />
    <AlertDescription className="text-green-700">{children}</AlertDescription>
  </Alert>
);

export default function AnnouncementPage() {
  const [announcements, setAnnouncements] = React.useState<Announcement[]>([
    {
      id: 1,
      title: "Constructions in the J.S.S. block are now completed.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Id ut netus in cras egestas. Lectus sed adipiscing rhoncus vel ac netus mauris diam risus.",
      date: "(23/06/22)",
      type: "regular",
      isExpanded: true,
      isStarred: true,
    },
    {
      id: 2,
      title: "Report Section",
      content: "Further Mathematics for S.S.1 Science has been submitted for approval.",
      date: "(16/02/22)",
      type: "important",
      isExpanded: false,
      isStarred: true,
    },
    {
      id: 3,
      title: "Constructions in the J.S.S. block are now completed.",
      content: "Construction updates and details.",
      date: "(20/06/22)",
      type: "special",
      isExpanded: false,
      isStarred: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [filter, setFilter] = React.useState("ALL");
  const [newAnnouncement, setNewAnnouncement] = React.useState({
    title: "",
    content: "",
    type: "regular" as const,
  });
  const [searchQuery, setSearchQuery] = React.useState("");

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "regular":
        return "bg-emerald-50";
      case "important":
        return "bg-red-100";
      case "special":
        return "bg-yellow-50";
      default:
        return "bg-white";
    }
  };

  const handleSave = () => {
    if (!newAnnouncement.title || !newAnnouncement.content) return;

    const currentDate = new Date();
    const formattedDate = `(${currentDate.getDate().toString().padStart(2, "0")}/${(currentDate.getMonth() + 1).toString().padStart(2, "0")}/${currentDate.getFullYear().toString().slice(-2)})`;

    const announcement: Announcement = {
      id: announcements.length + 1,
      title: newAnnouncement.title,
      content: newAnnouncement.content,
      date: formattedDate,
      type: newAnnouncement.type,
      isExpanded: false,
      isStarred: false,
    };

    setAnnouncements([announcement, ...announcements]);
    setNewAnnouncement({ title: "", content: "", type: "regular" });
    setIsModalOpen(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchQuery.toLowerCase());

    if (filter === "ALL") return matchesSearch;

    const announcementDate = new Date(announcement.date.slice(1, -1).split("/").reverse().join("-"));
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

    switch (filter) {
      case "Today":
        return matchesSearch && announcementDate.toDateString() === today.toDateString();
      case "ThisWeek":
        return matchesSearch && announcementDate >= weekAgo;
      case "ThisMonth":
        return matchesSearch && announcementDate >= monthAgo;
      default:
        return matchesSearch;
    }
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-[250px,1fr] gap-6">
        <div className="space-y-6">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            + Add New
          </Button>

          <div>
            <h3 className="text-sm mb-2 flex items-center gap-2">
              <Star className="w-4 h-4" /> Color scheme
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-emerald-50 rounded text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                Regular Announcement
              </div>
              <div className="flex items-center gap-2 p-2 bg-red-100 rounded text-sm">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                Important Announcement
              </div>
              <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded text-sm">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                Special Announcement
              </div>
            </div>
          </div>

          <div>
            <Image
              src={img1}
              alt="Announcement Image"
              width={300}
              height={200}
              className="w-full rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Input
              type="search"
              placeholder="Search"
              className="w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">ALL</SelectItem>
                <SelectItem value="Today">Today</SelectItem>
                <SelectItem value="ThisWeek">This Week</SelectItem>
                <SelectItem value="ThisMonth">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {showSuccess && <SuccessAlert>Announcement has been successfully added!</SuccessAlert>}

          <div className="space-y-3">
            {filteredAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className={`${getBackgroundColor(announcement.type)} rounded-lg overflow-hidden`}
              >
                <div className="p-4 flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="font-medium">{announcement.title}</h3>
                    <span className="text-sm text-gray-500">{announcement.date}</span>
                    {announcement.isExpanded && <p className="mt-2 text-sm text-gray-600">{announcement.content}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setAnnouncements(announcements.filter((a) => a.id !== announcement.id));
                      }}
                    >
                      <Trash className="h-4 w-4 text-red-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setAnnouncements(
                          announcements.map((a) => (a.id === announcement.id ? { ...a, isStarred: !a.isStarred } : a)),
                        );
                      }}
                    >
                      <Star
                        className={`h-4 w-4 ${announcement.isStarred ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setAnnouncements(
                          announcements.map((a) =>
                            a.id === announcement.id ? { ...a, isExpanded: !a.isExpanded } : a,
                          ),
                        );
                      }}
                    >
                      {announcement.isExpanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Announcement</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                placeholder="Enter title"
                value={newAnnouncement.title}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <Select
                value={newAnnouncement.type}
                onValueChange={(value: "regular" | "important" | "special") =>
                  setNewAnnouncement({ ...newAnnouncement, type: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="important">Important</SelectItem>
                  <SelectItem value="special">Special</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message Body</label>
              <Textarea
                placeholder="Enter message"
                value={newAnnouncement.content}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                className="min-h-[100px]"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setIsModalOpen(false)} className="text-red-500 hover:text-red-600">
              Close
            </Button>
            <Button
              onClick={handleSave}
              className="bg-emerald-600 text-white hover:bg-emerald-700"
              disabled={!newAnnouncement.title || !newAnnouncement.content}
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}