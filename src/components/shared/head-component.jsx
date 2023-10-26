import Head from "next/head";

const HeadComponent = ({ children }) => {
  return (
    <Head>
      {children}
      <title>Ticketing System</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default HeadComponent;
