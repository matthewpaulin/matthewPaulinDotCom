export const defaultVariants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
export const navIconVariants = {
  opened: {
    rotate: 135,
    scale: 1.4,
  },
  closed: {
    rotate: 0,
    scale: 1.4,
  },
};

export const navMenuVariants = {
  opened: {
    top: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    top: "-50vh",
  },
};

export const navLinkVariants = {
  opened: {
    opacity: 1,
    y: 20,
  },
  closed: {
    opacity: 0,
    y: 0,
  },
};
