import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Component cho từng số liệu
type StatisticalProps = {
  label: string;
  value: number;
};

const Statistical: React.FC<StatisticalProps> = ({ label, value }) => {
  return (
    <View style={styles.statContainer}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

// Component nhóm số liệu với các đường phân cách
type StatsGroupProps = {
  stats: { label: string; value: number }[];
};

const StatsGroup: React.FC<StatsGroupProps> = ({ stats }) => {
  return (
    <View style={styles.statsGroupContainer}>
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <Statistical label={stat.label} value={stat.value} />
          {index < stats.length - 1 && <View style={styles.separator} />}
        </React.Fragment>
      ))}
    </View>
  );
};

// Các style
const styles = StyleSheet.create({
  statsGroupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  statContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  value: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  label: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  separator: {
    width: 1,
    height: 40,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 8,
  },
});

export default StatsGroup;
