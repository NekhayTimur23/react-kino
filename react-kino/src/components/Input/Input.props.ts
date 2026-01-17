import { ChangeEvent, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}