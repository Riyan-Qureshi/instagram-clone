export type MockUser = {
  id: string;
  name: string;
  username: string;
  passwordHash: string;
};

const mockUsers: MockUser[] = [
  {
    id: "1",
    name: "Riyan Qureshi",
    username: "riyanqureshi",
    passwordHash: "$2b$10$bdwWMxuxAKaWgNQ1pAJRZO894cFU2f1DGcNR4v9eBM3U2cQchWWei",
  },
];

export async function getUserByUsername(username: string) {
  return mockUsers.find((user) => user.username === username);
}
