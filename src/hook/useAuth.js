import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";

// функция чтобы получать AuthContextyt  не каждый раз в каждом роуте , а в отдельной функции
export function useAuth() {
  return useContext(AuthContext);
}
