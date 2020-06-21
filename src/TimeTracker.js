import React from "react";

class TimeTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prev) => ({ ...prev, seconds: prev.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <span>Seconds spent on site: {this.state.seconds}</span>;
  }
}

export default TimeTracker;
