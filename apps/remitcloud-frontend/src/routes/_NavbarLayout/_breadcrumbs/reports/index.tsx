import { createFileRoute, Link } from '@tanstack/react-router';
import customerListIcon from '../../../../assets/reports/CustomerList.svg';
import countriesIcon from '../../../../assets/reports/Countries.svg';
import transactionsIcon from '../../../../assets/reports/Transactions.svg';

export const Route = createFileRoute('/_NavbarLayout/_breadcrumbs/reports/')({
  component: RouteComponent,
});

function RouteComponent() {
  // TODO: change href to the correct path
  const reports = [
    {
      id: 1,
      name: 'Customer List',
      svg: customerListIcon,
      href: '#',
    },
    {
      id: 2,
      name: 'Countries',
      svg: countriesIcon,
      href: '#',
    },
    {
      id: 3,
      name: 'Transactions',
      svg: transactionsIcon,
      href: '#',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold">Reports</h1>
      <p className="text-[#475467] text-sm mt-2">
        Manage and create new reports
      </p>
      <hr className="border-[#EAECF0] mr-8 mt-5" />

      <div className="reports">
        <ul className="flex gap-4 mt-8">
          {reports.map((report) => (
            <Link to={report.href} className='basis-0 grow max-w-[132px]'>
              <li
                key={report.id}
                className="flex flex-col border border-[#D0D5DD] rounded-lg p-4 items-center"
              >
                <img src={report.svg} alt={report.name} />
                <span className="text-[#475467] text-sm mt-2">
                  {report.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
