import React from "react";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
      Made with 🍑 by
      <a 
        href="https://github.com/Yaralisa"
        className="mx-2"
      > 
        <img
          className="logo github-logo"
          src="https://avatars.githubusercontent.com/u/170345539?v=4"
          alt="Yaralisa's GitHub"
        />
        Yaralisa
      </a>{" "}
      on
      <a href="https://www.4geeksacademy.com" className="mx-2">
        {" "}
        4GeeksAcademy
        <img
          className="logo geeks-logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NzJUc0PYtkgp7lfNKizmgQHaHB%26pid%3DApi&f=1&ipt=271cb3eb7e5f15522c250313a63e781bdb17fd428148a3cfa3fc136c7c118f42&ipo=images"
          alt="4Geeks Academy logo"
        />
      </a>
    </p>
    <style jsx>{`
      .footer {
        background-color: #f8f9fa;
        padding: 1rem 0;
      }
      .logo {
        border: 1px solid #ffffff;
        border-radius: 50%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        vertical-align: middle;
      }
      .github-logo {
        width: 40px;
        height: 40px;
      }
      .geeks-logo {
        width: 35px;
        height: 35px;
      }
      .logo:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      a {
        color: #007bff;
        text-decoration: none;
        transition: color 0.3s ease;
      }
      a:hover {
        color: #0056b3;
      }
      .mx-2 {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    `}</style>
  </footer>
);







//    ---CSS---

//   /* footer */

//   .logo {
//     cursor: pointer;
//     transition: 0.2s;
//     transition: box-shadow 0.3s ease, transform 0.3s ease, opacity 2s ease;
//     transform: scale(1);
//     background: linear-gradient(to bottom right, 105, 165, 214, 105, 165, 214);
//   }
//   .logo:hover {
//     transform: scale(1.9) translateZ(20px);
//   }

//  /* /fin/footer  */ 