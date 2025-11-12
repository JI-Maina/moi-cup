import { Fixture } from "@/types/moi-cup";
import { FixturesWrapper } from "./all-fixtures";

const getFixtures = async (): Promise<Fixture[]> => {
  const res = await fetch(
    "https://apis.tisini.co.ke/apiagent5.php?leaguefixture=213",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 1 },
    }
  );

  return await res.json();
};

const FixturesPage = async () => {
  const data = await getFixtures();

  return <FixturesWrapper data={data as Fixture[]} />;
};

export default FixturesPage;
