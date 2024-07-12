import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
export default AppLayout;