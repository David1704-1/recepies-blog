import { gql, useMutation, useQuery } from "@apollo/client";
const GET_ALL_RECEPIES_QUERY = gql`
  query {
    recepies {
      id
      title
      description
      image
      date
      ingridients
    }
  }
`;
const ADD_RECEIPE_MUTATION = gql`
  mutation ($createRecepieInput: CreateRecepieInput!) {
    createRecepie(createRecepieInput: $createRecepieInput)
  }
`;
const DELETE_RECEPIE_MUTATION = gql`
  mutation ($id: String!) {
    removeRecepie(id: $id)
  }
`;
const GET_RECEPIE_QUERY = gql`
  query ($id: String!) {
    recepie(id: $id) {
      title
      date
      description
      ingridients
      image
    }
  }
`;
const EDIT_RECEPIE_MUTATION = gql`
  mutation ($updateRecepieInput: UpdateRecepieInput!) {
    updateRecepie(updateRecepieInput: $updateRecepieInput)
  }
`;
export const useAllRecepiesQuery = <T>() => {
  return useQuery<T>(GET_ALL_RECEPIES_QUERY);
};
export const useAddReceipeMutation = () => {
  return useMutation(ADD_RECEIPE_MUTATION, {
    refetchQueries: [GET_ALL_RECEPIES_QUERY],
  });
};
export const useDeleteRecepieMutation = () => {
  return useMutation(DELETE_RECEPIE_MUTATION, {
    refetchQueries: [GET_ALL_RECEPIES_QUERY],
  });
};
export const useRecepieQuery = <T>(id: string) => {
  return useQuery<T>(GET_RECEPIE_QUERY, { variables: { id } });
};
export const useEditRecepieMutation = () => {
  return useMutation(EDIT_RECEPIE_MUTATION, {
    refetchQueries: [GET_ALL_RECEPIES_QUERY],
  });
};
