import bcrypt, { hash } from "bcrypt";

const saltRounds = 10;
const genSalt = bcrypt.genSalt(saltRounds);

export const generatepass = (pass: string) => {
  return bcrypt
    .hash(pass, 10)
    .then((hash) => hash)
    .catch((err) => false);
};

export const comparepass = (pas: string, hash: string) => {
  return bcrypt
    .compare(pas, hash)
    .then((result) => result)
    .catch((err) => false);
};
