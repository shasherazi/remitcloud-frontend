import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@remitcloud-frontend/ui';
import logo from '../assets/Logomark.svg';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="flex gap-8">
      <Navbar logo={logo} />
      <h1 className="text-2xl bg-amber-400">hi</h1>
    </div>
  );
}
