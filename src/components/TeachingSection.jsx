import WayToTeach from "./WayToTeach.jsx";
import { ways } from "../data.js";

export default function TeachingSecton() {
    return (
        <section>
            <h3>Наш подход к обучению</h3>

            <ul>
                {ways.map((way) => (
                    <WayToTeach
                        key={way.title}
                        description={way.description}
                        title={way.title}
                    />
                ))}
            </ul>
        </section>
    );
}
