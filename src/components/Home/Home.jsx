// import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { analytics, logEvent } from "../firebase";

export const Home = () => {

    const location = useLocation();

    // useEffect(() => {
    //     logEvent(analytics, 'page_view', {
    //       page_path: location.pathname,
    //       page_location: window.location.href,
    //       page_title: document.title
    //     });
    //   }, [location]);

    const triggerLogEvent = () => {
        logEvent(analytics, 'button_click_two', {
            page_path: location.pathname,
            page_location: window.location.href,
            page_title: document.title
          });
        console.log("click event logged");
    }

    return(
        <div>
            <h1> Home </h1>
            <button onClick={triggerLogEvent} className="btn btn-primary"> Log Event </button>
        </div>
    )
}