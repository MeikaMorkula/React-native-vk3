import React from "react";
import { Appbar } from "react-native-paper";
import { StackHeaderProps } from "@react-navigation/stack";
import { getHeaderTitle } from '@react-navigation/elements';


export default function PaperAppBar({
  navigation,
  back,
  route,
  options,
}: StackHeaderProps) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header elevated={false}>
      {back ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : null}
      <Appbar.Content title={title}></Appbar.Content>
      {!back ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate("Details")}
        />
      ) : null}
    </Appbar.Header>
  );
}
