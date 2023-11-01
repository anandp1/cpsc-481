import HeadComponent from "./head-component";
import MainBody from "./main-body";

const Layout = ({ children, isLanding, isCheckout }) => {
  return (
    <>
      <HeadComponent />
      <div className="w-full">
        <MainBody
          isLanding={isLanding}
          isCheckout={isCheckout}
        >
          {children}
        </MainBody>
      </div>
    </>
  );
};

export default Layout;
