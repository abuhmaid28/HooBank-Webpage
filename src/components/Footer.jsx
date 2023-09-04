import { logo } from "../assets/Assets";
import { footerLinks } from "../constants/Data";
import AnimatedComponent from "./AnimatedComponent";
const Footer = () => (
  <AnimatedComponent type={"zoom-in"}>
    <section className="py-6">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 mb-4 col-12 text-center text-sm-start">
            <img
              src={logo}
              alt="hoobank"
              className="footer-img object-fit-contain"
            />
            <p className="mt-4 text-secondary">
              A new way to make payments easy, reliable, and secure.
            </p>
          </div>

          <div className="col-sm-9">
            <div className="row ms-sm-8 cursor-pointer">
              {footerLinks.map((footerlink) => (
                <div key={footerlink.title} className="col-4 p-4 mb-4">
                  <h4 className="footer_title text-white">
                    {footerlink.title}
                  </h4>
                  <ul className="list-unstyled mt-4 ">
                    {footerlink.links.map((link, index) => (
                      <li
                        key={link.name}
                        className={`text-normal text-secondary link-info footer_link ${
                          index !== footerlink.links.length - 1
                            ? "mb-4"
                            : "mb-0"
                        }`}
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-6 border-t" />

        <div className="row">
          <div className="col-md-12 text-center text-secondary">
            <p className="text-normal">
              Created By :{" "}
              <a
                href="https://www.linkedin.com/in/sohaila128/"
                className="text-decoration-none  text-white link-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sohaila Abo El-Wafa
              </a>{" "}
              &{" "}
              <a
                href="https://www.linkedin.com/in/abuhmaid28/"
                className="text-decoration-none text-white link-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ahmed Shaaban
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>{" "}
  </AnimatedComponent>
);

export default Footer;
