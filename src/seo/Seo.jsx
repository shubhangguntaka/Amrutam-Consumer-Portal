import { Helmet } from "react-helmet-async";

function Seo({ title, description }) {
  const fullTitle = title
    ? `${title} | Amrutam Consumer Portal`
    : "Amrutam Consumer Portal";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Helmet>
  );
}

export default Seo;
