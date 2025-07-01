import internal from "stream";

export interface Item {
    id: string;
    name: string;
    category: string;
    description: string;
    size: ArrayLike<number> | string;
    photo: string[]; // Changed to array of strings
}