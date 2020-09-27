import React from 'react';
import { StyleSheet, Text, View, Dimensions, Picker, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import { FlatList } from 'react-native-gesture-handler';

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default class QuizUpdateScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            grade: "6",
            subject: "EnglishLanguage",
            medium: "English",
            question: "",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: "",
            correctAnswer: "",
            quizNumber: "",
            totalQuizzes: [],
            isReady: false,
            isShowList: false
        }
    }

    loadFont = async () => {
        await Font.loadAsync({
            openSansBold: require("../fonts/opensans-bold.ttf"),
            nunitoRegular: require("../fonts/nunito-regular.ttf"),
            ralewayMedium: require("../fonts/raleway-medium.ttf")
        })
    }

    getQuizNumbers = () => {
        if (this.state.grade !== "" &&
            this.state.medium !== "" &&
            this.state.subject !== "") {
            let reference = firebase.database().ref(`subjects/grade${this.state.grade}/${this.state.medium}/${this.state.subject}/quiz/`);
            reference.once("value", (data) => {
                if (data.val()) {
                    let quizNumbers = Object.keys(data.val());
                    this.setState({ totalQuizzes: quizNumbers })
                } else {
                    this.setState({ totalQuizzes: "0" })
                }
            })
                .then(() => {
                    if (this.state.totalQuizzes === "0") {
                        this.setState({ isReady: true, quizNumber: "0" });
                    } else {
                        this.setState({ isShowList: true });
                    }
                })
                .catch((error) => console.log(error))
        } else {
            alert("Please fill it completely !!");
        }
    }

    selectQuizNumber = () => {
        return (
            <FlatList
                data={this.state.totalQuizzes}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { this.setState({ quizNumber: item, isReady: true }) }}>
                            <Text style={styles.text}>Quiz {parseInt(item) + 1}</Text>
                        </TouchableOpacity>
                    )
                }} />
        )
    }

    componentDidMount() {
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
        if (this.state.question !== "" &&
            this.state.quizNumber !== "" &&
            this.state.correctAnswer !== "" &&
            this.state.grade !== "" &&
            this.state.medium !== "" &&
            this.state.subject !== "" &&
            this.state.answerOne !== "" &&
            this.state.answerTwo !== "" &&
            this.state.answerThree !== "" &&
            this.state.answerFour !== "") {
            let reference = firebase.database().ref(`subjects/grade${this.state.grade}/${this.state.medium}/${this.state.subject}/quiz/`);
            reference.child(`${this.state.quizNumber}`).push({
                question: this.state.question,
                answerOne: this.state.answerOne,
                answerTwo: this.state.answerTwo,
                answerThree: this.state.answerThree,
                answerFour: this.state.answerFour,
                correctAnswer: this.state.correctAnswer
            })
                .then(() => {
                    alert("Updated Successfully");
                    this.setState({
                        answerOne: "", answerTwo: "", answerThree: "", answerFour: "", correctAnswer: "", question: ""
                    })
                })
                .catch((error) => console.log(error))
        } else {
            alert("Please fill it completely !!");
        }
    }

    render() {
        if (!this.state.isReady) {
            return (
                <View style={styles.container}>
                    <ImageBackground source={{ uri: "https://wallpapercave.com/wp/wp2646214.jpg" }} style={{ height: height, width: width }}>

                        <Text style={styles.textHeading}>EduChange Editor(Quiz)</Text>

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

                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => { this.getQuizNumbers() }}>
                                <Text style={styles.buttonText}>Update Quiz</Text>
                            </TouchableOpacity>
                        </View>

                        {
                            this.state.isShowList ?
                                <View style={{ margin: height / 50 }}>

                                    <Text style={styles.text}>Select the quiz which you want to update or else press continue to create a new one</Text>

                                    {
                                        this.selectQuizNumber()
                                    }

                                    <View style={styles.button}>
                                        <TouchableOpacity onPress={() => {
                                            let index = this.state.totalQuizzes[this.state.totalQuizzes.length - 1];
                                            let result = parseInt(index) + 1;
                                            this.setState({ quizNumber: result.toString(), isReady: true })
                                        }}>
                                            <Text style={styles.buttonText}>Continue</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                : null
                        }

                    </ImageBackground>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ImageBackground source={{ uri: "https://wallpapercave.com/wp/wp2646214.jpg" }} style={{ height: height, width: width }}>

                        <Text style={styles.textHeading}>EduChange Editor(Quiz)</Text>

                        <Text style={styles.text}>Question</Text>
                        <TextInput
                            placeholder="Question"
                            placeholderTextColor="#99AAAB"
                            onChangeText={(question) => { this.setState({ question }) }}
                            value={this.state.question}
                            style={styles.textInput}
                        />

                        <Text style={styles.text}>Answer One</Text>
                        <TextInput
                            placeholder="Answer One"
                            placeholderTextColor="#99AAAB"
                            onChangeText={(answerOne) => { this.setState({ answerOne,correctAnswer:answerOne }) }}
                            value={this.state.answerOne}
                            style={styles.textInput}
                        />

                        <Text style={styles.text}>Answer Two</Text>
                        <TextInput
                            placeholder="Answer Two"
                            placeholderTextColor="#99AAAB"
                            value={this.state.answerTwo}
                            onChangeText={(answerTwo) => { this.setState({ answerTwo }) }}
                            style={styles.textInput}
                        />

                        <Text style={styles.text}>Answer Three</Text>
                        <TextInput
                            placeholder="Answer Three"
                            placeholderTextColor="#99AAAB"
                            value={this.state.answerThree}
                            onChangeText={(answerThree) => { this.setState({ answerThree }) }}
                            style={styles.textInput}
                        />

                        <Text style={styles.text}>Answer Four</Text>
                        <TextInput
                            placeholder="Answer Four"
                            placeholderTextColor="#99AAAB"
                            value={this.state.answerFour}
                            onChangeText={(answerFour) => { this.setState({ answerFour }) }}
                            style={styles.textInput}
                        />

                        <Text style={styles.text}>Correct Answer</Text>
                        <Picker
                            selectedValue={this.state.correctAnswer}
                            style={styles.picker}
                            onValueChange={(correctAnswer) =>
                                this.setState({ correctAnswer })
                            }>
                            <Picker.Item label={this.state.answerOne} value={this.state.answerOne} />
                            <Picker.Item label={this.state.answerTwo} value={this.state.answerTwo} />
                            <Picker.Item label={this.state.answerThree} value={this.state.answerThree} />
                            <Picker.Item label={this.state.answerFour} value={this.state.answerFour} />
                        </Picker>

                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => { this.publishContents() }}>
                                <Text style={styles.buttonText}>Update</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("ContentUpdate") }}>
                                <Text style={styles.buttonText}>Back to main page</Text>
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                </View>
            );
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
        marginBottom: height / 60
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
