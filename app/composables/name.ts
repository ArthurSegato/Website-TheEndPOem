export const useName = () => {
    return useState<string>("name", () => "");
  };