import { Button, DataTable, PfpFromName, StatusPill } from '@shared/ui';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ColumnDef } from '@tanstack/react-table';
import { Agent } from '@types';
import { MessageSquareText, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute(
  '/_NavbarLayout/_breadcrumbs/(users)/agents/'
)({
  component: RouteComponent,
});

function RouteComponent() {
  const [activeButton, setActiveButton] = useState('List');

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const buttonName = target.innerText;

    if (buttonName === 'List') {
      setActiveButton('List');
    } else if (buttonName === 'Deposits') {
      setActiveButton('Deposits');
    } else if (buttonName === 'Limits') {
      setActiveButton('Limits');
    } else if (buttonName === 'Ledger') {
      setActiveButton('Ledger');
    }
  };

  // TODO: fetch agents from the server
  const mockAgents: Agent[] = [
    {
      id: '02341',
      nameAndEmail: ['Bojan Liker', 'bojan.likar@remitunion.com'],
      phone: '1-650-730-0908 x075',
      date_of_birth: '1990-09-14',
      status: 'Collaborator',
    },
    {
      id: '02341',
      nameAndEmail: ['Olivia Rhye', 'olivia@remitunion.com'],
      phone: '1-650-730-0908 x075',
      date_of_birth: '1992-07-16',
      status: 'Plan Owner',
    },
    {
      id: '02341',
      nameAndEmail: ['Lana Steiner', 'lana@remitunion.com'],
      phone: '431.785.1695 x13962',
      date_of_birth: '1995-10-08',
      status: 'Rejected',
    },
    {
      id: '02341',
      nameAndEmail: ['Demi Wilkinson', 'demi@remitunion.com'],
      phone: '873.828.0460 x9529',
      date_of_birth: '1991-10-08',
      status: 'Collaborator',
    },
    {
      id: '02341',
      nameAndEmail: ['Candice Wu', 'candice@remitunion.com'],
      phone: '1-825-495-4968 x28607',
      date_of_birth: '1994-10-08',
      status: 'Draft',
    },
  ];

  const columns: ColumnDef<Agent>[] = [
    {
      accessorKey: 'id',
      header: () => <div className="text-[#475467] text-xs">ID</div>,
      cell: ({ row }) => (
        <div className="text-[#344054] text-xs">{row.getValue('id')}</div>
      ),
    },
    {
      accessorKey: 'nameAndEmail',
      header: () => <div className="text-[#475467] text-xs">Name</div>,
      cell: ({ row }) => {
        const [name, email] = row.getValue('nameAndEmail') as [string, string];
        return (
          <div className="flex items-center gap-2">
            {/* TODO: Add pfp here if present */}
            <PfpFromName name={name} />
            <div className="text-[#344054] text-xs">
              <div className="text-[#101828] font-medium">{name}</div>
              <div className="text-[#475467]">{email}</div>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: 'phone',
      header: () => <div className="text-[#475467] text-xs">Phone</div>,
      cell: ({ row }) => (
        <div className="text-[#344054] text-xs">{row.getValue('phone')}</div>
      ),
    },
    {
      accessorKey: 'date_of_birth',
      header: () => <div className="text-[#475467] text-xs">Date of Birth</div>,
      cell: ({ row }) => (
        <div className="text-[#344054] text-xs">
          {row.getValue('date_of_birth')}
        </div>
      ),
    },
    {
      accessorKey: 'status',
      header: () => <div className="text-[#475467] text-xs">Status</div>,
      cell: ({ row }) => (
        <div className="text-[#344054] text-xs">
          <StatusPill status={row.getValue('status')} />
        </div>
      ),
    },
    {
      id: 'actions',
      header: () => <div className="text-[#475467] text-xs">Actions</div>,
      cell: ({ row }) => (
        <div className="flex gap-4">
          <MessageSquareText className="text-[#475467]" size={18} />
          <Trash2 className="text-[#475467]" size={18} />
          <Pencil className="text-[#475467]" size={18} />
        </div>
      ),
    },
  ];

  const [agents, setAgents] = useState<Agent[]>(mockAgents);

  return (
    <div>
      <div className="flex justify-between mr-8">
        <h1 className="text-3xl font-semibold">Agents</h1>
        <Link
          className="font-semibold text-sm text-white bg-[#7F56D9] hover:bg-[#6941C6] cursor-pointer rounded-lg px-4 py-2.5"
          to="/agents/new"
        >
          Add New Agent
        </Link>
      </div>
      <p className="text-[#475467] mt-1">
        Manage agents and every activity around agents.
      </p>
      <hr className="border-[#EAECF0] mr-8 mt-5" />

      <div className="buttonGroup mt-8">
        <Button
          className={`font-semibold hover:bg-[#EAECF0] hover:text-[#1D2939] border border-[#D0D5DD] rounded-r-none ${
            activeButton === 'List'
              ? 'bg-[#EAECF0] text-[#1D2939]'
              : 'bg-white text-[#344054]'
          }`}
          onClick={handleButtonClick}
        >
          List
        </Button>
        <Button
          className={`font-semibold hover:bg-[#EAECF0] hover:text-[#1D2939] border border-[#D0D5DD] rounded-none ${
            activeButton === 'Deposits'
              ? 'bg-[#EAECF0] text-[#1D2939]'
              : 'bg-white text-[#344054]'
          }`}
          onClick={handleButtonClick}
        >
          Deposits
        </Button>
        <Button
          className={`font-semibold hover:bg-[#EAECF0] hover:text-[#1D2939] border border-[#D0D5DD] rounded-none ${
            activeButton === 'Limits'
              ? 'bg-[#EAECF0] text-[#1D2939]'
              : 'bg-white text-[#344054]'
          }`}
          onClick={handleButtonClick}
        >
          Limits
        </Button>
        <Button
          className={`font-semibold hover:bg-[#EAECF0] hover:text-[#1D2939] border border-[#D0D5DD] rounded-l-none ${
            activeButton === 'Ledger'
              ? 'bg-[#EAECF0] text-[#1D2939]'
              : 'bg-white text-[#344054]'
          }`}
          onClick={handleButtonClick}
        >
          Ledger
        </Button>
      </div>

      <DataTable columns={columns} data={agents} className="m-8 ml-0" />
    </div>
  );
}
