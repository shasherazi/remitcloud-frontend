import { Button } from './ui/button';

interface ButtonGroupProps {
  buttonLabels: string[];
  activeButton: string;
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ButtonGroup({
  buttonLabels,
  activeButton,
  onButtonClick,
}: ButtonGroupProps) {
  return (
    <div className="flex">
      {buttonLabels.map((label) => (
        <Button
          key={label}
          className={`font-semibold hover:bg-[#EAECF0] hover:text-[#1D2939] border border-[#D0D5DD]
          first:rounded-r-none last:rounded-l-none last:border-l-0 not-first:not-last:rounded-none not-first:not-last:border-l-0 ${
            activeButton === label
              ? 'bg-[#EAECF0] text-[#1D2939]'
              : 'bg-white text-[#344054]'
          }`}
          onClick={onButtonClick}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
