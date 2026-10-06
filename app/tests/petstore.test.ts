import { afterEach, expect, test, vi } from "vitest";

import { PetStatus, petFindByStatusUsingGet } from "../api/petstore";

const mockPets = [
  {
    id: 1,
    name: "Rex",
    photoUrls: [],
    tags: [],
    status: PetStatus.available,
    category: { id: 1, name: "Dogs" },
  },
];

afterEach(() => {
  vi.unstubAllGlobals();
});

test("petFindByStatusUsingGet calls the generated URL and types the response", async () => {
  const fetchMock = vi
    .fn()
    .mockResolvedValue({ json: async () => mockPets } as Response);
  vi.stubGlobal("fetch", fetchMock);

  const pets = await petFindByStatusUsingGet({ status: [PetStatus.available] });

  expect(fetchMock).toHaveBeenCalledWith(
    "https://petstore.swagger.io/v2/pet/findByStatus?status=available",
    { method: "GET" },
  );
  expect(pets).toEqual(mockPets);
});
