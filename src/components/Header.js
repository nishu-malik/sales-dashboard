import {
  ArrowDropDown,
  DateRange,
  DoneAll,
  NotificationsNone,
  Search,
} from "@material-ui/icons";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setnotifications] = useState([
    "account ready",
    "new sale available",
    "you earned $200",
  ]);
  const handleClear = () => {
    setnotifications([]);
    setIsOpen(false);
  };
  var day = new Date();
  var months = new Array();
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";
  const month = months[day.getMonth()];
  const date = day.getDate();
  return (
    <div className="header">
      <div className="header__searchInput">
        <Search className="header__searchInputIcon" />
        <input type="text" placeholder="Search for anything" />
      </div>
      <div className="header__middle">
        <DateRange />
        <p>
          Today
          <span>
            {date} {month}{" "}
          </span>
          <ArrowDropDown />
        </p>
      </div>
      <div className="header__right">
        <p>
          You have <b>27</b> new leads
        </p>
        <div className="header__RightNotification">
          <NotificationsNone
            className="header__RightNotificationIcon"
            onClick={() => setIsOpen(!isOpen)}
          />
          <span>{notifications.length}</span>
          {isOpen && (
            <div className="header__notificationContainer">
              <ul>
                {notifications.map((item) => (
                  <li className="header__notificationItem">
                    <span></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <span>Mark all as read</span>
                <DoneAll
                  className="header__notificationDone"
                  onClick={handleClear}
                />
              </div>
            </div>
          )}
        </div>

        <div className="header__RightProfile">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1"
            alt="profile"
          />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
