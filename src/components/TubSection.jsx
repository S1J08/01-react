import Button from "./Button/Button";

export default function TubSection({ active, xui }) {
    const changeTab = () => {
        xui("main");
    };
    const chngeTabXui = () => {
        xui("feedback");
    };

    return (
        <section style={{ marginBottom: "1rem" }}>
            <Button isActive={active === "main"} click={changeTab}>
                Главная
            </Button>
            <Button isActive={active === "feedback"} click={chngeTabXui}>
                Обратная связь
            </Button>
        </section>
    );
}
