// import React, { useState, useContext } from "react";
// import { Display } from "./components/Display";
// import { Score } from "./components/Score";
// import { Timer } from "./components/Timer";
// import { Switch } from "./components/Switch";
// import Text from "./config/Text";

// function DisplayContent({ displayContent,  })

// const App = () => {
//   const [app, setApp] = useState({
//     text: Text(),
//     userType: "",
//     timer: 0,
//     started: false,
//     finished: false
//   });

//   function handleText(e) {
//     e.preventDefault();
//     getTimer();
//     getFinished(e.target.value);

//     setApp({
//       ...app,
//       userType: e.target.value
//     });
//   }

//   const getTimer = () => {
//     if (!app.started) {
//       setApp({
//         ...app,
//         started: true
//       });
//       setInterval(() => {
//         setApp(paramsTimer => {
//           return {
//             ...app,
//             timer: paramsTimer.timer + 1
//           };
//         });
//       }, 1000);
//     }
//   };

//   const getFinished = userType => {
//     if (userType === app.text) {
//       clearInterval();
//       setApp({
//         ...app,
//         finished: true
//       });
//     }
//   };

//   const restartType = () => {
//     setApp({
//       ...app,
//       setUserType: "",
//       started: false,
//       timer: 0
//     });
//   };

//   const refreshText = () => {
//     window.location.reload();
//   };

//   return (
//     <div>
//       <div className="container mb-5 mb-5">
//         <div className="col-md-6 offset-md-3 mt-5">
//           <h1 className="text-center">Learn State</h1>
//           <Timer timer={app.timer} />
//           <Switch
//             click={toggleTheme}
//             value={isLightTheme}
//             checked={!isLightTheme}
//           />
//           <Display text={app.text} userType={app.userType} />
//           <textarea
//             value={app.userType}
//             className="form-control mb-2"
//             onChange={handleText}
//           ></textarea>

//           <div className="text-right mt-3">
//             <button className="btn btn-secondary mr-3" onClick={restartType}>
//               Ulangi
//             </button>

//             <button className="btn btn-secondary" onClick={refreshText}>
//               Ganti Text
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { Component } from "react";

import { Display } from "./components/Display";
import { Finished } from "./components/Finished";
import { Timer } from "./components/Timer";

import Text from "./config/Text";
import Score from "./components/Score";
import Switch from "./components/Switch";

import "./index.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: Text(),
      userType: "",
      timer: 0,
      started: false,
      finished: false
    };
  }

  componentDidMount() {
    let toggle = document.getElementById("switch");

    toggle.addEventListener("change", function() {
      document.body.classList.toggle("dark-mode");
    });
  }

  handleText = e => {
    e.preventDefault();

    this.setTimer();
    this.getFinished(e.target.value);
    this.setState(
      {
        userType: e.target.value
      },
      () => console.log(this.state.text)
    );
  };

  setTimer = () => {
    if (!this.state.started) {
      this.setState({
        started: true
      });
      this.interval = setInterval(() => {
        this.setState(paramsTimer => {
          return {
            timer: paramsTimer.timer + 1
          };
        });
      }, 1000);
    }
  };

  getFinished = userType => {
    if (userType === this.state.text) {
      clearInterval(this.interval);
      this.setState({
        finished: true
      });

      let finish = document.getElementById("finish");

      finish.style.display = "block";
    }
  };

  restartText = () => {
    clearInterval(this.interval);
    this.setState({
      userType: "",
      started: false,
      timer: 0
    });
  };

  refreshText = () => {
    window.location.reload();
  };
  render() {
    return (
      <div>
        <div className="container mb-5 mb-5">
          <div className="col-md-6 offset-md-3 mt-5">
            <h1 className="text-center">RAKSYE WRITER</h1>
            <Score score={this.state.timer} />
            <Timer timer={this.state.timer} />
            <Switch
              click={this.clickSwitch}
              id="switch"
              for="switch"
              name="label"
            />

            <Display text={this.state.text} userType={this.state.userType} />
            <Finished finish="finish" />

            <br />
            <textarea
              className="form-control mb-2"
              value={this.state.userType}
              onChange={this.handleText}
              placeholder="Start typing ..."
            ></textarea>

            <div className="text-right mt-3">
              <button
                className="btn btn-secondary mr-3"
                onClick={this.restartText}
              >
                Ulangi
              </button>

              <button className="btn btn-secondary" onClick={this.refreshText}>
                Ganti Text
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
