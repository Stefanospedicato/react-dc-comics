const pArray = ["DIGITAL COMICS", "DC MERCHANDISE", "SUBSCRIPTION", "COMIC SHOP LOCATOR", "DC POWER VISA"];
const imgSrcArray = ["./public/img/buy-comics-digital-comics.png", "./public/img/buy-comics-merchandise.png", "./public/img/buy-comics-subscriptions.png", "./public/img/buy-comics-shop-locator.png", "./public/img/buy-dc-power-visa.svg"];
const imgAltArray = ["DC", "MERCH", "SUB", "SHOP", "VISA"];


const Icons = () => {
  return (
    <section className=" footer-icons">
      <div className="container d-flex justify-content-between">
        {pArray.map((item, index) => (
          <div className="d-flex mx-3 align-items-center">
            <img src={imgSrcArray[index]} alt={imgAltArray[index]} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Icons