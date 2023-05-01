import { ReactComponent as Home } from "/public/images/home.svg";
import { ReactComponent as Profile } from "/public/images/profile.svg";

import { Link } from "atomic-router-react";

import { routes } from "~/shared/routes";

const navigationItems = [
  { to: routes.home, icon: <Home /> },
  { to: routes.profile, icon: <Profile /> },
];

export function Navigation() {
  return (
    <div className="flex items-center justify-between bg-ce-gray pb-safe">
      {navigationItems.map(function (item, index) {
        return (
          <Link
            key={index}
            to={item.to}
            activeClassName="text-ce-purple"
            inactiveClassName="text-ce-blue-gray"
            className="flex grow justify-center py-3"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
