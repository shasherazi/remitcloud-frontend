import { ButtonGroup, DataTable, PfpFromName, StatusPill } from '@shared/ui';
import { createFileRoute } from '@tanstack/react-router';
import { ColumnDef } from '@tanstack/react-table';
import { Payment } from '@types';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/_NavbarLayout/_breadcrumbs/payments/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [activeButton, setActiveButton] = useState('List');

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setActiveButton(target.innerText);
  };

  // TODO: fetch payments from the server
  const mockPayments: Payment[] = [
    {
      id: '02341',
      nameAndEmail: ['Bojan Liker', 'bojan.likar@remitunion.com'],
      phone: '1-650-730-0908 x075',
      date: '2023-10-01',
      amount: '1000',
      currency: 'USD',
      status: 'Incomplete',
    },
    {
      id: '02342',
      nameAndEmail: ['Olivia Rhye', 'hi@bye.com'],
      phone: '1-650-730-0908 x075',
      date: '2023-10-02',
      amount: '2000',
      currency: 'USD',
      status: 'Pending',
    },
    {
      id: '02343',
      nameAndEmail: ['Lana Steiner', 'bye@hi.com'],
      phone: '431.785.1695 x13962',
      date: '2023-10-03',
      amount: '3000',
      currency: 'USD',
      status: 'Verifying',
    },
  ];

  const columns: ColumnDef<Payment>[] = [
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
      accessorKey: 'date',
      header: () => <div className="text-[#475467] text-xs">Date</div>,
      cell: ({ row }) => (
        <div className="text-[#344054] text-xs">{row.getValue('date')}</div>
      ),
    },
    {
      accessorKey: 'amount',
      header: () => <div className="text-[#475467] text-xs">Amount</div>,
      cell: ({ row }) => (
        // TODO: get correct currency symbol
        <div className="text-[#344054] text-xs">${row.getValue('amount')}</div>
      ),
    },
    {
      accessorKey: 'currency',
      header: () => <div className="text-[#475467] text-xs">Currency</div>,
      cell: ({ row }) => (
        <div className="text-[#344054] text-xs">{row.getValue('currency')}</div>
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
          <Trash2 className="text-[#475467]" size={18} />
          <Pencil className="text-[#475467]" size={18} />
        </div>
      ),
    },
  ];

  const [payments, setPayments] = useState<Payment[]>(mockPayments);

  return (
    <div>
      <h1 className="text-3xl font-semibold">Payments</h1>
      <hr className="border-[#EAECF0] mr-8 mt-5" />
      <div className="buttonGroup mt-8">
        <ButtonGroup
          buttonLabels={[
            'Incomplete',
            'Pending',
            'Verifying',
            'Compliance Hold',
            'Processing',
            'Send to Partner',
            'Cancelling',
            'Track',
            'Belmoney',
          ]}
          activeButton={activeButton}
          onButtonClick={handleButtonClick}
        />
      </div>
      <DataTable columns={columns} data={payments} className="m-8 ml-0" />
    </div>
  );
}
