const React = require('react')

module.exports = function About(){
  return(
    <div>
      <div className="jumbotron">
        <h1 className="text-center display-4">
          My name is <span className="bold blue">Brian</span>.
        </h1>
        <h1 className="text-center display-5 mb-5" id="aboutSubtitle">
          But you already knew that.</h1>
        <div className="container mt-5">
          <div className="row">
            <div className="lead col-sm-12 col-md-6 mb-4">
              This brief section gives an outline of who I am outside of my
              professional life. The section below it goes more into my life within
              technology.
            </div>
            <div className="col-sm-12 col-md-6">
              <h4 className="bold container">I...</h4>
              <ul>
                <li>am an avid reader</li>
                <li>consider myself a foodie</li>
                <li>took guitar and drum lessons as a teenager</li>
                <li>am a passionate New York sports fan</li>
              </ul>
            </div>
          </div> {/* End of Row */}

          <div className="row figRow">
            <figure className="col-sm-12 col-md-6">
              <img className="img-fluid figure-img rounded" src="./images/books.jpg"/>
              <figcaption className="figure-caption">Some favorites,
                including "Creativity Inc" by the Founder of Pixar Animation</figcaption>
            </figure>
            <figure className="col-sm-12 col-md-6">
              <img className="img-fluid figure-img rounded" src="./images/fig.jpg"/>
              <figcaption className="figure-caption">Dinning at F.I.G.
                 by James Beard Award winning Chef Jason Stanhope</figcaption>
            </figure>
          </div>
        </div> {/* End of Container */}
      </div> {/* End of Jumbotron */}

      <div className="jumbotron bg-white">
        <h1 className="text-center display-4">I'm a <span className="bold orange">Web Engineer
        </span>.</h1>
        <h1 className="text-center display-5" id="aboutSubtitle">
          Wait, there's more.
        </h1>
        <div className="container mt-5">
          <div className="row">
            <div className="lead col-sm-12 col-md-6 mb-4">
              First and foremost, I am a web developer. However, there is alot
              more to me than that. Listed here are some of things that may not
              have been directly stated on the Experience page.
            </div>
            <div className="col-sm-12 col-md-6">
              <h4 className="bold container">I...</h4>
              <ul>
                <li>believe that data-science & machine learning will play a prominant
                  role in the future of web development</li>
                <li>enjoy the art of product managment because of its emphasis on
                  user interaction</li>
                <li>want to make an impact in the world of technology through
                  entrepreneurship</li>
              </ul>
            </div>
          </div> {/* End of Row */}

          <div className="row figRow">
            <figure className="col-sm-12 col-md-6">
              <img className="img-fluid figure-img rounded" src="./images/binderMeDawen.jpg"/>
                <figcaption className="figure-caption">My business partner Dawen
                  and I </figcaption>
            </figure>
            <figure className="col-sm-12 col-md-6">
              <img className="img-fluid figure-img rounded" src="./images/BACPic1.jpg"/>
                <figcaption className="figure-caption">My team and I at the
                Manhatten College BAC17</figcaption>
            </figure>
          </div>

          <div className="row figRow">
            <figure className="col-sm-12 col-md-6">
              <img className="img-fluid figure-img rounded " src="./images/webby1_alt.png"/>
              <figcaption className="figure-caption text-center">The Webby Awards
                Honoration certificate for the StoryCorps website</figcaption>
            </figure>
            <figure className="col-sm-12 col-md-6">
              <img className="img-fluid figure-img rounded " src="./images/webby2_alt.png"/>
              <figcaption className="figure-caption text-center">The Webby Awards
                Nomination for the StoryCorps mobile app</figcaption>
            </figure>
          </div>
        </div> {/* End of Container */}
      </div> {/* End of Jumbotron */}
    </div>
  )
}
