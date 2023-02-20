type UserType = {
  name: string;
  username: string;
  role: "Admin" | "User";
  password: string;
  access_token: string;
};

//! Mock backend users data
export const users: UserType[] = [
  {
    name: "Admin",
    username: "admin",
    role: "Admin",
    password: "12345",
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4iLCJsb2dpbiI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NSJ9.SEOqIrsH8QpJC27ACKzcqg3tNFtXzCDn_Y2sWIAtE9Y",
  },
  {
    name: "Denys",
    username: "strange",
    role: "User",
    password: "12345",
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGVueXMiLCJsb2dpbiI6InN0cmFuZ2UiLCJyb2xlIjoidXNlciIsInBhc3N3b3JkIjoiMTIzNDUifQ.ZIXMmas7wrfp9Xt6TSvok8eoJlOg3TEMx5gK4upTnBo",
  },
];
