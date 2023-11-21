import { readFile, writeFile } from "../01";
import { User } from "../02";

export function findUserByCpf(cpf: string): User | undefined {
  const file = readFile() as User[];

  const findUser = file.find((el) => {
    return el.cpf === cpf;
  });

  return findUser;
}

export function updateUser(cpf: string, user: User): string {
  const file = readFile() as User[];
  const userData = findUserByCpf(cpf);

  if (!userData) {
    return "User not found";
  }

  const fileForEditing = file.filter((el) => {
    el != userData;
  });

  fileForEditing.push(user);
  writeFile(fileForEditing);

  return "Success update user";
}

const newUpdateUser = {
  name: "Victorrr",
  email: "victor@email.com",
  cpf: "352345324",
  address: null,
};

/* console.log(updateUser("1304981309", newUpdateUser)); */
