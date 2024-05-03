import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { randomAdvice } from "../../redux/actions";
import { ApiError, Loading } from "../../components";

export default function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const { slip, loading, error } = useSelector((state: RootState) => state.advice);

    useEffect(() => { dispatch(randomAdvice()) }, [])

    if (error) { return <ApiError error={error} /> }

    return loading
        ? <Loading />
        : <View className="flex flex-1 justify-center items-center bg-slate-900 p-5">
            <Text className="text-xl font-semibold text-white">#{slip?.slip.id}</Text>
            <Text className="text-2xl text-white text-center font-bold">{slip?.slip.advice}</Text>
        </View>
}