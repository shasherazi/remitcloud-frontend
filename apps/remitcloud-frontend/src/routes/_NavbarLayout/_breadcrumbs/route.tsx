import React from 'react';
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

const getBreadcrumbs = (path: string) => {
  // Split the path into segments
  const segments = path.split('/').filter((segment) => segment !== '');

  // Handle special cases
  if (path === '/agents/new') {
    return [
      { label: 'Agents', path: '/agents' },
      { label: 'Add New Agent', path: '/agents/new' },
    ];
  }

  // For regular paths, just return the capitalized last segment
  if (segments.length > 0) {
    const lastSegment = segments[segments.length - 1];
    const pathTitleCase =
      lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    return [{ label: pathTitleCase, path }];
  }

  return [];
};

function RouteComponent() {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);
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

            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                <span className="text-[#D0D5DD]">
                  <ChevronRight />
                </span>
                <span
                  className={`text-[#344054] font-semibold text-sm py-1 px-2 ${
                    index === breadcrumbs.length - 1 ? 'bg-[#F9FAFB]' : ''
                  }`}
                >
                  {index < breadcrumbs.length - 1 ? (
                    <Link to={crumb.path}>{crumb.label}</Link>
                  ) : (
                    crumb.label
                  )}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
}
