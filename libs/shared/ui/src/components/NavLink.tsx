import { LucideIcon } from 'lucide-react';
import { Link } from '@tanstack/react-router';

interface NavLinkProps {
  currentPath: string;
  icon?: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
}

export default function NavLink(props: NavLinkProps) {
  return (
    <div
      className={`hover:bg-[#F9FAFB] rounded py-2 px-3 mb-2 ${
        props.isActive ? 'bg-[#F9FAFB]' : ''
      }
      '// TODO: this is temporary to indicate the not finished pages'
      ${props.href === '/' ? 'bg-red-100' : ''}
`}
    >
      <Link to={props.href || '#'}>
        <div className="flex gap-3">
          {props.icon && <props.icon className="text-[#667085]" />}
          <span className="text-[#344054] font-semibold">{props.label}</span>
        </div>
      </Link>
    </div>
  );
}
