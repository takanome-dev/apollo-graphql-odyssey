import { ApolloIcon } from "./icons";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center text-pink-500 mt-5 h-[150px] bg-white border-t border-t-pink-400">
      2021 ©{" "}
      <div className="ml-1">
        <ApolloIcon width="100px" height="40px" />
      </div>
    </footer>
  );
};

export default Footer;
