import { ChangeEvent, RefObject, MouseEvent } from "react";

export interface AuthorizationProps {
  inputRef: RefObject<HTMLInputElement | null>;
  onChangeFn: (e: ChangeEvent<HTMLInputElement>) => void;
  inputFormFn: () => void;
  loginState: string;
}
