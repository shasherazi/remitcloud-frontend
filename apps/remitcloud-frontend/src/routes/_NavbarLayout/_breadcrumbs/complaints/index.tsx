import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_NavbarLayout/_breadcrumbs/complaints/')(
  {
    component: RouteComponent,
  }
);

function RouteComponent() {
  return (
    <div>
      <h1 className='text-3xl font-semibold'>Complaints</h1>
      <hr className='border-[#EAECF0] mr-8 mt-5'/>
    </div>
  );
}
