import { useState } from "react";

export const useAuth = () => {
  const [isAuthorized, setIsAuthorized] = useState(true);

  return {
    isAuthorized,
    toggleAuth: () => setIsAuthorized((prev) => !prev),
  };
};
