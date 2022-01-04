import Header from "./header";

export default function Layout(props) {
    return (
    <>
        <Header />
        <main>
            {props.children}
        </main>
    </>
    )
}