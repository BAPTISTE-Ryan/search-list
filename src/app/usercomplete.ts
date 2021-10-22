interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
interface ICompany {
  bs: string;
  catchphrase: string;
  company: string;
}

export interface IUserUnitary {
  name?: string;
  id?: number;
  email?: string;
  address?: IAddress;
  show?: boolean;
  phone?: string;
  username?: string;
  website?: string;
  company?: ICompany;
}
