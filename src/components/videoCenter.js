import React from 'react';
import VideoPanel from './videoPanel';

//Monthly Video Thumbnails
import January from '../images/monthVideos/january.jpg';
import February from '../images/monthVideos/february.jpg';
import March from '../images/monthVideos/march.jpg';
import April from '../images/monthVideos/april.jpg';
import May from '../images/monthVideos/may.jpg';
import June from '../images/monthVideos/june.jpg';
import July from '../images/monthVideos/july.jpg';
import August from '../images/monthVideos/august.jpg';
import September from '../images/monthVideos/september.jpg';
import October from '../images/monthVideos/october.jpg';
import November from '../images/monthVideos/november.jpg';
import December from '../images/monthVideos/december.jpg';

//Training Video Thumbnails
import Cash from '../images/trainingVideos/trainingCash.jpg';
import Equipment from '../images/trainingVideos/trainingEquipment.jpg';
import Sales from '../images/trainingVideos/trainingSales.jpg';
import Service from '../images/trainingVideos/trainingService.jpg';
import Warehouse from '../images/trainingVideos/trainingWarehouse.jpg';

const MONTHLY_TITLES = [
  "January: Changes for a new Year",
  "February: Being Watchful on the Salesfloor",
  "March: Service with a Smile",
  "April: Minimizing Waste in the Workplace",
  "May: Touring our Stores 2020",
  "June: Welcoming the Summer Rushes",
  "July: Pop Quiz: Considering our Values",
  "August: Building a Safe Workplace for Your Co-workers",
  "September: Mindfulness in the Warehouse",
  "October: Sales Don't Have to be Spooky",
  "November: Preparing for a New Online Service",
  "December: Getting to know our Website Tool"
];

const TRAINING_TITLES = [
  "Customer Service and You",
  "Coordinating on Cash",
  "Selling Safely on the Salesfloor",
  "Warehouse Safety: Unloading Inventory",
  "Warehouse Safety: Learning the Equipment"
];

const MONTHLY_IMAGES = [January, February, March, April, May, June, July, August, September, October, November, December];

const TRAINING_IMAGES = [Service, Cash, Sales, Warehouse, Equipment];

class VideoCenter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    
    return (
      <main>
        <VideoPanel header="Monthly Videos —— 2020" titles={MONTHLY_TITLES} images={MONTHLY_IMAGES}/>
        <VideoPanel header="Training and Onboarding" titles={TRAINING_TITLES} images={TRAINING_IMAGES}/>
      </main>
    )
  }
}

export default VideoCenter;