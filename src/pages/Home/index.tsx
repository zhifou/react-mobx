// pages/Home/index.tsx
import { observer } from "mobx-react";
import { useStores } from "~/stores";

const Home = () => {
    const { counterStore } = useStores();

    return (
        <div>
            <div>Home Page</div>
            <button onClick={() => counterStore.increase()}>
                counter: {counterStore.counter}
            </button>
        </div>
    );
};

export default observer(Home);
