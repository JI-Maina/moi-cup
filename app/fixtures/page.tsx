import { FixturesWrapper } from "./all-fixtures";

const getFixtures = async () => {
  const res = await fetch(
    "https://apis.tisini.co.ke/apiagent5.php?leaguefixture=108",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await res.json();
};

const FixturesPage = async () => {
  const data = await getFixtures();

  console.log(data);

  return <FixturesWrapper />;
};

export default FixturesPage;
