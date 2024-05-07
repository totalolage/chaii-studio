export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container">
        <p className="text-center">
          ©&nbsp;
          {new Intl.DateTimeFormat(undefined, { year: "numeric" }).format()}{" "}
          Chaii&nbsp;Studio
        </p>
      </div>
    </footer>
  );
}
