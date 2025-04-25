interface PfpFromNameProps {
  name: string;
}

export function PfpFromName(props: PfpFromNameProps) {
  const nameParts = props.name.trim().split(' ').filter(Boolean);
  let initials = '';

  if (nameParts.length === 1) {
    initials = nameParts[0][0];
  } else {
    initials = nameParts[0][0] + nameParts[nameParts.length - 1][0];
  }

  initials = initials.toUpperCase();

  return (
    <div className="w-10 h-10 rounded-full bg-[#F2F4F7] flex items-center justify-center">
      <span className="text-[#475467] font-medium text-sm">{initials}</span>
    </div>
  );
}
