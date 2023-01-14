import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Making the recruitment process seamless and efficient for both candidates and Employers.
          </p>
          <p>© KeftyHR All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5"><a href="https://www.linkedin.com/company/keftyhr/about/" target="_blank">Linkedln</a></p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"></p>
          <p>(514)-963-3312</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;