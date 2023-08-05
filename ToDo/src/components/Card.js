import React, {useState} from "react";
import { View, Text, TextInput ,TouchableOpacity, FlatList } from "react-native";
import cardStyle from "./Card_Style";


const Card = () => {
    const [entered, setEntered] = useState('');
    //burada kullanicidan aldigimiz textInputu 
    //kontrol ediyoruz ve Entered functionuna
    //gonderip text olarak setliyoruz
    
    const [save, setSave] = useState ([]);
    //bos bir dizi olarak tanimladik 
    //kaydedeceklerimi icerisinde asagidaki 
    //saved function ile yaziyoruz
    //her kayittan sonra giris temizlenir
    const [deleteIcon, setDeleteIcon] = useState(false); // delete text icin
    const [deleteCandidateId, setDeleteCandidateId] = useState(null); // Silinecek görevin ID'sini saklayacak durum

    function Entered(text){ 
        setEntered(text);
    }

    function Saved(){
        if(entered.trim() !== ''){//trim bosluklari siler
            setSave([...save, {id: Date.now(), title: `title ${save.length +1 }`, text: entered}]);
            setEntered('');
            // '...' bu simge spread islemi olarak adlandirilir
            // spread isleminin amaci varolan diziyi bozmadan diziyi 
            //degistirmektir surekli dizi silip yeniden yazmaktan bizi
            //kurtarirken gereksiz sistem kullanimini da azaltir
        } 
    }

    function DeleteSaved(id){
        const filteredData = save.filter((data) => data.id !== id);
        setSave(filteredData);//data id uzerinden array'a yaziyoruz
        setDeleteCandidateId(null);//default degere dondurmek icin
    }

    function onLongPressHandler(id) {
        setDeleteIcon(true);//long pressde iconu true yap yani ekranda goster
        setDeleteCandidateId(id);

    }

    const renderItem = ({ item }) => (
        <TouchableOpacity

            key={item.id}
            onPress={() => {
                if(deleteCandidateId !== item.id){
                    //onceden basili tutulmus fakat delete islemi gerceklesmemisse 
                    //yeniden farkli bir urune basili tutulursa 
                    // Başka bir görevin üzerine basılı tutma işlemi yapılmışsa deleteCandidateId'yi sıfırla
                    setDeleteCandidateId(null);
                    }
                }}   
                onLongPress={() => onLongPressHandler(item.id)}
                onPressOut={() => setDeleteIcon(false)}
            >   
                <View style = {cardStyle.saved_bar}>
                    <Text style = {cardStyle.text}>{item.text}</Text>
                        {item.id === deleteCandidateId && 
                            (
                                <Text style = {cardStyle.delete_button} onPress={() => DeleteSaved(item.id)}>DELETE</Text>
                            )}
                </View>
            </TouchableOpacity>
    );
          
    return (
        <View style ={cardStyle.main}>

            <FlatList
                data={save}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{flexGrow:1}}//childlar kadar yer kaplamasi icin
            />
                <View style ={cardStyle.card_body}>                   
                    <TextInput
                        style = {cardStyle.input}
                        placeholder="To-Do..."
                        onChangeText={Entered}
                        value={entered}
                        />
                    <View style={cardStyle.button}>

                        <TouchableOpacity style={cardStyle.touchable_opacity} onPress={Saved}>
                            <Text style = {cardStyle.text_opacity}>SAVE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>      
    );
}

export default Card;