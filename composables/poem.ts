export const usePoem = () => {
  return useState<string>("poem", () => "");
};
