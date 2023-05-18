import { makeObservable, observable, action, when } from 'mobx';

class ClockStore {
  timePoint = 'Berlin';
 
  time = '';
  displayTime = '';
  currentTime = '';

  constructor() {
    makeObservable(this, {
      currentTime: observable,
      time: observable,
      displayTime: observable,
      setTime: action,
      setDisplayTime: action,
    });
  }

  
  

  
  setDisplayTime(time) {
    this.displayTime = time;
  }

  setTime() {
    const date = new Date();    
    const time = [date.getHours(), date.getMinutes(), date.getSeconds()]; 
    this.time = time;

    when(
      () => this.timePoint === "Berlin",
      () => {
        const berlinTime = date.toLocaleString("en-US", { timeZone: "Europe/Berlin", hour12: false, day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: "numeric", second: 'numeric' });
        // console.log(`${hours}:${minutes}:${seconds}`);
        this.setDisplayTime(berlinTime);
      }
    );

    when(
      () => this.timePoint === "Kyiv",
      () => {
        const KyivTime = date.toLocaleString("en-US", { timeZone: "Europe/Kiev", hour12: false, day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: "numeric", second: 'numeric'  });
        // console.log(`${hours}:${minutes}:${seconds}`);
        this.setDisplayTime(KyivTime);
      }
    );

    when(
      () => this.timePoint === "Erevan",
      () => {
        const yerevanTime = date.toLocaleString("en-US", { timeZone: "Asia/Yerevan", hour12: false, day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: "numeric", second: 'numeric' });
        // console.log(`${hours}:${minutes}:${seconds}`);
        this.setDisplayTime(yerevanTime);
      }
    );
    
    when(
      () => this.timePoint === "London",
      () => {
        const londonTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/London', hour12: false, day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: "numeric", second: 'numeric'  });
        // console.log(`${hours}:${minutes}:${seconds}`);
        this.setDisplayTime(londonTime);
      }
    );
    
  }
}
export default ClockStore