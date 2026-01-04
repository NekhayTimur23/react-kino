import { HTMLAttributes } from "react";

export interface GradeProps extends HTMLAttributes<HTMLDivElement>{
    favorites: number
    position?: string
}