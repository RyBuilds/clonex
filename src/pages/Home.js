function Home() {
  const image =
    "https://looksrare.mo.cloudinary.net/0xF661D58cfE893993b11D53d11148c4650590C692/0x49d994105cffded75063d87c32cad3b364b1933666f71d4279afdf0fa2a846bd?resource_type=image&f=auto&c=limit&w=1600&q=auto";

  const data = {
    name: "RTFKT X NIKE DUNK GENESIS CRYPTOKICKS",
    image: image,
    ranking: 133,
    floor: 1.15,
    floorUSD: 954.06,
    weekPrice: 0.971,
    weekVolume: 153.8,
    dayFluctuation: -24.0,
    weekFluctuation: 8.61,
    day90Price: 2270,
    day90Volume: 6166.972,
    owners: 6200,
    volume: 6200,
  };

  return (
    <div className="grid">
      <div className="container">
        <div className="image-column">
          <div className="image-border">
            <img src={data.image} alt={data.name} className="image" />
          </div>
          <div className="ranking-container"></div>
          <div className="ranking-content">
            <p className="ranking-text">RANKING</p>
            <p className="ranking-rank">#{data.ranking}</p>
          </div>
        </div>
        <div className="name">{data.name}</div>
        <div className="content-container">
          <div className="floorContainer">
            <p className="subheading">FLOOR</p>
            <p className="floor-data-one">{data.floor}</p>
            <p className="floor-data-two">${data.floorUSD}</p>
          </div>
          <div className="weekContainer">
            <p className="subheading">7D AVG. PRICE</p>
            <p className="data">{data.weekPrice}</p>
            <p className="subheading">7D VOLUME</p>
            <p className="data">{data.weekVolume}%</p>
          </div>
          <div className="fluctuationContainer">
            <p className="subheading">24HR %</p>
            <p className="data">{data.dayFluctuation}%</p>
            <p className="subheading">7D %</p>
            <p className="data">{data.weekVolume}%</p>
          </div>
          <div className="day90Container">
            <p className="subheading">90D AVG. PRICE</p>
            <p className="data">{data.day90Price}</p>
            <p className="subheading">90D VOLUME</p>
            <p className="data">{data.day90Volume}</p>
          </div>
          <div className="totalContainer">
            <p className="subheading">OWNERS</p>
            <p className="data">{data.owners}</p>
            <p className="subheading">VOLUME</p>
            <p>{data.volume}</p>
          </div>
          <p className="total">TOTAL</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
