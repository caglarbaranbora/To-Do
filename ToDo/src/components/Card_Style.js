import { StyleSheet} from "react-native";

const cardStyle = StyleSheet.create({
    main:{
        margin : 10,
        flex:1,
    },

    save_area: {
        flex:1,
    },
    
    saved_bar: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#bae8e8',      
        flexDirection: 'row',
        marginBottom: 5,
        padding: 10,
    },
    text: {
        flex:1,
        color: '#272643',
        fontSize: 20,
        textTransform: 'uppercase'
    },
    delete_button: {
        padding: 5,
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#272643',
        color : '#272643',
        textAlign: 'center',
    },
    card_body:{
        borderRadius: 20,
        margin:10,
        backgroundColor: '#2c698d',
    },
    input:{
        color: 'black',
        borderRadius: 20,
        margin: 10,
        backgroundColor: 'white',
    },
    button:{
        margin: 10,
    },
    touchable_opacity:{
        borderRadius: 20,
        backgroundColor: '#bae8e8',
        alignItems: 'center',
        padding: 10,
    },
    text_opacity:{
        fontWeight: 'bold',
        color: '#272643',
    },
  
  
});

export default cardStyle;