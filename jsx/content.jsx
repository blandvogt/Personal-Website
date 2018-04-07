const React = require('react')
const {Link} = require('react-router')

class Content extends React.Component{
  render(){
    return(
      <div>
        <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link className="navbar-brand" to="/"><img id="logo" src="images/logo.png"/></Link>
          <button className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about" activeClassName="active">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/experience" activeClassName="active">Experience</Link>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
Content.contextTypes = {
  router: React.PropTypes.object.isRequired
}

module.exports = Content
