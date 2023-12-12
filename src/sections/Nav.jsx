import { NavLink } from "react-router-dom";

const Nav = () => {
    const routes_navItems = [
        { path: "/", name: "Home" },
        { path: "/a", name: "About" },
        { path: "/aa", name: "Projects" },
        { path: "/as", name: "Experience" },
    ];

    return (
        <div className="shadow-md py-4">
            <div>
                <ul className="flex gap-12 justify-center font-semibold">
                    {routes_navItems.map((route, idx) => (
                        <li key={idx}>
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? ` text-[--text-highlight] border-b-2 border-[--text-highlight]`
                                        : ` hover:text-[--text-highlight]`
                                }
                                to={route.path}
                            >
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Nav;
