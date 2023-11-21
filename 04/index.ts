import { readFile, writeFile } from "../01";
import { User } from "../02";
import { findUserByCpf } from "../03";

export function deleteUser(cpf: string): void {
  try {
    const file = readFile() as User[];
    const user = findUserByCpf(cpf);

    if (!user) {
      throw new Error("User not found");
    }

    const newFile = file.filter((el) => {
      return el.cpf !== user?.cpf;
    });

    writeFile(newFile);
  } catch (error) {
    console.error(error);
  }
}

deleteUser("1304981309");
