import React,{useState} from "react";
import Styles from "./CarHome.module.css";
import Car from "./Car";
import FirstImage from "../Images/FirstCarImages.jpg";
import SecondImage from "../Images/SecondCarImages.jpg";
import ThirdImage from "../Images/ThirdCarImages.jpg";
import FourthImage from "../Images/FourthCarImages.jpg";
import { DatePicker,TimePicker, Select } from "antd";;

//const { RangePicker } = DatePicker;
const CarHome = () => {
const[imageState,setImageState] = useState("");

  return (
    <div className="container mt-5">
      <div className={`row ${Styles.firstRow}`}>
      <p className={Styles.textCenter}>Grab your car!!! And Enjoy your Vacations!!! </p>
        <div className="col-lg-12">
          <div className="row pb-3">
            <div className="col-lg-4 card">
              <p className="mt-4">Pickup Location:</p>
              <Select
                defaultValue="Hyderabad"
                style={{
                  width: 200,
                }}
                onChange=""
                options={[
                  {
                    value: "Hyderabad",
                    label: "Hyderabad",
                  },
                  {
                    value: "Vikshakapatnam",
                    label: "Vikshakapatna",
                  },
                  {
                    value: "Bangloore",
                    label: "Bangloore",
                  },
                  {
                    value: "Mumbai",
                    label: "Mumbai",
                  },
                  {
                    value: "Chennai",
                    label: "Chennai",
                  },
                  {
                    value: "Delhi",
                    label: "Delhi",
                  },
                  {
                    value: "Pune",
                    label: "Pune",
                  },
                  {
                    value: "Kolkatta",
                    label: "Kolkatta",
                  },
                ]}
              />
            </div>
            <div className="col-lg-2 card py-2">
              <p>Drop Location:</p>
              <Select
                defaultValue="Hyderabad"
                style={{
                  width: 165,
                }}
                onChange=""
                options={[
                  {
                    value: "Hyderabad",
                    label: "Hyderabad",
                  },
                  {
                    value: "Vikshakapatnam",
                    label: "Vikshakapatna",
                  },
                  {
                    value: "Bangloore",
                    label: "Bangloore",
                  },
                  {
                    value: "Mumbai",
                    label: "Mumbai",
                  },
                  {
                    value: "Chennai",
                    label: "Chennai",
                  },
                  {
                    value: "Delhi",
                    label: "Delhi",
                  },
                  {
                    value: "Pune",
                    label: "Pune",
                  },
                  {
                    value: "Kolkatta",
                    label: "Kolkatta",
                  },
                ]}
              />
              
              
            </div>
            <div className="col-lg-2 card py-2">
              <p>pickup Date:</p>
              <DatePicker />
              
              
            </div>
            <div className="col-lg-2 card">
              <p>Drop Date:</p>
              <DatePicker></DatePicker>
              
            </div>
            <div className="col-lg-2 card">
              <p>Pickup Time:</p>
             <TimePicker />
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${Styles.secondRow}`}>
        <div>
          <button className={Styles.searchBtn}>SEARCH</button>
        </div>
      </div>

      <div className={`row ${Styles.thirdRow} py-3`}>
        <div className="col-lg-12 card">
          <div className="d-flex flex-row justify-content-around ">
            <h3>Offers</h3>
            
            <p>Cabs</p>
            <p>Bank Offers</p>
          </div>
        </div>

        <Car
          image={FirstImage}
          setImageState = {setImageState}
          
          Heading="Sedan Cars"

          Description="Sedan Cars are best for family useage!!! In sedan cars Five members car travel easily and best boot Space.."
        />
        <Car
          image={SecondImage}
          setImageState = {setImageState}

          Heading="Miniature Cars"
          Description="Mini cars are best for Small Family useage!!! In mini cars we can travel four Members confortably and driving cast is less.."
        />
        <Car
          image={ThirdImage}
          setImageState = {setImageState}

          Heading="SUV Cars"
          Description="Suv cars are also best for Family useage!!! In Suv cars five Members car Travel easily!But there is no boot space.."
        />
        <Car
          image={FourthImage}
          setImageState = {setImageState}

          Heading="MPV Cars"
          Description="Mpv cars are best usage for combine family travel!!! In Mpv cars more than six members can travel,But Running cost is high.."
        />
      </div>
    </div>
  );
};

export default CarHome;