import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    nav: {
      position: "absolute",
      top: 700,
      left: 10,
      flexDirection: "row",
    },
    navIcon: {
      color: '#386641'
    },
    navItem: {
      alignItems: "center",
      padding:10,
      bottom: 10
    },
    container: {
      p:"12",
      rounded:"lg",
    },
    titleText: {
      fontSize: 40,
      fontWeight: "bold",
    },
    multilineText:{
      flexWrap: 'wrap',
      flexDirection: 'row',
    }
  });

export default styles;