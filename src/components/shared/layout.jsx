import HeadComponent from "./head-component";
import MainBody from "./main-body";

const Layout = ({ children, isLanding }) => {
  return (
    <>
      <HeadComponent />
      <div className="w-full">
        <MainBody isLanding={isLanding}>{children}</MainBody>
      </div>
    </>
  );
};

export default Layout;
