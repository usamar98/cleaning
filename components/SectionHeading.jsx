export function SectionHeading({ title, text, align = "center", className = "" }) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <h2 className="display-heading">{title}</h2>
      {text ? <p className={`body-copy mt-5 ${isCenter ? "mx-auto" : ""} max-w-2xl`}>{text}</p> : null}
      <span className={`gold-line mt-7 ${isCenter ? "mx-auto" : ""}`} aria-hidden="true" />
    </div>
  );
}
