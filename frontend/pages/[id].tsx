import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEditRecepieMutation, useRecepieQuery } from "../queries";
import { Container, Title, StyledForm, Button } from "../styled-components";
import { RecepieType } from "../types";

const Edit: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  interface IData {
    title_input?: string;
    description_input?: string;
    image_input?: string;
    ingridients_input?: string;
  }
  const { register, handleSubmit } = useForm<IData>();
  const { data, error, loading } =
    useRecepieQuery<{ recepie: RecepieType }>(id);
  const [editRecepie] = useEditRecepieMutation();

  const onSubmit: SubmitHandler<IData> = async (params: IData) => {
    const { title_input, description_input, image_input, ingridients_input } =
      params;
    const ingridients = ingridients_input!.split(",");
    const id = router.query.id as string;
    let updateRecepieInput: any = {
      title: title_input === "" ? undefined : title_input,
      description: description_input === "" ? undefined : description_input,
      image: image_input === "" ? undefined : image_input,
      ingridients: ingridients[0] === "" ? undefined : ingridients,
    };

    updateRecepieInput = Object.entries(updateRecepieInput)
      .filter(([key, val]) => val !== undefined)
      .reduce((acc, [key, val]) => {
        return { ...acc, [key]: val };
      }, {});
    updateRecepieInput = {
      id,
      ...updateRecepieInput,
    };

    editRecepie({
      variables: {
        updateRecepieInput,
      },
    });
    router.push("/");
  };
  if (loading) return <h1>Submitting...</h1>;
  if (error) return <h1>{error.message}</h1>;
  return (
    <>
      <Head>
        <title>Edit recepie</title>
      </Head>
      <Container>
        <Title>Edit recepie</Title>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("title_input")}
            placeholder={data?.recepie.title}
          />
          <input
            type="text"
            {...register("description_input")}
            placeholder={data?.recepie.description}
          />
          <input
            type="text"
            {...register("image_input")}
            placeholder={data?.recepie.image}
          />
          <input
            type="text"
            {...register("ingridients_input")}
            placeholder={data?.recepie.ingridients.join(",")}
          />
          <Button type="submit">Edit</Button>
        </StyledForm>
      </Container>
    </>
  );
};
export default Edit;
