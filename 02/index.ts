import { readFile, writeFile } from "../01";

export type User = {
  name: string;
  email: string;
  cpf: string;
  career?: string;
  address: {
    cep: string;
    street: string;
    complement: string;
    district: string;
    city: string;
  } | null;
};

export function createUser(user: User): User {
  const file = readFile() as User[];
  file.push(user);
  writeFile(file);

  return user;
}

export function getAllUsers(): User[] {
  return readFile() as User[];
}

const data: User = {
  name: "Victor",
  email: "victor@email.com",
  cpf: "1304981309",
  address: null,
};

createUser(data);
