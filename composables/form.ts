export const useForm = (name: string) => {
  $fetch("/api/poem", {
    method: "POST",
    body: { name },
  });
};
