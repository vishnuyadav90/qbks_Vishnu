import { NavLink, Outlet } from "react-router-dom";
import { getSideNavItems } from "../data/navItems";
import i18nJSON from "../i18n/en_US.json";

const SideBar = () => {
  let sideNavItms = getSideNavItems();
  let i18n = JSON.parse(JSON.stringify(i18nJSON));
  return (
    <div>
      <nav>
        {sideNavItms.map((item) => (
          <div>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "black" : "",
                  fontWeight: isActive ? "bold" : "",
                };
              }}
              to={`/${item}`}
              key={item}
            >
              {i18n?.routes[item] ? i18n.routes[item] : item}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
