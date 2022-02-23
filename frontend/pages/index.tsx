import type { NextPage } from "next";
import Head from "next/head";
import { useAllRecepiesQuery, useDeleteRecepieMutation } from "../queries";
import { RecepiesType } from "../types";
import { Container, Title, Text, Button, Card } from "../styled-components";
import Link from "next/link";

const Home: NextPage = () => {
  const { data, error, loading } = useAllRecepiesQuery<RecepiesType>();
  const [deleteRecepie] = useDeleteRecepieMutation();
  if (error) return <h1>{error.message}</h1>;
  if (loading) return <h1>Loading...</h1>;
  const handleDelete = (id: string) => {
    deleteRecepie({
      variables: {
        id,
      },
    });
  };
  return (
    <Container>
      <Head>
        <title>Recepies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Title>Recepies</Title>
        <Link href={"/add"} passHref>
          <Button>Add</Button>
        </Link>
        {data?.recepies.map((recepie) => {
          return (
            <Card key={recepie.id}>
              <img src={recepie.image} alt="" />
              <Title>{recepie.title}</Title>
              <Text>Ingidients:</Text>
              <ul>
                {recepie.ingridients.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <Text>{recepie.description}</Text>
              <Text>Added on: {recepie.date}</Text>
              <div>
                <Button onClick={() => handleDelete(recepie.id)}>Delete</Button>
                <Link href={`/${recepie.id}`} passHref>
                  <Button>Edit</Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Home;
