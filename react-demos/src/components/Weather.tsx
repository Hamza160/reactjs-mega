
const Weather = ({temprature}:{temprature:number}) => {

    if(temprature < 15){
        return <h1>It's cold outside!</h1>
    }else if(temprature >= 15 && temprature <= 25){
        return  <h1>It's nice outside!</h1>
    }else{
        return <h1>it's hot outside</h1>
    }
}

export default Weather