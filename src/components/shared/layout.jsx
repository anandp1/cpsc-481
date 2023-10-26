import HeadComponent from "./head-component";
import MainBody from "./main-body";

const Layout = ({ children }) => {
  return (
    <>
      <HeadComponent />
      <div className="w-full">
        <MainBody>{children}</MainBody>
      </div>
    </>
  );
};

export default Layout;
