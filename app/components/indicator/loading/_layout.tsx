import React from "react";
import { ActivityIndicator } from "react-native";

export default function Loading() {
    return <ActivityIndicator
        color={'black'}
        size={'small'}
        className="flex flex-1 justify-center items-center bg-slate-900"
    />

}