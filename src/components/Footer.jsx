import Icons from './Icons'

const dcComicsList = ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"];
const shopList = ['Shop DC', 'Shop DC Collectibles']
const dcList = ["Terms of Use", "Privacy policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"];
const sitesList = ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"];



function Footer() {
  return (
    <footer>
      <Icons />
      <section className="footer-dc">
        <div className="container">
          <div className="dc-comics">
            <h5>DC COMICS</h5>
            <ul>
              {dcComicsList.map(item => (
                <li><a className="list-item" href="">{item}</a></li>
              ))}
              {/* <li><a className="list-item" href="">Characters</a></li>
              <li><a className="list-item" href="">Comics</a></li>
              <li><a className="list-item" href="">Movies</a></li>
              <li><a className="list-item" href="">TV</a></li>
              <li><a className="list-item" href="">Games</a></li>
              <li><a className="list-item" href="">Videos</a></li>
              <li><a className="list-item" href="">News</a></li> */}
            </ul>
            <h5>SHOP</h5>
            <ul>
              {shopList.map(item => (
                <li><a className="list-item" href="">{item}</a></li>
              ))}
              {/* <li><a className="list-item" href="">Shop DC</a></li>
              <li><a className="list-item" href="">Shop DC Collectibles</a></li> */}
            </ul>
          </div>
          <div className="dc">
            <h5>DC</h5>
            <ul>
              {dcList.map(item => (
                <li><a className="list-item" href="">{item}</a></li>
              ))}
              {/* <li><a className="list-item" href="">Terms of Use</a></li>
              <li><a className="list-item" href="">Privacy policy (New)</a></li>
              <li><a className="list-item" href="">Ad Choices</a></li>
              <li><a className="list-item" href="">Advertising</a></li>
              <li><a className="list-item" href="">Jobs</a></li>
              <li><a className="list-item" href="">Subscriptions</a></li>
              <li><a className="list-item" href="">Talent Workshops</a></li>
              <li><a className="list-item" href="">CPSC Certificates</a></li>
              <li><a className="list-item" href="">Ratings</a></li>
              <li><a className="list-item" href="">Shop Help</a></li>
              <li><a className="list-item" href="">Contact Us</a></li> */}
            </ul>
          </div>
          <div className="sites">
            <h5>SITES</h5>
            <ul>
              {sitesList.map(item => (
                <li><a className="list-item" href="">{item}</a></li>
              ))}
              {/* <li><a className="list-item" href="">DC</a></li>
              <li><a className="list-item" href="">MAD Magazine</a></li>
              <li><a className="list-item" href="">DC Kids</a></li>
              <li><a className="list-item" href="">DC Universe</a></li>
              <li><a className="list-item" href="">DC Power Visa</a></li> */}
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
            <img src="./public/img/footer-facebook.png" alt="fb" />
            <img src="./public/img/footer-twitter.png" alt="twitter" />
            <img src="./public/img/footer-youtube.png" alt="youtube" />
            <img src="./public/img/footer-pinterest.png" alt="pinterest" />
            <img src="./public/img/footer-periscope.png" alt="periscope" />
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer