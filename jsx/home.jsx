const React = require('react')

module.exports = function Home(){
  return(
    <div id="bgHome">
      <div className="jumbotron bg-transparent row text-right" id="homeJumbotron">
        <div className="col-sm-12 col-md-7">
          <div className="homeDisplay">
            <h1 className="homeName">Brian</h1>
            <h1 className="homeName">Landvogt</h1>
          </div>
          <p className="lead" id="homeLead">
            Web Engineer | Entrepreneur | Leader
          </p>
        </div>
        <div className="col-sm-12 col-md-5 text-left">
          <img className="pic_me" id="pic_me" src="./images/pic_me.jpg"/>
        </div>
      </div>

      <div className="container">
        <div className="row" id="homeCards">
          <div className="col-md-12 col-lg-4">
            <div className="card mb-4 homeCard">
              <div className="card-body text-center">
                <h3 className="card-title ">GitHub</h3>
                <div className="card-text">
                  Check out my code...
                </div>
                <a href="https://github.com/blandvogt" className="card-link">More</a>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="card mb-4 homeCard">
              <div className="card-body text-center">
                <h3 className="card-title">Facebook</h3>
                <div className="card-text">
                  What I'm up to...
                </div>
                <a href="https://www.facebook.com/brian.landvogt" className="card-link">More</a>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="card mb-4 homeCard">
              <div className="card-body text-center">
                <h3 className="card-title">LinkedIn</h3>
                <div className="card-text">
                  My professional portfolio...
                </div>
                <a href="https://www.linkedin.com/in/brian-landvogt-9bb7a2120" className="card-link">More</a>
              </div>
            </div>
          </div>
        </div>
        {/* End of Row */}
      </div>
      {/* End of Container*/}
    </div>
  )
}
