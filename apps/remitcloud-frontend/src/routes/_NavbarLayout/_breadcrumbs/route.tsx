import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from '@tanstack/react-router';
import { ChevronRight, Home } from 'lucide-react';

export const Route = createFileRoute('/_NavbarLayout/_breadcrumbs')({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  const pathnameTitleCase =
    pathname.charAt(0).toUpperCase() + pathname.slice(1);
  const isHomePage = location.pathname === '/';

  return (
    <div className="w-full">
      {!isHomePage && (
        <div className="breadcrumbs pt-8 pb-5 pl-0">
          <div className="flex gap-2 items-center">
            <span className="text-[#667085]">
              <Link to="/">
                <Home />
              </Link>
            </span>
            <span className="text-[#D0D5DD]">
              <ChevronRight />
            </span>
            <span className="text-[#344054] font-semibold text-sm">
              {pathnameTitleCase}
            </span>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}
