import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon(){
    const uri = "https://img.icons8.com/color/50/000000/discord-new-logo.png";

    return (
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
            
    );
}