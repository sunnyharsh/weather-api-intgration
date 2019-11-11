import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import DatePicker from 'react-date-picker';
import { weatherData } from "../store/actions/index.action";
import { format } from 'date-fns'

class WeatherReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            forcast:[],
            byDefault:{}
        };
        this.props.$weatherData()
    }
    onChange=(date)=>{
        const Dateparse=format(date ,'yyyy-MM-dd')
        // console.log(Dateparse)
         this.state.forcast.map((obj=>{
                if(obj.date===Dateparse){
                    this.setState({
                        byDefault:obj
                    })
                }
            }))
        this.setState({ date })
    }
    componentDidMount(){
        const {_weatherData }=this.props;
        // console.log(_weatherData ,"PPPP")
    }
    componentWillReceiveProps(nextProps){
        var d = new Date();
        const todayDate=format(d ,'yyyy-MM-dd')
        if(nextProps && nextProps._weatherData){
            nextProps._weatherData.forecast.map((obj=>{
               
                if(obj.date===todayDate){
                    this.setState({
                        forcast:nextProps._weatherData.forecast,
                        byDefault:obj
                    })
                }
            }))
        }
    }
    render() {
        const { _weatherData }=this.props
        const {byDefault,forcast }=this.state;
        console.log(byDefault)
        let location=_weatherData && _weatherData.location;
        let current=_weatherData && _weatherData.current;

        return (
            <React.Fragment>
                <div className="weather-header">Weather Report</div>
                
                <div className="bg-img">
                    <div className="upper"></div>
                    <div style={{display:"flex", justifyContent:"space-evenly"}}>
                        <div style={{ padding:"20px", display:"inline-block"}}>
                            <DatePicker  onChange={this.onChange} value={this.state.date}/>
                        </div>
                        <div className="weather-date">
                            <div>
                                <span className="text">Location:-</span>
                                <span className="text">{location && location.name}</span>
                            </div>
                            <div>
                                <span className="text">Zip code:-</span>
                                <span className="text">{location && location.zipcode}</span>
                            </div>
                        </div>
                        <div className="current-status">
                            <div>
                                <span className="text">temperature:-</span>
                                <span className="text">{current && current.temperature}</span>
                            </div>
                            <div>
                                <span className="text">observationtime:-</span>
                                <span className="text">{current && current.observationtime}</span>
                            </div>
                            <div>
                                <span className="text">feelslike:-</span>
                                <span className="text">{current && current.feelslike}</span>
                            </div>
                            <div>
                                <span className="text">humidity:-</span>
                                <span className="text">{current && current.humidity}</span>
                            </div>
                            <div>
                                <span className="text">winddisplay:-</span>
                                <span className="text">{current && current.winddisplay}</span>
                            </div>  
                            <div>
                                <span className="text">windspeed:-</span>
                                <span className="text">{current && current.windspeed}</span>
                            </div> 
                        </div>
                     </div>
                <div>
                   <div className="dateBy">
                       <span style={{color:"#fff",fontSize:"20px", fontWeight:"bold "}}>you can see weather report of next three days and previous day</span>
                       <br/><span  className="text ">
                           weather of {byDefault.date}
                        </span>
                   </div>
                   <div className="weather-report">
                        <div>
                            <span className="text">Skytextday:</span>
                            <span className="text">{byDefault.skytextday}</span>
                        </div>
                        <div>
                            <span className="text">Day:</span>
                            <span className="text">{byDefault.day}</span>
                        </div>
                        <div>
                            <span className="text">Low:</span>
                            <span className="text">{byDefault.low}</span>
                        </div>
                        <div>
                            <span className="text">High:</span>
                            <span className="text">{byDefault.high}</span>
                        </div>
                        <div>
                            <span className="text">skycodeday:</span>
                            <span className="text">{byDefault.skycodeday}</span>
                        </div>
                        <div>
                            <span className="text">Precip:</span>
                            <span className="text">{byDefault.precip}</span>
                        </div>
                   </div>
               </div>
                </div>
               
                <style jsx>
                    { `
                    .weather-report{
                        text-align:center;
                    }
                    .dateBy{
                        text-align:center;
                    }
                    .current-status{
                        // display:inline-block;
                        margin-left: 30px;
                    }
                    .text{
                        color: #000;
                        font-weight: bold;
                        font-size: 20px;
                        padding-top: 30px;
                    }
                    .weather-date{
                        // display:inline-block;
                            margin-left: 30px;
                    }
                    .bg-img{
                        width:100%;
                        min-height:600px;
                        background-repeat:no-repeat;
                        background-size: cover;
                        position:relative;
                        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoyG5cuKsQs_I-SvJDv5d6h9a2FFEkWF9Nf-X3QLJnCPvwF6Ps')    ;
                    }
                    .upper{
                        position:absolute;
                        height:100%;
                        width:100%;
                        top:0px;
                        left:0px;
                        background-color: rgba(0,0,0,0.5)
                    }
                    .weather-header{
                        background-color: #28b6ec;
                        color: #fff;
                        padding: 10px;
                        text-align: center;
                        font-size: 20px;
                        }
                    ` }
                </style>
            </React.Fragment>
        );
    }
}
// export default AddData;
const mapState = ({ weatherData }) => {
    return {
        _weatherData: weatherData
    };
};
const mapDispatch = dispatchEvent => ({
    $weatherData: () => dispatchEvent(weatherData())
});
export default connect(
    mapState,
    mapDispatch
)(WeatherReport);
