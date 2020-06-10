import React from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

const styles = {
  Button: {
    background: "brown",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    display: "center",
  },
  main: {
    backgroundImage: "url('./images/startbrewing.jpg')",
    backgroundSize: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "1000px",
  },
};

// class UserPage extends Component {
  
//   render(){
//     return (
//       <div>
//         {/* <h1 id="welcome">Welcome, {props.user.username}!</h1>
//         <p>Your ID is: {props.user.id}</p>
//         <div></div>
//         <LogOutButton className="log-in" /> */}
//         <main className={this.props.classes.main}>
//           {/* <button>GO</button> */}
//           <h1 id="welcome">Welcome, {props.user.username}!</h1>
//           <header>Profile Photo</header>
//           <href></href>
//           {/* <p>Your ID is: {props.user.id}</p> */}
//           <LogOutButton className="log-in" />
//           <Button
//             className={this.props.classes.Button}
//             onClick={this.toLogBook}
//           >
//             GO TO LOG BOOK
//           </Button>
//         </main>
//       </div>
//     );
//   }
// }

const UserPage = (props) => (
  <div>
    <main>
      {/* <button>GO</button> */}
      <h1 id="welcome">Welcome, {props.user.username}!</h1>
      <header>Profile Photo</header>
      
      {/* <p>Your ID is: {props.user.id}</p> */}
      {/* <LogOutButton className="log-in" /> */} 
    </main>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(UserPage));
