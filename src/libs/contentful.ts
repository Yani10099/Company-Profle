import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async () => {
    try {
      const response = await client.getEntries({
        content_type: "teams",
      });
      const teams = response.items.map((team: any) => {
        return {
          images: team.fields.images,
          nama: team.fields.nama,
          description: team.fields.description,
        };
      });
      return teams;
    } catch (error) {
      console.log(error);
    }
  };