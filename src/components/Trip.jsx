import "./TripStyles.css";
import TripData from "./TripData";

function Trip(){
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                 image="https://images.squarespace-cdn.com/content/v1/5d09463a7ff6500001c3c9ba/1610053487249-DHPSQFT20X5VZ9QHT5G8/RA_Pianemoisland_indtravel.jpg"
                 heading="Trip in Indonesia"
                 text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />

                <TripData 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2g6l_94ew8stb-b_dtoPOzLPo_q9aIR0OKh6vT4Zp-xHeDyvFAj9-BIXW&s=10"
                heading="Trip in Malaysia"
                text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
                />
                <TripData 
                image="https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?s=612x612&w=0&k=20&c=ZneUFVlR5TPCooxRV1rldUAadqLxZEvOoyVCOrtpcRQ="
                heading="Trip in Farance"
                text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
                
                />

            </div>
            </div>
    )
}
export default Trip;