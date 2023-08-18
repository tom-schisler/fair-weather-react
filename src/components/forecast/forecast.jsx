import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import moment from "moment";

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();

    return (
        <section className="forecast">
            <Accordion allowZeroExpanded >
                {data.list.map((item, index) =>
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <figure className="icon-small">
                                        <picture><img src={`img/${item.weather[0].icon}.png`} alt={`${item.weather[0].description} icon`} /></picture>
                                    </figure>
                                    <span className="date-time"><strong>{moment(item.dt_txt).format('ddd, M/D')}</strong> at <strong>{moment(item.dt_txt).format('h:mm a')}</strong></span>
                                    <span className="description"><strong>{item.weather[0].description}</strong></span>
                                    <span className="high-low">High: <strong>{Math.round(item.main.temp_max)}°F</strong> / Low: <strong>{Math.round(item.main.temp_min)}°F</strong></span>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <span className="span">Humidity: </span> 
                                    <span className="info"><strong>{item.main.humidity}%</strong></span>
                                </div>
                                <div className="daily-details-grid-item">
                                    <span className="span">Feels like: </span> 
                                    <span className="info"><strong>{Math.round(item.main.feels_like)}°F</strong></span>
                                </div>
                                <div className="daily-details-grid-item">
                                    <span className="span">Wind speed: </span> 
                                    <span className="info"><strong>{Math.round(item.wind.speed)} mph</strong></span>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                )}
            </Accordion>
        </section>
    )
}

export default Forecast;
