type NavLink = {
  href: string;
  label: string;
};

export interface NavLinkProps {
  navlinks: NavLink[]
  routeHash?: string;
}