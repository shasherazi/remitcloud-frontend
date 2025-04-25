import { Navbar } from '../../../../../libs/shared/ui/src/lib/navbar';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import logo from '../../assets/Logomark.svg';

export const Route = createFileRoute('/_NavbarLayout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex gap-8 w-full">
      <Navbar logo={logo} />
      <Outlet />
    </div>
  );
}
