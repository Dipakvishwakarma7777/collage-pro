import { Bell } from "lucide-react";

function NotificationBell() {
  return (
    <div className="relative">
      <Bell size={28} />

      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
        3
      </span>
    </div>
  );
}

export default NotificationBell;
