import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CardSeparator from "./CardSeparator";
import {
  defaultBackground,
  defaultPadding,
  textColorBody,
  styles as detailStyles
} from "./DetailStyling";
import Moment from "moment";

const FactItem = props => {
  subtitleSelectedHandler = () => {
    props.urlSelectedHandler(props.value);
  };

  let subtitle = {};
  if (props.urlSelectedHandler !== null) {
    subtitle = (
      <TouchableOpacity onPress={this.subtitleSelectedHandler}>
        <Text style={styles.subtitle}>{props.value}</Text>
      </TouchableOpacity>
    );
  } else {
    subtitle = <Text style={styles.subtitle}>{props.value}</Text>;
  }

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.title}</Text>
      {subtitle}
    </View>
  );
};

const factsView = props => {
  let facts = [];
  if (props.item.budget !== null) {
    facts.push(
      <FactItem
        title="Budget"
        value={"$" + props.item.budget.toLocaleString()}
        key="Budget"
      />
    );
  }
  if (props.item.revenue !== null) {
    facts.push(
      <FactItem
        title="Revenue"
        value={"$" + props.item.revenue.toLocaleString()}
        key="Revenue"
      />
    );
  }
  if (props.item.homepage !== null) {
    facts.push(
      <FactItem
        title="Homepage"
        value={props.item.homepage}
        key="Homepage"
        urlSelectedHandler={props.urlSelectedHandler}
      />
    );
  }
  if (props.item.spoken_languages !== null) {
    let languages = props.item.spoken_languages.map(x => x.iso_639_1);
    facts.push(
      <FactItem
        title="Languages"
        value={languages.join(", ")}
        key="Languages"
      />
    );
  }
  if (props.item.production_countries !== null) {
    let countries = props.item.production_countries.map(x => x.iso_3166_1);
    facts.push(
      <FactItem title="Country" value={countries.join(", ")} key="Country" />
    );
  }
  if (props.item.runtime !== null) {
    facts.push(
      <FactItem
        title="Duration"
        value={props.item.runtime + " min"}
        key="Duration"
      />
    );
  }
  if (props.item.release_date !== null) {
    facts.push(
      <FactItem
        title="Premiere date"
        value={Moment(props.item.release_date).format("MMM Do YYYY")}
        key="Premiere date"
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={detailStyles.title}>Facts</Text>
      {facts}
      <View
        style={{
          height: defaultPadding,
          width: "100%",
          backgroundColor: defaultBackground
        }}
      />
      <CardSeparator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: defaultBackground,
    width: "100%"
  },
  item: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: defaultBackground,
    marginTop: defaultPadding / 2
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: textColorBody,
    marginLeft: defaultPadding,
    marginRight: defaultPadding / 2
  },
  subtitle: {
    fontSize: 15,
    color: textColorBody,
    textAlign: "right",
    marginRight: defaultPadding,
    marginLeft: defaultPadding / 2,
    backgroundColor: defaultBackground
  }
});

export default factsView;
