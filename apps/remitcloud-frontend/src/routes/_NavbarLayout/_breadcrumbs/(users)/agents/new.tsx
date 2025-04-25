import {
  Button,
  Input,
  InputIcon,
  InputRoot,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@shared/ui';
import { createFileRoute } from '@tanstack/react-router';
import { CircleHelp, Mail, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute(
  '/_NavbarLayout/_breadcrumbs/(users)/agents/new'
)({
  component: RouteComponent,
});

function RouteComponent() {
  const [invites, setInvites] = useState([{ email: '', role: '' }]);

  const addInviteField = () => {
    setInvites([...invites, { email: '', role: '' }]);
  };

  const updateInvite = (index: number, field: string, value: string) => {
    const updatedInvites = [...invites];
    updatedInvites[index] = { ...updatedInvites[index], [field]: value };
    setInvites(updatedInvites);
  };

  const deleteInvite = (index: number) => {
    // Don't delete if it's the only invite field
    if (invites.length === 1) {
      return;
    }

    const updatedInvites = invites.filter((_, i) => i !== index);
    setInvites(updatedInvites);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Invites to send:', invites);
    // Implement send logic here
  };

  return (
    <div>
      <div className="flex justify-between mr-8">
        <h1 className="text-3xl font-semibold">New Agent</h1>
      </div>
      <hr className="border-[#EAECF0] mr-8 mt-5" />
      <div className="mt-8 mr-8 flex flex-col">
        <div className="flex gap-8 mb-6">
          <div className="max-w-[280px]">
            <h2 className="flex items-center gap-0.5">
              <span className="font-semibold text-[#344054]">
                Invite new agent
              </span>
              <CircleHelp size={18} className="text-[#98A2B3]" />
            </h2>
            <p className="text-[#475467]">
              Get your plans up and running faster by inviting your team to
              collaborate.
            </p>
          </div>
          <div className="form w-full">
            <form onSubmit={handleSubmit}>
              {invites.map((invite, index) => (
                <div key={index} className="flex gap-4 mb-4">
                  <InputRoot className="text-[#667085] w-full">
                    <InputIcon>
                      <Mail />
                    </InputIcon>
                    <Input
                      placeholder="you@example.com"
                      value={invite.email}
                      type="email"
                      required
                      onChange={(e) =>
                        updateInvite(index, 'email', e.target.value)
                      }
                    />
                  </InputRoot>
                  <Select
                    value={invite.role}
                    onValueChange={(value) =>
                      updateInvite(index, 'role', value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem value="read/write">Read/Write</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    type="button"
                    className={`p-2 hover:text-red-600 ${
                      invites.length === 1
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-red-500 hover:bg-red-50'
                    }`}
                    onClick={() => deleteInvite(index)}
                    disabled={invites.length === 1}
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              ))}
            </form>
          </div>
        </div>
        <div className="buttons flex justify-between items-center">
          <Button
            variant="secondary"
            className="text-[#667085] cursor-pointer"
            onClick={addInviteField}
            type="button"
          >
            <Plus />
            <span className="font-semibold">Add another</span>
          </Button>
          <Button
            className="bg-[#7F56D9] hover:bg-[#6941C6] flex items-center text-white cursor-pointer"
            onClick={handleSubmit}
            type="submit"
          >
            <Mail />
            <span>Send Invites</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
