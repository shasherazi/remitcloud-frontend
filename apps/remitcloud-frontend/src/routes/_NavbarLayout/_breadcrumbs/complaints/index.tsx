import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { DataTable, PfpFromName, StatusPill } from '@shared/ui';
import { ColumnDef } from '@tanstack/react-table';
import type { Complaint } from '@types';
import { MessageSquareText, Pencil, Trash2 } from 'lucide-react';

export const Route = createFileRoute('/_NavbarLayout/_breadcrumbs/complaints/')(
  {
    component: RouteComponent,
  }
);

function RouteComponent() {
  const mockComplaints: Complaint[] = [
    {
      id: '02341',
      nameAndEmail: ['Bojan Likar', 'bojan.likar@remitunion.com'],
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

  const columns: ColumnDef<Complaint>[] = [
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

  const [complaints, setComplaints] = useState<Complaint[]>(mockComplaints);

  return (
    <div>
      <h1 className="text-3xl font-semibold">Complaints</h1>
      <hr className="border-[#EAECF0] mr-8 mt-5" />
      <DataTable columns={columns} data={complaints} className="m-8 ml-0" />
    </div>
  );
}
