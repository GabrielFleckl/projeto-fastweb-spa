interface HeadingProps {
  children: React.ReactNode;
}

function Heading({ children }: HeadingProps) {
  return (
    <h1 className="mb-2 rounded-lg  px-10 py-1 text-center text-3xl font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
      {children}
    </h1>
  );
}

export default Heading;
