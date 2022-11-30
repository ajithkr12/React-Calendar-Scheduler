import React from 'react';
import {Row, Col} from 'antd';
import TimeSlot from './TimeSlot';
import {row, timeCol, timeString} from '../styles';
import moment from 'moment';

function TimeSlotGroup (props) {


  const formattedTime = moment(parseFloat(props.time).toFixed(2), "hhmm").format('LT');
  // console.log('form TimeSlotGroup',formattedTime)
  return (
    <Row type="flex" key={props.time} style={row}>
      <Col style={timeCol} span={3}>
        <span style={timeString}>
          {formattedTime}
        </span>
      </Col>
      {props.weekDays.map (day => (
        <TimeSlot
          key={day.dateStamp}
          dateStamp={day.dateStamp}
          time={props.time}
          openAddEventModal={props.openAddEventModal}
        />
      ))}
      {props.children}
    </Row>
  );
}

export default TimeSlotGroup;


// const times = [1.00,1.30,2,2.30,3,3.30,4,4.30,5,5.30,6,6.30,7,7.30,8,8.30,9,9.30,10,10.30,11,11.30,12,12.30,13,13.30,14,14.30,15,15.30,16,16.30,17,17.30,18,18.30,19,19.30,20,20.30,21,21.30,22,22.30,23,23.30];
