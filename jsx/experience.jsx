const React = require('react')

module.exports = class Experience extends React.Component{
  handleClick(e){
    $('#techSec').hide()
    $('#eduSec').hide()
    $('#expSec').hide()
    $('#proSec').hide()
    $('#leadSec').hide()
    $('#' + e.target.id + 'Sec').show()
  }
  render(){
    return(
      <div id="bgExp">
        <div className="bgExpNav jumbotron bg-white">
          <ul id="expNav">
            <li className="expNavItem">
              <button className="expNavLink" id="tech"
                onClick={this.handleClick.bind(this)}>Technologies</button>
            </li>
            <li className="expNavItem">
              <button className="expNavLink" id="edu"
                onClick={this.handleClick.bind(this)}>Education</button>
            </li>
            <li className="expNavItem">
              <button className="expNavLink" id="exp"
                onClick={this.handleClick.bind(this)}>Experience</button>
            </li>
            <li className="expNavItem">
              <button className="expNavLink" id="pro"
                onClick={this.handleClick.bind(this)}>Projects</button>
            </li>
            <li className="expNavItem">
              <button className="expNavLink" id="lead"
                onClick={this.handleClick.bind(this)}>Leadership</button>
            </li>
          </ul>
        </div>

        <div className="container" id="ExpSec">
          <div id="techSec" className="jumbotron">
            <div className="row">
              <h3 className="display-5 col-sm-12 col-md-5 blue text-center mb-5">Technologies</h3>
              <div className="col-sm-12 col-md-4">
                <h5>Front-End</h5>
                <ul>
                  <li>JavaScript (ES6 - ES8/ECMAScript2017)</li>
                  <ul>
                    <li>React</li>
                    <ul>
                      <li>JSX Extension</li>
                      <li>Jest TDD/BDD</li>
                      <li>React Router (SPAs)</li>
                    </ul>
                    <li>jQuery</li>
                    <li>Bootstrap 4</li>
                  </ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <ul>
                    <li>SCSS/SASS</li>
                  </ul>
                </ul>

                <h5>Data Analysis</h5>
                <ul>
                  <li>Python</li>
                  <li>RStudio</li>
                  <li>Tableau</li>
                  <li>Google Analytics</li>
                </ul>
              </div>

              <div className="col-sm-12 col-md-3">
                <h5>Back-End</h5>
                <ul>
                  <li>Java</li>
                  <li>AJAX/JSON</li>
                  <li>MySQL</li>
                </ul>
                <h5>Other Tools</h5>
                <ul>
                  <li>Babel</li>
                  <li>Webpack</li>
                  <li>Node (NPM)</li>
                  <li>GIT Version Control</li>
                  <li>WordPress CMS</li>
                  <li>SugarCRM</li>
                  <li>Agile/Lean/Scrum</li>
                  <li>Design Sprints</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="eduSec" className="jumbotron">
            <div className="row">
              <h3 className="display-5 col-sm-12 col-md-5 orange text-center mb-5">Education</h3>
              <div className="col-sm-12 col-md-7">
                <h5>Long Island University, Brooklyn | 9/14 - 12/17</h5>
                <ul>
                  <li>Bachelor of Science in Computer Science with Honors</li>
                  <li>Minor in Business Administration</li>
                  <li>Cumulative GPA of 3.7 in a 4.0 scale</li>
                  <li>Member of the Alpha Chi Honor Society (Top 10% of Class)</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="expSec" className="jumbotron">
            <div className="row">
              <h3 className="display-5 col-sm-12 col-md-5 red text-center mb-5" >Experience</h3>
              <div className="col-sm-12 col-md-7">
                <h5>Web Development Intern | StoryCorps | 6/16 - 12/16</h5>
                <ul>
                  <li>Redesigned and launched a Webby Award Honored website</li>
                  <li>Built and launched a social media component</li>
                  <li>Created bug reports for the Webby Award nominated, TED
                    Prize winning StoryCorps mobile application</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="proSec" className="jumbotron">
            <div className="row">
              <h3 className="display-5 col-sm-12 col-md-5 blue text-center mb-5">Projects</h3>
              <div className="col-sm-12 col-md-7">
                <h5>Founder & President | Binder | 2/17 - 12/17</h5>
                <ul>
                  <li>Designed a Java-based minimal viable product (MVP)
                    to cut the cost of college text books by up to 36%</li>
                  <li>Placed 3rd at the New York State Regional
                    Business Plan Competition (2017)</li>
                </ul>
                <h5>Co-Founder | WiMove | 1/16 - 8/16</h5>
                <ul>
                  <li>Prototyped a wireless mesh network that aimed to
                    eliminate mobile data fees</li>
                  <li>Placed 1st in the Brooklyn 'BE.INnovative'
                    Hackathon (2016)</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="leadSec" className="jumbotron">
            <div className="row">
              <h3 className="display-5 col-sm-12 col-md-5 orange text-center mb-5">Leadership</h3>
              <div className="col-sm-12 col-md-7">
                <h5>President | LIU Computer Science Club | 9/16 - 5/17</h5>
                <ul>
                  <li>Placed 1st at the LIU Showcase (2017) for most
                    creative student organization</li>
                  <li>Managed a budget of $3500 for workshops and
                    student projects</li>
                </ul>
                <h5>Senator | LIU Student Government Association |
                  1/17 - 12/17</h5>
                <ul>
                  <li>Raised over $40,000 for the American Cancer Society</li>
                  <li>Debated on various issues including budgets
                    and administrative actions</li>
                </ul>
                <h5>Captain | LIU Data Science Team | 1/16 - 5/17</h5>
                <ul>
                  <li>Represented Long Island University twice at the yearly
                    Manhatten College Business Analytics Competition</li>
                  <li>Analized millions of lines of real-world data and created
                    business solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
