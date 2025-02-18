import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SANITY_PROJECT_ID } from "@env";

const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const build = imageUrlBuilder(client);

export const urlFor = (source) => build.image(source);

export default client;
