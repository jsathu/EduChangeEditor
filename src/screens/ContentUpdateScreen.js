import React from 'react';
import { StyleSheet, Text, View, Dimensions, Picker, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import * as firebase from 'firebase';

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default class ContentUpdateScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            grade: "6",
            subject: "EnglishLanguage",
            medium: "English",
            category: "youtubeVideos",
            title: "",
            titleOfContent: "",
            content: "",
            isAuth: false,
            password: "",
            enteredPassword: ""
        }
    }

    loadFont = async () => {
        await Font.loadAsync({
            openSansBold: require("../fonts/opensans-bold.ttf"),
            nunitoRegular: require("../fonts/nunito-regular.ttf"),
            ralewayMedium: require("../fonts/raleway-medium.ttf")
        })
    }

    authUser = () => {
        firebase.database().ref("password/")
            .once("value", (password) => {
                this.setState({ password: password.val() });
            })
            .catch((error) => console.log(error))
    }

    checkPassword = () => {
        if (this.state.password === this.state.enteredPassword) {
            alert("Logged in successfully");
            this.setState({ isAuth: true });
        } else {
            alert("Password is incorrect");
            this.setState({ enteredPassword: "" });
        }
    }

    componentDidMount() {
        this.authUser();
        this.loadFont();
    }

    renderPickerSubjects = () => {
        if (this.state.medium === "English") {
            return (
                <Picker
                    selectedValue={this.state.subject}
                    style={styles.picker}
                    onValueChange={(subject) =>
                        this.setState({ subject })
                    }>
                    <Picker.Item label="EnglishLanguage" value="EnglishLanguage" />
                    <Picker.Item label="Mathematics(E)" value="Mathematics(E)" />
                    <Picker.Item label="History(E)" value="History(E)" />
                    <Picker.Item label="Science(E)" value="Science(E)" />
                    <Picker.Item label="Geography(E)" value="Geography(E)" />
                    <Picker.Item label="Lifeskills&CitizenshipEducation(E)" value="Lifeskills&CitizenshipEducation(E)" />
                    <Picker.Item label="Practical&TechnicalStudies(E)" value="Practical&TechnicalStudies(E)" />
                    <Picker.Item label="Health&PhysicalEducation(E)" value="Health&PhysicalEducation(E)" />
                    <Picker.Item label="ICT" value="ICT" />
                    <Picker.Item label="Buddhism" value="Buddhism" />
                    <Picker.Item label="Hinduism" value="Hinduism" />
                    <Picker.Item label="Islam" value="Islam" />
                    <Picker.Item label="Christianity" value="Christianity" />
                    <Picker.Item label="Catholic" value="Catholic" />
                    <Picker.Item label="Art" value="Art" />
                    <Picker.Item label="Dance" value="Dance" />
                    <Picker.Item label="WesternMusic" value="WesternMusic" />
                    <Picker.Item label="EasternMusic" value="EasternMusic" />
                    <Picker.Item label="Tamil" value="Tamil" />
                    <Picker.Item label="Sinhala" value="Sinhala" />
                    <Picker.Item label="Tamil(second)" value="Tamil(second)" />
                    <Picker.Item label="Sinhala(second)" value="Sinhala(second)" />
                </Picker>
            )
        } else if (this.state.medium === "Tamil") {
            return (
                <Picker
                    selectedValue={this.state.subject}
                    style={styles.picker}
                    onValueChange={(subject) =>
                        this.setState({ subject })
                    }>
                    <Picker.Item label="EnglishLanguage" value="EnglishLanguage" />
                    <Picker.Item label="Mathematics(T)" value="Mathematics(T)" />
                    <Picker.Item label="History(T)" value="History(T)" />
                    <Picker.Item label="Science(T)" value="Science(T)" />
                    <Picker.Item label="Geography(T)" value="Geography(T)" />
                    <Picker.Item label="Lifeskills&CitizenshipEducation(T)" value="Lifeskills&CitizenshipEducation(T)" />
                    <Picker.Item label="Practical&TechnicalStudies(T)" value="Practical&TechnicalStudies(T)" />
                    <Picker.Item label="Health&PhysicalEducation(T)" value="Health&PhysicalEducation(T)" />
                    <Picker.Item label="ICT" value="ICT" />
                    <Picker.Item label="Buddhism" value="Buddhism" />
                    <Picker.Item label="Hinduism" value="Hinduism" />
                    <Picker.Item label="Islam" value="Islam" />
                    <Picker.Item label="Christianity" value="Christianity" />
                    <Picker.Item label="Catholic" value="Catholic" />
                    <Picker.Item label="Art" value="Art" />
                    <Picker.Item label="Dance" value="Dance" />
                    <Picker.Item label="WesternMusic" value="WesternMusic" />
                    <Picker.Item label="EasternMusic" value="EasternMusic" />
                    <Picker.Item label="Tamil" value="Tamil" />
                    <Picker.Item label="Sinhala" value="Sinhala" />
                    <Picker.Item label="Tamil(second)" value="Tamil(second)" />
                    <Picker.Item label="Sinhala(second)" value="Sinhala(second)" />
                </Picker>
            )
        } else {
            return (
                <Picker
                    selectedValue={this.state.subject}
                    style={styles.picker}
                    onValueChange={(subject) =>
                        this.setState({ subject })
                    }>
                    <Picker.Item label="EnglishLanguage" value="EnglishLanguage" />
                    <Picker.Item label="Mathematics(S)" value="Mathematics(S)" />
                    <Picker.Item label="History(S)" value="History(S)" />
                    <Picker.Item label="Science(S)" value="Science(S)" />
                    <Picker.Item label="Geography(S)" value="Geography(S)" />
                    <Picker.Item label="Lifeskills&CitizenshipEducation(S)" value="Lifeskills&CitizenshipEducation(S)" />
                    <Picker.Item label="Practical&TechnicalStudies(S)" value="Practical&TechnicalStudies(S)" />
                    <Picker.Item label="Health&PhysicalEducation(S)" value="Health&PhysicalEducation(S)" />
                    <Picker.Item label="ICT" value="ICT" />
                    <Picker.Item label="Buddhism" value="Buddhism" />
                    <Picker.Item label="Hinduism" value="Hinduism" />
                    <Picker.Item label="Islam" value="Islam" />
                    <Picker.Item label="Christianity" value="Christianity" />
                    <Picker.Item label="Catholic" value="Catholic" />
                    <Picker.Item label="Art" value="Art" />
                    <Picker.Item label="Dance" value="Dance" />
                    <Picker.Item label="WesternMusic" value="WesternMusic" />
                    <Picker.Item label="EasternMusic" value="EasternMusic" />
                    <Picker.Item label="Tamil" value="Tamil" />
                    <Picker.Item label="Sinhala" value="Sinhala" />
                    <Picker.Item label="Tamil(second)" value="Tamil(second)" />
                    <Picker.Item label="Sinhala(second)" value="Sinhala(second)" />
                </Picker>
            )
        }
    }

    publishContents = () => {
        if (this.state.category !== "" &&
            this.state.content !== "" &&
            this.state.grade !== "" &&
            this.state.medium !== "" &&
            this.state.subject !== "" &&
            this.state.title !== "" &&
            this.state.titleOfContent !== "") {
            let pushNum = "0";
            let reference = firebase.database().ref(`subjects/grade${this.state.grade}/${this.state.medium}/${this.state.subject}/${this.state.title}/${this.state.category}`);
            reference.once("value", (dataSnapShot) => {
                if (dataSnapShot.val() !== undefined && dataSnapShot.val() !== null) {
                    pushNum = Object.keys(dataSnapShot.val()).length;
                } else {
                    return;
                }
            })
                .then(() => {
                    reference.child(`${pushNum.toString()}`)
                        .set({ "title": `${this.state.titleOfContent}`, "content": `${this.state.content}` })
                        .then(() => {
                            alert("Updated Successfully!!");
                            this.setState({ titleOfContent: "", content: "" });
                        })
                        .catch((error) => console.log(error))
                })
                .catch((error) => console.log(error))
        } else {
            alert("Please fill it completely !!");
        }
    }
    
    render() {
        if (this.state.isAuth) {
            return (
                <View style={styles.container}>
                    <ImageBackground source={{ uri: "https://wallpapercave.com/wp/wp2646214.jpg" }} style={{ height: height, width: width }}>

                        <Text style={styles.textHeading}>EduChange Editor</Text>

                        <View style={{ margin: height / 20 }}>

                            <Text style={styles.text}>Grade</Text>
                            <Picker
                                selectedValue={this.state.grade}
                                style={styles.picker}
                                onValueChange={(grade) =>
                                    this.setState({ grade })
                                }>
                                <Picker.Item label="6" value="6" />
                                <Picker.Item label="7" value="7" />
                                <Picker.Item label="8" value="8" />
                                <Picker.Item label="9" value="9" />
                            </Picker>

                            <Text style={styles.text}>Medium</Text>
                            <Picker
                                selectedValue={this.state.medium}
                                style={styles.picker}
                                onValueChange={(medium) =>
                                    this.setState({ medium })
                                }>
                                <Picker.Item label="English" value="English" />
                                <Picker.Item label="Tamil" value="Tamil" />
                                <Picker.Item label="Sinhala" value="Sinhala" />
                            </Picker>

                            <Text style={styles.text}>Subjects</Text>

                            {
                                this.renderPickerSubjects()
                            }

                            <Text style={styles.text}>Category</Text>

                            <Picker
                                selectedValue={this.state.category}
                                style={styles.picker}
                                onValueChange={(category) =>
                                    this.setState({ category })
                                }>
                                <Picker.Item label="Video" value="youtubeVideos" />
                                <Picker.Item label="PDF" value="pdfFiles" />
                                <Picker.Item label="Website" value="websites" />
                            </Picker>

                        </View>

                        <Text style={styles.text}>Main title</Text>
                        <TextInput
                            placeholder="Enter title (main)"
                            placeholderTextColor="#99AAAB"
                            onChangeText={(title) => { this.setState({ title }) }}
                            value={this.state.title}
                            style={styles.textInput}
                        />

                        <Text style={styles.text}>Content title</Text>
                        <TextInput
                            placeholder="Title of the content"
                            placeholderTextColor="#99AAAB"
                            onChangeText={(titleOfContent) => { this.setState({ titleOfContent }) }}
                            value={this.state.titleOfContent}
                            style={styles.textInput}
                        />

                        <Text style={styles.text}>Content data</Text>
                        <TextInput
                            placeholder="Content Data"
                            placeholderTextColor="#99AAAB"
                            value={this.state.content}
                            onChangeText={(content) => { this.setState({ content }) }}
                            style={styles.textInput}
                        />

                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => { this.publishContents() }}>
                                <Text style={styles.buttonText}>Update</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("QuizUpdate") }}>
                                <Text style={styles.buttonText}>Update Quiz</Text>
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                </View>
            );
        } else {
            return (
                <View>
                    <ImageBackground source={{ uri: "https://wallpapercave.com/wp/wp2646214.jpg" }} style={{ height: height, width: width }}>
                        <View style={{ alignContent: "center", justifyContent: "center" }}>
                            <TextInput
                                placeholder="Enter Password"
                                secureTextEntry={true}
                                placeholderTextColor="#99AAAB"
                                onChangeText={(enteredPassword) => { this.setState({ enteredPassword }) }}
                                value={this.state.enteredPassword}
                                style={styles.textInput}
                            />
                            <View style={styles.button}>
                                <TouchableOpacity onPress={() => { this.checkPassword() }}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: height / 50,
        alignSelf: "center",
        color: "#000000",
        fontFamily: "nunitoRegular"
    },
    textHeading: {
        fontSize: height / 20,
        alignSelf: "center",
        color: "#000000",
        fontFamily: "openSansBold",
        textAlign: "center"
    },
    textInput: {
        borderColor: "#000000",
        borderWidth: height / 200,
        borderRadius: 5,
        alignSelf: "center",
        margin: width / 80,
        height: height / 15,
        width: width / 1.2, //5.2
        color: "#000000",
        fontSize: height / 40,
        fontFamily: "nunitoRegular"
    },
    button: {
        width: width / 5, //15
        height: height / 27,
        alignSelf: "center",
        marginTop: height / 50,
        borderRadius: 5,
        backgroundColor: "#DFAF2B",
        marginBottom:height/60
    },
    buttonText: {
        fontSize: height / 40,
        alignSelf: "center",
        color: "#000000",
        fontFamily: "nunitoRegular"
    },
    picker: {
        height: height / 18,
        width: width / 2, //10
        alignSelf: "center",
        fontFamily: "ralewayMedium",
    }
});
