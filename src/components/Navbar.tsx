import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {

  const links = [
    { 
      text: 'Home', 
      href: '/' 
    },
    { 
      text: 'About', 
      href: '/about' 
    },
    { 
      text: 'Contact', 
      href: '/contact' 
    },
    { 
      text: 'Pricing', 
      href: '/pricing' 
    }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">NextJS Course</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {
              links.map(({ href, text }, index) => (
                <ActiveLink
                  key={index}
                  href={href}
                  text={text}
                />
              ))
            }
          </div>
        </div>
      </div>
    </nav>
  )
};
