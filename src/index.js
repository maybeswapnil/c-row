import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const con = 5279;
class HelloChemo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInput : "",
      display: false,
      email: ""
    };

    this.print = this.print.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.mainPage = this.mainPage.bind(this);
    this.getEmail= this.getEmail.bind(this);
    this.flip = this.flip.bind(this);
  }

handleChange(event) {
  this.setState ({
      userInput: event.target.value
  });
}

flip() {
    this.setState ({
        display: true
    });
}

mainPage(){
  if(this.state.userInput==con) {
    this.setState ({
        display: !(this.state.display)
    });
  } else {
    console.log(this.state.userInput + " is wrong code")
    this.setState ({
      userInput: ""
  });
  }
}

print() {
    console.log(this.state.userInput)
}

getEmail(event) {
    this.setState ({
        email: event.target.value
    });
}

render() {
    if(this.state.display) {
        return(<App />);
    } else{
      return(          
        <body>
    
        <title>c-row</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
 
        <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossOrigin="anonymous"></script>

        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

        <link href="styles.css" rel="stylesheet" />
   
    <body id="page-top">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Welcome</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    try using desktop mode!
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li classNameName="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">C-ROW</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">Welcome to our lives</h2>
                    <a className="btn btn-primary js-scroll-trigger" href="#divein">Dive in</a>
                </div>
            </div>
        </header>
        <section className="about-section text-center" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="text-white mb-4">Find our projects here</h2>
                        <p className="text-white-50">
                            Pojects from <a href="https://github.com/chemotharepy" target="_blank" rel="noreferrer">chemosenpai </a>
                            and <a href="https://codepen.io/why_though" target="_blank" rel="noreferrer">whythough</a>
                        </p>
                    </div>
                </div>
                <img className="img-fluid" src="https://source.unsplash.com/collection/2512863/1650x566" alt="asfas"/>
            </div>
        </section>
        <section className="projects-section bg-light" id="projects">
            <div className="container">
                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="assets/img/pexels-swapnil-sharma-5540306.jpg" alt="" /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>We recommend you to get a good internet speed to play our games</h4>
                            <p className="text-black-50 mb-0">Please! <a href="https://fast.com/" target="_blank" rel="noreferrer">Click here</a> to test your internet</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6"><img className="img-fluid" src="assets/img/demo-image-01.jpg" alt="" /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">smol game</h4>
                                    <p className="mb-0 text-white-50"><a href="https://codepen.io/swapnil-sharma/pen/XWdwPLX" rel="noreferrer">currently working on it</a></p>
                                    <hr className="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6"><img className="img-fluid" src="assets/img/demo-image-02.jpg" alt="" /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Find our discord bot here</h4>
                                    <p className="mb-0 text-white-50" id="divein"><a href="https://discord.com/api/oauth2/authorize?client_id=792374349554384906&permissions=2081418481&scope=bot" target="_blank" rel="noreferrer">Open</a></p>
                                    <hr className="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="signup-section" id="signup">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5" id="divein" >New Release</h2>
                        <form className="form-inline d-flex">
                            <button className="btn btn-primary mx-auto" type="button"  onClick={this.flip}>Go In</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="contact-section bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Address</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50"><a href="https://discord.gg/VrENcxEW" target="_blank" rel="noreferrer">find us on discord server for now</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50"><a href="#!">swapnil.sharma1998@outlook.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4" />
                                <div className="small text-black-50">+91 7694-930899</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="#!"><i className="fab fa-instagram"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-reddit"></i></a>
                    <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </section>
        
        <footer className="footer bg-black small text-center text-white-50"><div className="container">copyright © chemo and whythough</div></footer>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

        <script src="scripts.js"></script>
    </body>
    </body>
        
      );
    }
}

}
ReactDOM.render(<HelloChemo />, document.getElementById('root'));

reportWebVitals();