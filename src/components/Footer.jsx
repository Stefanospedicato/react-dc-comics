import Icons from './Icons'

const dcComicsList = ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"];
const shopList = ['Shop DC', 'Shop DC Collectibles']
const dcList = ["Terms of Use", "Privacy policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"];
const sitesList = ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"];
const socialIconsImgs = ["./public/img/footer-facebook.png", "./public/img/footer-twitter.png", "./public/img/footer-youtube.png", "./public/img/footer-pinterest.png", "./public/img/footer-periscope.png"];
const socialIconsAlt = ["fb", "twitter", "youtube", "pinterest", "periscope"];



function Footer() {
  return (
    <footer>
      <Icons />
      <section className="footer-dc">
        <div className="container">

          <div className="dc-comics">
            <h5>DC COMICS</h5>
            <ul>
              {dcComicsList.map((item, index) => (
                <li key={`dc-${index}`} ><a className="list-item" href="">{item}</a></li>
              ))}
            </ul>
            <h5>SHOP</h5>
            <ul>
              {shopList.map((item, index) => (
                <li key={`sh-${index}`}><a className="list-item" href="">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="dc">
            <h5>DC</h5>
            <ul>
              {dcList.map((item, index) => (
                <li key={`dcL-${index}`}><a className="list-item" href="">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="sites">
            <h5>SITES</h5>
            <ul>
              {sitesList.map((item, index) => (
                <li key={`sites-${index}`}><a className="list-item" href="">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="big-logo">
            <figure>
              <img src="./public/img/dc-logo-bg.png" alt="big-logo" />
            </figure>
          </div>

        </div>
      </section>

      <section className="footer-sign">
        <div className="container d-flex justify-content-between">
          <button>SIGN UP-NOW!</button>
          <div className="d-flex">
            <h5>FOLLOW US</h5>
            {socialIconsImgs.map((item, index) => (
              <img key={`soc-img-${index}`} src={item} alt={socialIconsAlt[index]} />
            ))}
          </div>
        </div>
      </section>

    </footer>
  )
}

export default Footer