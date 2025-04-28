import {
  Book,
  ClipboardCheck,
  HandCoins,
  Headphones,
  House,
  Megaphone,
  Search,
  Settings,
  Users,
} from 'lucide-react';
import { Input, InputIcon, InputRoot } from '../components/ui/input';
import NavLink from '../components/NavLink';
import NavLinkCollapsable from '../components/NavLinkCollapsable';
import { useRouterState } from '@tanstack/react-router';

interface NavbarProps {
  logo: string;
}

export function Navbar(props: NavbarProps) {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <div className="min-h-screen min-w-[335px] border-1 border-r-[#EAECF0] py-8 px-6 flex flex-col justify-between">
      <div className="top-stuff">
        <div className="flex items-center">
          {/* TODO: change font acc to figma*/}
          <img
            src={props.logo}
            alt="Logo"
            className="w-8 h-8 inline-block mr-2.5"
          />
          <h1 className="text-xl font-bold">RemitUnion</h1>
        </div>

        <InputRoot className="mt-8 text-[#667085]">
          <InputIcon>
            <Search />
          </InputIcon>
          <Input placeholder="Search" />
        </InputRoot>

        <ul className="mt-6 py-2">
          <li>
            <NavLink
              label="Dashboard"
              icon={House}
              href="/"
              currentPath={currentPath}
              isActive={currentPath === '/'}
            />
            <NavLinkCollapsable
              currentPath={currentPath}
              mainLabel="Users"
              mainIcon={Users}
              subLabels={[
                'Admin & Staff Management',
                'Customer Management',
                'Agent/Sub-Agent',
              ]}
              hrefs={['/', '/', '/agents']}
              isActive={
                currentPath === '/' || // TODO: use correct path
                currentPath === '/' || // TODO: use correct path
                currentPath === '/agents' ||
                currentPath.startsWith('/agents/')
              }
            />
            <NavLinkCollapsable
              currentPath={currentPath}
              mainLabel="Transactions"
              mainIcon={ClipboardCheck}
              subLabels={[]}
              hrefs={[]}
            />
            <NavLinkCollapsable
              currentPath={currentPath}
              mainLabel="Compliance"
              mainIcon={Book}
              subLabels={[]}
              hrefs={[]}
            />
            <NavLinkCollapsable
              currentPath={currentPath}
              mainLabel="Finance & Settlement"
              mainIcon={HandCoins}
              subLabels={[]}
              hrefs={[]}
            />
            <NavLink
              currentPath={currentPath}
              label="Reports"
              icon={Headphones}
              href="/reports"
              isActive={currentPath === '/reports'}
            />
            {/* not sure if this is collapsable or not*/}
            {/* <NavLinkCollapsable */}
            {/*   currentPath={currentPath} */}
            {/*   mainLabel="Reports" */}
            {/*   mainIcon={FileText} */}
            {/*   subLabels={[]} */}
            {/*   hrefs={[]} */}
            {/* /> */}
            <NavLink
              currentPath={currentPath}
              label="Complaints"
              icon={Headphones}
              href="/complaints"
              isActive={currentPath === '/complaints'}
            />
            <NavLink
              label="Promotions"
              icon={Megaphone}
              href="/"
              currentPath={currentPath}
              isActive={currentPath === '/promotions'}
            />
          </li>
        </ul>
      </div>

      <div className="bottom-stuff">
        <NavLink
          currentPath={currentPath}
          label="Settings"
          icon={Settings}
          href="/"
          isActive={currentPath === '/settings'}
        />
      </div>
    </div>
  );
}
