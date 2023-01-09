import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    nav: {
      position: "absolute",
      top: 700,
      left: 10,
      flexDirection: "row",
    },
    navItem: {
      alignItems: "center",
      padding:10,
      bottom: 10
    },
    container: {
      p:"12",
      rounded:"lg",
    }
  });

export default styles;