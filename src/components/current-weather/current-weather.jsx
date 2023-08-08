import moment from "moment";

const CurrentWeather = ({ data }) => {
    return (
        <section className="weather">
            <article className="top">
                <div>
                    <p className="date">{moment(data.dt * 1000).format('dddd, MMMM D')} at {moment(data.dt * 1000).format('h:mm a')}</p>
                    <p className="city">{data.city}</p>
                    <p className="description">{data.weather[0].description}</p>
                </div>

                <figure className="icon">
                    <picture>
                        <img alt="Weather Icon" src={`img/${data.weather[0].icon}.png`} />
                    </picture>
                </figure>
            </article>

            <article className="bottom">
                <div className="temperature">
                    <div className="current-temperature">{Math.round(data.main.temp)}°F</div>
                    <span className="parameter-label">High: </span>
                    <span className="parameter-value">
                        <strong>{Math.round(data.main.temp_max)}°F</strong>
                    </span>
                    <span> / </span>
                    <span className="parameter-label">Low: </span>
                    <span className="parameter-value">
                        <strong>{Math.round(data.main.temp_min)}°F</strong>
                    </span>
                </div>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like </span>
                        <span className="parameter-value">
                            {Math.round(data.main.feels_like)}°F
                        </span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity </span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind </span>
                        <span className="parameter-value">{Math.round(data.wind.speed)} mph</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Sunrise</span>
                        <span className="parameter-value">{moment(data.sys.sunrise * 1000).format('h:mm a')}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Sunset</span>
                        <span className="parameter-value">{moment(data.sys.sunset * 1000).format('h:mm a')}</span>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default CurrentWeather;