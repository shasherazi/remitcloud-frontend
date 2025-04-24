import { Navbar } from '../../../../../libs/shared/ui/src/lib/navbar';
import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router';
import logo from '../../assets/Logomark.svg';

export const Route = createFileRoute('/_NavbarLayout')({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();

  return (
    <div className="flex gap-8 w-full">
      <Navbar logo={logo} currentPath={location.pathname} />
      <Outlet />
    </div>
  );
}
