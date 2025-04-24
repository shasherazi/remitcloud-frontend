interface PfpFromNameProps {
  name: string;
}

export function PfpFromName(props: PfpFromNameProps) {
  const initials = props.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className="w-10 h-10 rounded-full bg-[#F2F4F7] flex items-center justify-center">
      <span className="text-[#475467] font-medium text-sm">{initials}</span>
    </div>
  );
}
