import { useRouter } from "next/router";

function Water(props) {
    console.log(props);
    const router = useRouter();
    console.log({ router });

    return <h1>agua</h1>;
}

export default Water;
