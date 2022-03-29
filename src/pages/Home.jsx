import React from "react";
import Banner from "../components/Banner";
import Card from "../components/parts/Card";

class Home extends React.Component {
    render(){
        return(
            <main>
                <Banner />
                <div className="new-arrivals card-list" >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        )
    }
}

export default Home;