// pages/About/index.tsx
import { observer } from "mobx-react";
import { useStores } from "~/stores";

const About = () => {
    const { counterStore } = useStores();

    return <div>About Page {counterStore.counter}</div>;
};

export default observer(About);
