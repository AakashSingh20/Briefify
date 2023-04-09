function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    } else if (input == "") {
        return "Try again !!";
    } else if (input == "hello") {
        return "Hey there!!";
    }
    

    if (input == "how to generate summary") {
        return "log in, upload, generate. it's that easy!!";
    } else if (input == "what is this website") {
        return "This website allows you to upload long videos of lectures and converts them into short summary.";
    } 
    

    if (input == "tell me about website") {
        return "As remote and hybrid working models become more prevalent, virtual meetings have become necessary. Meetings are often held through platforms like Microsoft Teams, Google Meet, and Zoom. Although these platforms offer the ability to download transcripts, they cannot summarize them. In order to address this gap in meeting productivity, the project aims to create a solution that provides a summary of virtual meetings.";
    } else if (input == "tell me the objective of the website") {
        return "As remote and hybrid working models become more prevalent, virtual meetings have become necessary. Meetings are often held through platforms like Microsoft Teams, Google Meet, and Zoom. Although these platforms offer the ability to download transcripts, they cannot summarize them. In order to address this gap in meeting productivity, the project aims to create a solution that provides a summary of virtual meetings.";
    } else if (input == "what languages do you support") {
        return "We support all languages.  You put language name as a symbol for example -hindi -hi";
    }



    // Simple responses
    if (input == "what are the features") {
        return "This platform provides numerous features like summary of any video , translation in any language , action word of summary ,  transcript,. Duration of meeting , number of words speaked by people,  record of previous video, summary.";
    } else if (input == "how this website helps") {
        return "This platform provides numerous features like summary of any video , translation in any language , action word of summary ,  transcript,. Duration of meeting , number of words speaked by people,  record of previous video, summary.";
    } else if (input == "functions of this website") {
        return "This platform provides numerous features like summary of any video , translation in any language , action word of summary ,  transcript,. Duration of meeting , number of words speaked by people,  record of previous video, summary.";
    }

    if (input == "how to translate") {
        return ("1-open dashboard\n 2-go to summary option\n 3-click on translate option\n 4- Type language code\n 5- click on translate\n You will got your summary translation");
    } else if (input == "how to create transcript in teams") {
        return "1.Open Microsoft Teams and go to the Teams meeting you want to transcribe.\n 2.Click on the '...' button at the bottom of the meeting window.\n 3.Select 'Start recording' and then 'Start transcription'.\n 4.The transcription will start automatically and the text will appear in real-time on the right-hand side of the meeting window.\n 5.Once the meeting is over, the transcript will be saved and can be accessed later by going to the meeting recording and clicking on 'Transcript'. ";
    } else if (input == "how to upload a video") {
        return "This platform provides numerous features like summary of any video , translation in any language , action word of summary ,  transcript,. Duration of meeting , number of words speaked by people,  record of previous video, summary.";
    }else {
        return "Try asking something else!";
    }
}