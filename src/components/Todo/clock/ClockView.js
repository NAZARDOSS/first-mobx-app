import { observer } from 'mobx-react';
import ClockStore from './ClockViewStore';
import { autorun } from 'mobx';

const ClockStoreView = new ClockStore();


const ClockView = observer(() => {
  
  const handleTimeChange = (event) => {
    ClockStoreView.timePoint = event.target.value;
  };

  
  const updateTime = () => {
    ClockStoreView.setTime();
    setTimeout(updateTime, 1000);
  };
  
  
  autorun(() => {
    updateTime();
  });

  return (
    <div>
        <label>Time:</label>
        <select id="timeSelect" onChange={handleTimeChange}>
          <option value="Berlin">Berlin</option>
          <option value="Kyiv">Kyiv</option>
          <option value="Erevan">Erevan</option>
          <option value="London">London</option>
        </select>
        <h3>{ClockStoreView.displayTime}</h3>
    </div>
   
  );
});

export default ClockView;
