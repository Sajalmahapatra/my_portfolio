import { useMediaQuery } from "@mantine/hooks";

export const useSizeHook = () => {
  const xs = useMediaQuery("(min-width: 576px)");
  const sm = useMediaQuery("(min-width: 768px)");
  const md = useMediaQuery("(min-width: 992px)");
  const lg = useMediaQuery("(min-width: 1200px)");
  const xl = useMediaQuery("(min-width: 1408px)");

  return { xs, sm, md, lg, xl };
};
