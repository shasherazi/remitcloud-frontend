import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_NavbarLayout/')({
  component: App,
});

function App() {
  return (
    <div className="flex gap-8">
      <h1 className="text-2xl bg-amber-200">
        hi, this page is under construction
      </h1>
    </div>
  );
}
