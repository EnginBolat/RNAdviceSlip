import React from "react";
import { View, Text } from "react-native";

export default function ApiError({ error }: { error: string }) {
    return <View className="flex flex-1 justify-center items-center bg-slate-900">
        <Text>{error}</Text>
    </View>
}