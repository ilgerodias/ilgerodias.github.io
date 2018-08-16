class FirstSection extends React.Component {
  // necessary code for typed.js to work with react (credit to mattboldt)
  componentDidMount() {
   const { strings } = this.props;
   const options = {
     strings: strings,
     typeSpeed: 30,
     backSpeed: 30
   };
   this.typed = new Typed(this.el, options);
 }
 componentWillUnmount() {
   this.typed.destroy();
 }
  render() {
    return <div><a href="#">
    <div className="container siteStart">
        <h1><span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          /></h1>
    </div>
    </a>
</div>
  }
}

class SecondSection extends React.Component {
  render() {
    return <div><a href="#">
    <div className="container secondPart">
      <h1 className="display-4">About Me</h1>
    </div>
    </a>
</div>
  }
}

class ThirdSection extends React.Component {
  render() {
    return <div><a href="#">
  <div className="container thirdPart">
    <h1 className="display-4">My Projects</h1>
  </div>
  </a>
</div>
  }
}

class MyWebsite extends React.Component {
  render() {
    return <div>
      <FirstSection
      strings={[
    	'Hi there!',
      'Welcome to my portfolio,',
      'My name is Ian Gerodias.',
      'Have a look around!']}/>
      <SecondSection/>
      <ThirdSection/>
      </div>
  }
}
ReactDOM.render(
<MyWebsite/>,
document.getElementById('root')
)
