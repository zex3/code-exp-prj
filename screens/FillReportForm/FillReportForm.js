import * as React from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import {Formik} from 'formik';

export default function FillReportForm({addReport}){
    return(
        <View>
            <Formik
                initialValues={{title:'', decription:'', location:''}}
                onSubmit={(values)=>{addReport(values)}}>
                
                {props =>(
                    <View  >
                        <TextInput 
                            style = {styles.InputColumn}
                            placeholder="Title"
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}/>
                        
                        <TextInput 
                            placeholder="Location"
                            onChangeText={props.handleChange('location')}
                            value={props.values.location}/>

                        <TextInput 
                            multiline
                            placeholder="Decription"
                            onChangeText={props.handleChange('decription')}
                            value={props.values.decription}/>
                            
                        <Button title="Submit" color="maroon" onPress={props.handleSubmit}></Button>
                    </View>
                )}

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    InputColumn : {
      borderWidth: 1,
      borderColor: "red",
      padding: 10,
      fontSize: 18,
      borderRadius: 6
    }
  })