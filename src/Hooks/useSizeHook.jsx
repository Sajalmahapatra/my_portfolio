import { useMediaQuery } from "@mantine/hooks";

export const useSizeHook = () => {
  const breakpoints = [576, 768, 992, 1200, 1408];
  const [xs, sm, md, lg, xl] = breakpoints.map((bp) =>
    useMediaQuery(`(min-width: ${bp}px)`)
  );

  return { xs, sm, md, lg, xl };
};
