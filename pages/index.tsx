import { useRouter } from "next/router";
export default function Home() {
    const router = useRouter();
    return (
        <div>
            <button
                onClick={() => {
                    localStorage.setItem("user", "gabriel");
                    router.push("/gabriel");
                }}
            >
                Gabriel
            </button>
            <button
                onClick={() => {
                    localStorage.setItem("user", "monique");
                    router.push("/monique");
                }}
            >
                Monique
            </button>
        </div>
    );
}
