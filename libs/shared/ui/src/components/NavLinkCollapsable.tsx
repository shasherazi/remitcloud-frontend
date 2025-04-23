import { useState } from 'react';
import NavLink from './NavLink';
import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';

interface NavLinkCollapsableProps {
  mainIcon: LucideIcon;
  mainLabel: string;
  subLabels?: string[]; // TODO: make it required
  hrefs?: string[]; // TODO: make it required
  active?: boolean;
}

export default function NavLinkCollapsable(props: NavLinkCollapsableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(props.active || false);

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <div className="mainLabel rounded py-2 px-3 mb-2 hover:bg-[#F9FAFB] flex justify-between">
        <div className="flex gap-3">
          <props.mainIcon className="text-[#667085]" />
          {/* TODO: use correct fonts */}
          <span className="text-[#344054] font-semibold">
            {props.mainLabel}
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="text-[#667085]" />
        ) : (
          <ChevronDown className="text-[#667085]" />
        )}
      </div>
      {isOpen && (
        <div className="subLabels ml-12 mt-3 mb-[-4px]">
          {props.subLabels?.map((label, index) => (
            <NavLink key={index} label={label} href={props.hrefs?.[index]} />))}
        </div>
      )}
    </div>
  );
}
