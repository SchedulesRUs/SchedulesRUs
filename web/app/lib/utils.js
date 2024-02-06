export const connectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await url;
  } catch (error) {
    throw new Error(error);
  }
};
