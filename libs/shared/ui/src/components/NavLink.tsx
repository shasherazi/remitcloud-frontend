import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  icon?: LucideIcon;
  label: string;
  href?: string; // TODO: make it required
  active?: boolean;
}

export default function NavLink(props: NavLinkProps) {
  const [isActive, setIsActive] = useState(props.active || false);

  return (
    <div
      className={`hover:bg-[#F9FAFB] rounded py-2 px-3 mb-2 ${
        isActive ? 'bg-[#F9FAFB]' : ''
      }`}
    >
      {/* TODO: make href required */}
      <Link to={props.href || '#'}>
        <div className="flex gap-3">
          {props.icon && <props.icon className="text-[#667085]" />}
          {/* TODO: use correct fonts */}
          <span className="text-[#344054] font-semibold">{props.label}</span>
        </div>
      </Link>
    </div>
  );
}
