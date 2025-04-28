//TODO: maybe add a profile picture link???
export interface Complaint {
  id: string;
  nameAndEmail: [string, string];
  phone: string;
  date_of_birth: string;
  status: string;
}

//TODO: maybe add a profile picture link???
export interface Agent {
  id: string;
  nameAndEmail: [string, string];
  phone: string;
  date_of_birth: string;
  status: string;
}

//TODO: maybe add a profile picture link???
export interface Payment {
  id: string;
  nameAndEmail: [string, string];
  phone: string;
  date: string;
  amount: string;
  currency: string;
  status: string;
}
