import { callByPost } from '.';

export const getAllCharacters = (filters) => callByPost('characters', filters);
