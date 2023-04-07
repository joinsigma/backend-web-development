import bcrypt from "bcrypt";

export async function hashString(stringToHash) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(stringToHash, salt);
}

export async function compareString(firstString, secondString) {
  return await bcrypt.compare(firstString, secondString);
}
