"use server";

export const getStandings = async (cat: string): Promise<any> => {
  const url = process.env.NEXT_PUBLIC_DJANGO_HOST;
  const token = process.env.NEXT_PUBLIC_TOKEN;

  const res = await fetch(
    `${url}/api/tournament-standings/${token}/?tournament_id=213&series_id=143&category=${cat}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  if (res.ok === false) {
    throw new Error("Failed to fetch standings data");
  }

  return await res.json();
};
