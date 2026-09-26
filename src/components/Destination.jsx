import React from "react";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
        img1="https://i.pinimg.com/736x/57/f3/0f/57f30f7d4ba847bc935a0da9037de1be.jpg"
        img2="https://i.pinimg.com/736x/ec/6f/3b/ec6f3bd8af7303eeb5d17cbd6a071425.jpg"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You'll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you've made it back down, head straight to the beach for a refreshing, well-deserved swim."
        img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7scQ6z8DrlhNJQ21SWQq59Uugd3dY9bwxplbnVs8zUqPYuVMsHQacgM&s=10"
        img2="https://www.rssc.com/sites/default/files/ShipsLanding_Prestige_Desktop.jpg"
      />

    </div>
  );
};

export default Destination;