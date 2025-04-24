interface StatusPillProps {
  status: string;
}

export function StatusPill(props: StatusPillProps) {
  const pillColorCombo: Record<string, string> = {
    Collaborator: 'bg-[#ECFDF3] text-[#067647] border border-[#ABEFC6]',
    'Plan Owner': 'bg-[#F9F5FF] text-[#6941C6] border border-[#EAB8FF]',
    Rejected: 'bg-[#FEF3F2] text-[#B42318] border border-[#FCE4E4]',
    Draft: 'bg-[#F0F9FF] text-[#026AA2] border border-[#B2E0FE]',
  };

  const pillClass =
    pillColorCombo[props.status] || 'bg-[#F9FAFB] text-[#344054]';
  return (
    <div>
      <div
        className={`pill ${pillClass} flex items-center justify-center px-2 py-1 rounded-full w-fit`}
      >
        <span className="pill-text text-xs font-medium">{props.status}</span>
      </div>
    </div>
  );
}
