export const generateUniqueId = (length = 8) => {
  let id = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return id;
};
