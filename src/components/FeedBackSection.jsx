import { useState } from "react";
import Button from "./Button/Button";

function StateVsRef() {
    const [value, setValue] = useState(" ");

    return (
        <div>
            <h3>Input value:{value}</h3>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="control"
            />
        </div>
    );
}

export default function FeedBackSection() {
    const [form, setForm] = useState({
        name: "",
        hasError: false,
        reason: "help",
    });
    // const [name, setName] = useState("");
    // const [hasError, setHasError] = useState(true);
    // const [reason, setReason] = useState("help");

    function handleNameChanhge(event) {
        console.log(event);
        // setName(event.target.value);
        // setHasError(event.target.value.trim().length === 0);
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }));
    }

    // function toggleError() {
    // setHasError((prev)=> !prev)
    // }

    return (
        <section>
            <h3>Обратная связь</h3>
            {/* <Button onClick={toggleError}>Toggle Error</Button> */}
            <form style={{ marginBottom: "2rem" }}>
                <label htmlFor="name">Ваше имя</label>
                <input
                    type="text"
                    className="control"
                    id="name"
                    value={form.name}
                    style={{
                        border: form.hasError ? "1px solid red" : null,
                    }}
                    onChange={handleNameChanhge}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) =>
                        setForm((prev) => ({ ...prev, reason: event.target.value }))
                    }
                >
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

                <Button disabled={!form.name.length} isActive={form.name.length}>
                    Отправить
                </Button>
            </form>
            <hr />
            <StateVsRef />
        </section>
    );
}
