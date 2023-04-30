import { ReactComponent as Star } from "/public/images/star.svg";
import { ReactComponent as Home } from "/public/images/home.svg";
import { ReactComponent as Profile } from "/public/images/profile.svg";

import { Link } from "atomic-router-react";

import { routes } from "~/shared/routes";

export function Navigation() {
  return (
    <div className="flex items-center justify-between bg-ce-gray pb-safe">
      <Link
        to={routes.register_1}
        activeClassName="text-main-purple"
        inactiveClassName="text-blue-gray"
        className="flex grow justify-center py-3"
      >
        <Star />
      </Link>
      <Link
        to={routes.home}
        activeClassName="text-main-purple"
        inactiveClassName="text-blue-gray"
        className="flex grow justify-center py-3"
      >
        <Home />
      </Link>
      <Link
        to={routes.login}
        activeClassName="text-main-purple"
        inactiveClassName="text-blue-gray"
        className="flex grow justify-center py-3"
      >
        <Profile />
      </Link>
    </div>
  );
}
