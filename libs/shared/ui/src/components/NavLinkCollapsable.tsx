import { useState } from 'react';
import NavLink from './NavLink';
import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';

interface NavLinkCollapsableProps {
  currentPath: string;
  mainIcon: LucideIcon;
  mainLabel: string;
  subLabels: string[];
  hrefs: string[];
  isActive?: boolean;
}

export default function NavLinkCollapsable(props: NavLinkCollapsableProps) {
  const shouldBeActive = props.hrefs.some(
    (href) =>
      props.currentPath === href || props.currentPath.startsWith(href + '/')
  );

  const [isOpen, setIsOpen] = useState(shouldBeActive);

  return (
    <div>
      <div
        className="mainLabel cursor-pointer rounded py-2 px-3 mb-2 hover:bg-[#F9FAFB] flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-3">
          <props.mainIcon className="text-[#667085]" />
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
            <NavLink
              key={index}
              label={label}
              href={props.hrefs[index]}
              currentPath={props.currentPath}
              isActive={
                props.currentPath === props.hrefs[index] ||
                props.currentPath.startsWith(props.hrefs[index] + '/')
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
