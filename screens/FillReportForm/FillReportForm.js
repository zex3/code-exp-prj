import * as React from "react";
import { Text, View, TextInput, StyleSheet, Button, Dimensions } from "react-native";
import {Formik} from 'formik';

export default function FillReportForm({addReport}){
    
    return(
            <View style={styles.TextInputParent}>
                <Formik
                    initialValues={{title:'', description:'', location:''}}
                    onSubmit={(values)=>{addReport(values)}}>
                    
                    {props =>(
                        <View >
                            <TextInput 
                                style = {styles.InputColumn}
                                placeholder="Title"
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}/>
                            
                            <TextInput 
                                style = {styles.InputColumn}
                                placeholder="Location"
                                onChangeText={props.handleChange('location')}
                                value={props.values.location}/>

                            <TextInput
                                style = {styles.InputColumnBottom} 
                                multiline
                                placeholder="Description"
                                onChangeText={props.handleChange('description')}
                                value={props.values.description}/>
                                
                            <Button title="Submit" style={styles.Button} onPress={props.handleSubmit}></Button>
                        </View>
                    )}

                </Formik>
            </View>
        )}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    InputColumn : {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginTop:15,
        fontSize: 18,
        borderRadius: 6,
    },
    InputColumnBottom:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginTop:15,
        marginBottom: 15,
        fontSize: 18,
        borderRadius: 6,

    },
    TextInputParent : {
        padding: 20,
        margin:15
    },
    Button :{
        color: "#00008B"
    }
  })
