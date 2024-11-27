import { Client } from "@notionhq/client";
import {
  type QueryDatabaseResponse,
  type PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: "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",
});

interface PageProperties {
  Title: { rich_text: { text: { content: string } }[] };
  Slug: { title: { text: { content: string } }[] };
  Date: { date: { start: string } };
  Content: { rich_text: { text: { content: string } }[] };
  Published: { checkbox: boolean };
}

type TypedPage = Omit<PageObjectResponse, "properties"> & {
  properties: PageProperties;
};

export async function fetchDatabase() {
  const databaseId = "14a381a32003806abddcd29bd7981bac";
  const response = (await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
  })) as QueryDatabaseResponse;
  return response.results.map((page) => {
    // Use a type assertion to validate the page's properties
    const typedPage = page as TypedPage;

    return {
      id: typedPage.id,
      title:
        typedPage.properties.Title.rich_text[0]?.text.content || "Untitled",
      slug: typedPage.properties.Slug.title[0]?.text.content || "",
      date: typedPage.properties.Date.date.start,
      content: typedPage.properties.Content.rich_text[0]?.text.content || "",
    };
  });
}
