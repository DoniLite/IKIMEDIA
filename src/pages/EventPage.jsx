import { Section } from "../components/Event";
import { Nav } from "../components/Nav";
import { SwitchContextLabel } from "./Home";


export function EventPage() {
    return(
        <>
            <Nav />
            <div className="content">
                <SwitchContextLabel />
                <Section />
            </div>
        </>
    )
}