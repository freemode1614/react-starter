export enum PetStatus {
  available = "available",
  pending = "pending",
  sold = "sold",
}
export enum OrderStatus {
  approved = "approved",
  delivered = "delivered",
  placed = "placed",
}
export type ApiResponse = {
  code: number;
  type: string;
  message: string;
};
export type Category = {
  id: number;
  name: string;
};
export type Pet = {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: PetStatus;
};
export type Tag = {
  id: number;
  name: string;
};
export type Order = {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  status: OrderStatus;
  complete: boolean;
};
export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
};
/** uploads an image
 * @param petId - ID of pet to update
 * @param req.additionalMetadata
 * @param req.file
 */
export async function petPetIdUploadImageUsingPost(
  {
    petId,
  }: {
    petId: number;
  },
  req: {
    additionalMetadata?: string;
    file?: Blob;
  },
) {
  return fetch(`https://petstore.swagger.io/v2/pet/${petId}/uploadImage`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then(async (response) => (await response.json()) as ApiResponse);
}
/** Update an existing pet
 */
export async function petUsingPut(req: Pet) {
  return fetch(`https://petstore.swagger.io/v2/pet`, {
    method: "PUT",
    body: JSON.stringify(req),
  }).then(async (response) => await response.json());
}
/** Add a new pet to the store
 */
export async function petUsingPost(req: Pet) {
  return fetch(`https://petstore.swagger.io/v2/pet`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then(async (response) => await response.json());
}
/** Multiple status values can be provided with comma separated strings. Finds Pets by status
 * @param status - Status values that need to be considered for filter
 */
export async function petFindByStatusUsingGet({
  status,
}: {
  status: ("available" | "pending" | "sold")[];
}) {
  return fetch(
    `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`,
    {
      method: "GET",
    },
  ).then(async (response) => (await response.json()) as Pet[]);
}
/** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.. Finds Pets by tags
 * @deprecated
 * @param tags - Tags to filter by
 */
export async function petFindByTagsUsingGet({ tags }: { tags: string[] }) {
  return fetch(`https://petstore.swagger.io/v2/pet/findByTags?tags=${tags}`, {
    method: "GET",
  }).then(async (response) => (await response.json()) as Pet[]);
}
/** Returns a single pet. Find pet by ID
 * @param petId - ID of pet to return
 */
export async function petPetIdUsingGet({ petId }: { petId: number }) {
  return fetch(`https://petstore.swagger.io/v2/pet/${petId}`, {
    method: "GET",
  }).then(async (response) => (await response.json()) as Pet);
}
/** Updates a pet in the store with form data
 * @param petId - ID of pet that needs to be updated
 * @param req.name
 * @param req.status
 */
export async function petPetIdUsingPost(
  {
    petId,
  }: {
    petId: number;
  },
  req: {
    name?: string;
    status?: string;
  },
) {
  return fetch(`https://petstore.swagger.io/v2/pet/${petId}`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then(async (response) => await response.json());
}
/** Deletes a pet
 * @param api_key
 * @param petId - Pet id to delete
 */
export async function petPetIdUsingDelete({
  api_key,
  petId,
}: {
  api_key?: string;
  petId: number;
}) {
  return fetch(`https://petstore.swagger.io/v2/pet/${petId}`, {
    method: "DELETE",
    headers: { api_key: encodeURIComponent(String(api_key)) },
  }).then(async (response) => await response.json());
}
/** Returns a map of status codes to quantities. Returns pet inventories by status
 */
export async function storeInventoryUsingGet() {
  return fetch(`https://petstore.swagger.io/v2/store/inventory`, {
    method: "GET",
  }).then(
    async (response) => (await response.json()) as Record<string, unknown>,
  );
}
/** Place an order for a pet
 */
export async function storeOrderUsingPost(req: Order) {
  return fetch(`https://petstore.swagger.io/v2/store/order`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then(async (response) => (await response.json()) as Order);
}
/** For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions. Find purchase order by ID
 * @param orderId - ID of pet that needs to be fetched
 */
export async function storeOrderOrderIdUsingGet({
  orderId,
}: {
  orderId: number;
}) {
  return fetch(`https://petstore.swagger.io/v2/store/order/${orderId}`, {
    method: "GET",
  }).then(async (response) => (await response.json()) as Order);
}
/** For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors. Delete purchase order by ID
 * @param orderId - ID of the order that needs to be deleted
 */
export async function storeOrderOrderIdUsingDelete({
  orderId,
}: {
  orderId: number;
}) {
  return fetch(`https://petstore.swagger.io/v2/store/order/${orderId}`, {
    method: "DELETE",
  }).then(async (response) => await response.json());
}
/** Creates list of users with given input array
 */
export async function userCreateWithListUsingPost(req: unknown) {
  return fetch(`https://petstore.swagger.io/v2/user/createWithList`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then(async (response) => await response.json());
}
/** Get user by user name
 * @param username - The name that needs to be fetched. Use user1 for testing.
 */
export async function userUsernameUsingGet({ username }: { username: string }) {
  return fetch(`https://petstore.swagger.io/v2/user/${username}`, {
    method: "GET",
  }).then(async (response) => (await response.json()) as User);
}
/** This can only be done by the logged in user.. Updated user
 * @param username - name that need to be updated
 */
export async function userUsernameUsingPut(
  {
    username,
  }: {
    username: string;
  },
  req: User,
) {
  return fetch(`https://petstore.swagger.io/v2/user/${username}`, {
    method: "PUT",
    body: JSON.stringify(req),
  }).then(async (response) => await response.json());
}
/** This can only be done by the logged in user.. Delete user
 * @param username - The name that needs to be deleted
 */
export async function userUsernameUsingDelete({
  username,
}: {
  username: string;
}) {
  return fetch(`https://petstore.swagger.io/v2/user/${username}`, {
    method: "DELETE",
  }).then(async (response) => await response.json());
}
/** Logs user into the system
 * @param username - The user name for login
 * @param password - The password for login in clear text
 */
export async function userLoginUsingGet({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return fetch(
    `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`,
    {
      method: "GET",
    },
  ).then(async (response) => (await response.json()) as string);
}
/** Logs out current logged in user session
 */
export async function userLogoutUsingGet() {
  return fetch(`https://petstore.swagger.io/v2/user/logout`, {
    method: "GET",
  }).then(async (response) => await response.json());
}
/** Creates list of users with given input array
 */
export async function userCreateWithArrayUsingPost(req: unknown) {
  return fetch(`https://petstore.swagger.io/v2/user/createWithArray`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then(async (response) => await response.json());
}
/** This can only be done by the logged in user.. Create user
 */
export async function userUsingPost(req: User) {
  return fetch(`https://petstore.swagger.io/v2/user`, {
    method: "POST",
    body: JSON.stringify(req),
  }).then(async (response) => await response.json());
}
