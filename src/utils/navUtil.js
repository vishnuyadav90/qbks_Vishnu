import { NavLink, Outlet } from "react-router-dom";
import i18nJSON from "../i18n/en_US.json";
import { getNavItems } from "../data/navItems";

export default function getNavBarContent(navPath) {
  let navItems = getNavItems(navPath);
  let i18n = JSON.parse(JSON.stringify(i18nJSON));
  return (
    <div class="inner-nav-container">
      <div class="inner-nav">
        <nav>
          {navItems.map((item) => (
            <div>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "black" : "",
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
                to={`/${navPath}/${item}`}
                key={item}
              >
                {i18n?.routes[item] ? i18n.routes[item] : item}
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
