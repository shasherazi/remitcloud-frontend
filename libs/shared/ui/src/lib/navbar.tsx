import {
  Book,
  ClipboardCheck,
  FileText,
  HandCoins,
  Headphones,
  House,
  Megaphone,
  Users,
} from 'lucide-react';
import { Input } from '../components/ui/input';
import NavLink from '../components/NavLink';
import NavLinkCollapsable from '../components/NavLinkCollapsable';

interface NavbarProps {
  logo: string;
}

export function Navbar(props: NavbarProps) {
  return (
    <div className="min-h-screen min-w-[325px] border-1 border-r-[#EAECF0] py-8 px-6">
      <div className="flex items-center">
        {/* TODO: change font acc to figma*/}
        <img
          src={props.logo}
          alt="Logo"
          className="w-8 h-8 inline-block mr-2.5"
        />
        <h1 className="text-xl font-bold">RemitUnion</h1>
      </div>

      <Input className="mt-6" placeholder="Search" />

      <ul className="mt-6 py-2">
        <li>
          <NavLink label="Dashboard" icon={House} href="/" active={true} />
          <NavLinkCollapsable
            mainLabel="Users"
            mainIcon={Users}
            subLabels={[
              'Admin & Staff Management',
              'Customer Management',
              'Agent/Sub-Agent',
            ]}
            hrefs={['/', '/', '/']}
          />
          <NavLinkCollapsable
            mainLabel="Transactions"
            mainIcon={ClipboardCheck}
            subLabels={[]}
            hrefs={[]}
          />
          <NavLinkCollapsable
            mainLabel="Compliance"
            mainIcon={Book}
            subLabels={[]}
            hrefs={[]}
          />
          <NavLinkCollapsable
            mainLabel="Finance & Settlement"
            mainIcon={HandCoins}
            subLabels={[]}
            hrefs={[]}
          />
          <NavLinkCollapsable
            mainLabel="Reports"
            mainIcon={FileText}
            subLabels={[]}
            hrefs={[]}
          />
          <NavLink label="Complaints" icon={Headphones} href="/" />
          <NavLink label="Promotions" icon={Megaphone} href="/" />
        </li>
      </ul>
    </div>
  );
}
