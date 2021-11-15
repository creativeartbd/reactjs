import React from 'react';
import Button from './Button';
// function Clock ({local}) {
//   return (
//     <h1 className="heading">
//       <span className="text">Hello { new Date().toLocaleDateString(local) }</span>
//     </h1>
//   );
// }

class Clock extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date : new Date(),
  //   }
  // }

 
  state = {
    date: new Date(),
    locale: 'en-US',
  }

  componentDidMount() {
   this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date : new Date(),
    });
  }

  changeLocal = (locale) => {
    this.setState({
      locale,
    });
  };

  render() {
    
    const { date, locale } = this.state;
    let button;

    // console.log(local);

    if( locale === 'en-US' ) {
      button = (
        <Button change={this.changeLocal} locale="bn-BD">click</Button>
      );  
    } else {
      button = (
        <Button change={this.changeLocal} locale="en-US">click</Button>
      );
    }

    return (
      <div>
        <h1 className="heading">
          <span className="text">Hello { date.toLocaleTimeString(locale) }</span>
        </h1>
        {button}
      </div>
    );
  }
}
export default Clock;