import module from './characterConstants';

export const GET_ALL_CHARACTERS = `${module}/GET_ALL_CHARACTERS`;
export const GET_ALL_CHARACTERS_SUCCEDED = `${module}/GET_ALL_CHARACTERS_SUCCEDED`;

export const getAllCharacters = () => ({
  type: GET_ALL_CHARACTERS,
});

export const getAllCharactersSucceded = (data) => ({
  type: GET_ALL_CHARACTERS_SUCCEDED,
  payload: {
    data,
  },
});
