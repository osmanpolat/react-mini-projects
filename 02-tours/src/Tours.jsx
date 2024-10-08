import Tour from "./Tour"
import React from "react"

const Tours=({tours,removeTour})=>{
    return (
    <section>
        <div className="title">
            <h2>Ours tours</h2>
            <div className="underline"></div>
        </div>
        <div>
            {tours.map((tour)=>{
                return <Tour key={tour.id} {...tour} removeTour={removeTour}>

                </Tour>
            }
            
            )}
        </div>
    </section>
    )
}


export default Tours