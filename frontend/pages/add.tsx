import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddReceipeMutation } from "../queries";
import { Container, Title, StyledForm, Button } from "../styled-components";

const Add: NextPage = () => {
  interface IData {
    title: string;
    description: string;
    image: string;
    ingridients_input: string;
  }
  const { register, handleSubmit } = useForm<IData>();
  const [addRecepie, { error, loading }] = useAddReceipeMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<IData> = async (params: IData) => {
    const { title, description, image, ingridients_input } = params;
    const ingridients = ingridients_input.split(",");
    addRecepie({
      variables: {
        createRecepieInput: {
          title,
          image,
          description,
          ingridients,
        },
      },
    });
    router.push("/");
  };
  if (loading) return <h1>Submitting...</h1>;
  if (error) return <h1>{error.message}</h1>;
  return (
    <>
      <Head>
        <title>Add recepie</title>
      </Head>
      <Container>
        <Title>Add recepie</Title>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            required
          />
          <input
            type="text"
            placeholder="Description"
            {...register("description")}
            required
          />
          <input
            type="text"
            placeholder="Image"
            {...register("image")}
            required
          />
          <input
            type="text"
            placeholder="Ingridients"
            {...register("ingridients_input")}
            required
          />
          <Button type="submit">Add</Button>
        </StyledForm>
      </Container>
    </>
  );
};
export default Add;
