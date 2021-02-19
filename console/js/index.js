var INPUTOPEN;
var CURRENTQUESTION;
var CONSOLEHIDDEN = false;

function LoadFunctions() {
    UpdateTime();
    StartInput();
}

function UpdateTime() {

    var currentdate = new Date();
    var hours = currentdate.getHours();
    var mins = currentdate.getMinutes();
    var seconds = currentdate.getSeconds();
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var timezone = (currentdate.getTimezoneOffset() / 60);
    if (0 > timezone) {
        timezone = "+" + (-1 * timezone)
    } else {
        timezone = "-" + (timezone);
    }
    document.getElementById('datetime').innerHTML = "[" + hours + ":" + mins + " UTC" + timezone + " ]"

    var day = currentdate.getDate();
    var month = currentdate.getMonth() + 1;
    var year = currentdate.getFullYear();

    if (month < 10) {
        month = "0" + month;
    }

    if (day < 10) {
        day = "0" + day;
    }

    document.getElementById('datedmy').innerHTML = "[" + day + "/" + month + "/" + year + "]"

    setTimeout(UpdateTime, 500);
}

function StartInput() {
    inputopen = true;

    document.addEventListener('keypress', keyPressEvent);

    document.addEventListener('keydown', keyDownEvent);

    OpenInput("Would you initialize GUI ? Y/N :  ");
    CURRENTQUESTION = "GUIinitialize";
}

function keyPressEvent(e) {

    if (e.keyCode == 13) {
        event.preventDefault();
        //We need to do this, it's not amazing well done but i wasn't expecting to have cancel the default enter key events
    }

    if (inputopen) {
        ScrollCommandToBottom();
        var input = document.getElementById('input').textContent.toLowerCase();
        if ((e.keyCode == 13) && (input != "")) {
            PromptOutput(document.getElementById('input_tag').textContent.substr(2));
            ClearInputLabel();
            switch (CURRENTQUESTION) {
                case "GUIinitialize":

                    if (input == 'y') {
                        CURRENTQUESTION = "none";
                        StartGUI();
                    } else {


                        CloseInput();
                        CURRENTQUESTION = "none";
                        ClearInputLabel();
                        setTimeout(PromptOutput, 500, "You chose to use the Command Input");
                        setTimeout(PromptOutput, 700, "To view commands type /help");
                        setTimeout(OpenInput, 800);
                    }

                    break;

                case "none":
                    if (!RunCommand(input)) {
                        ErrorOutput("Command not found! Please use /help");
                    }

            }
        } else if (e.keyCode != 13) {
            document.getElementById('input').innerHTML = document.getElementById('input').textContent + String.fromCharCode(e.keyCode);
        }


    }


}

function RunCommand(Command) {
    switch (Command) {
        case "/help":
            HelpCommand();
            break;
        case "/opengui":
            StartGUI();
            break;
        case "/closegui":
            CloseGUI();
            break;
        case "/clear":
            PromptLoadDefault();
            break;
        case "/projects":
            ViewProjects();
            break;
        case "/aboutme":
            AboutMe();
            break;
        default:
            return false;
            break;

    }

    return true;

}


function AboutMe() {
    setTimeout(PromptOutput, 300, "Loading Profile....");
    setTimeout(ClearWindow, 700);
    setTimeout(PromptOutput, 800, "------=PROFILE=------");
    setTimeout(PromptOutput, 900, "Name: Alex Finch");
    setTimeout(PromptOutput, 1000, "DOB: 25/02/2002");
    setTimeout(PromptOutput, 1100, "Location: Fareham");
    setTimeout(PromptOutput, 1100, "----Contact---- ");
    setTimeout(ComplexPromptOutput, 1200, "Email", "orange", "#ffc04d", "OpenLink('mailto:contact@alexfinch.org')");
    setTimeout(ComplexPromptOutput, 1300, "LinkedIn", "orange", "#ffc04d", "OpenLink('https://www.linkedin.com/in/alexdfinch/')");
    setTimeout(ComplexPromptOutput, 1400, "Peopleperhour", "orange", "#ffc04d", "OpenLink('https://www.peopleperhour.com/freelancer/development-it/alex-finch-full-stack-developer-xmmmjmz')");
    setTimeout(PromptOutput, 1500, "-----------------------");
    

}

function HelpCommand() {


    setTimeout(PromptOutput, 500, "------=HELP MENU=------");
    setTimeout(PromptOutput, 600, "/help [Displays this menu]");
    setTimeout(PromptOutput, 700, "/projects [View projects I have worked on]");
    setTimeout(PromptOutput, 800, "/opengui [Show GUI view]");
    setTimeout(PromptOutput, 900, "/closegui [Close GUI view]");
    setTimeout(PromptOutput, 1000, "/aboutme [Read my quick autobiography about me]");
    setTimeout(PromptOutput, 1100, "/clear [clear console window]");
    setTimeout(PromptOutput, 1200, "-----------------------");
}

function ToggleConsole() {

    if (CONSOLEHIDDEN) {
        OutputLogMessage("Opening Console");
        OpenInput();
        document.getElementById('GUI').style.height = "80%";
        document.getElementById('command_prompt').style.height = "20%";

        document.getElementById('toggleconsole_btn').style.bottom = "20%";
        document.getElementById('toggleconsole_btn').style.color = "red";
        document.getElementById('toggleconsole_btn').innerText = "Hide";

        CONSOLEHIDDEN = false;

    } else {
        OutputLogMessage("Closing Console");
        CloseInput();
        document.getElementById('GUI').style.height = "100%";
        document.getElementById('command_prompt').style.height = "0%";

        document.getElementById('toggleconsole_btn').style.bottom = "0%";
        document.getElementById('toggleconsole_btn').style.color = "green";
        document.getElementById('toggleconsole_btn').innerText = "Show";

        CONSOLEHIDDEN = true;



    }


}



function keyDownEvent(e) {

    if (e.keyCode == 8) {
        document.getElementById('input').innerHTML = (document.getElementById('input').innerHTML).slice(0, -1);
    }


}

function OpenLink(URL) {
    window.open(URL, '_blank');
}

function CloseProjects() {
    var Command_Prompt = document.getElementById('command_prompt');
    document.getElementById('project_viewer').style.width = "0%";
    document.getElementById('project_viewer').style.height = "0%";
    Command_Prompt.style.width = "100%";
    Command_Prompt.style.backgroundColor = "black";
    ClearWindow();
    OpenInput();
}

function ViewProjects() {
    CloseInput();
    ClearWindow();
    var Command_Prompt = document.getElementById('command_prompt');
    Command_Prompt.style.width = "20%";
    document.getElementById('project_viewer').style.width = "80%";
    document.getElementById('project_viewer').style.height = "100%";
    Command_Prompt.style.backgroundColor = "white";
    PromptOutput("------Project Menu------", "green");
    setTimeout(PromptOutput, 200, "Loading Projects...", "green");
    setTimeout(PromptOutput, 300, "Projects:", "green");
    setTimeout(ComplexPromptOutput, 400, "UKSA", "orange", "#ffc04d", "DisplayProject('https://www.alexfinch.org/Projects/uksa/Login/index.php')");
    setTimeout(ComplexPromptOutput, 500, "GAFF", "orange", "#ffc04d", "DisplayProject('https://www.alexfinch.org/Projects/gaff/')");
    setTimeout(ComplexPromptOutput, 600, "alexfinch.org", "orange", "#ffc04d", "DisplayProject('https://www.alexfinch.co.uk')");
    setTimeout(ComplexPromptOutput, 800, "Back", "red", "black", "CloseProjects()");
}



function DisplayProject(URL) {
    document.getElementById("project_viewer").innerHTML = '<iframe src="' + URL + '" style="width:100%; height: 100%;"> Sadly your browser doesn\'t support this </<iframe>'
}

function OutputLogMessage(Log) {
    PromptOutput("[Log] " + Log);
}

function PromptLoadDefault() {
    document.getElementById('command_prompt_output').innerHTML = '<p>Welcome to alexfinch.org</p><p>> Time is <span id = "datetime"> [00: 00 GMT] </span ></p><p>> Date is <span id="datedmy"> [00/00/2010] </span> </p><p>> -----------------</p>'
}

function ClearWindow() {
    document.getElementById('command_prompt_output').innerHTML = "";
}

function ComplexPromptOutput(Output, Color, Hover, Function) {
    document.getElementById('command_prompt_output').innerHTML += '<a onclick="' + Function + ';" onMouseOver="this.style.color=\'' + Hover + '\'" onMouseOut="this.style.color=\'' + Color + '\'" href="#" style="color:' + Color + '"> > ' + Output + '</a>';
}

function PromptOutput(Output, Color) {
    if (Color != null) {
        document.getElementById('command_prompt_output').innerHTML += '<p style="color:' + Color + '"> > ' + Output + '</p>';
    } else {
        document.getElementById('command_prompt_output').innerHTML += "<p> > " + Output + "</p>";
    }
    ScrollCommandToBottom();

}

function ErrorOutput(Error) {
    PromptOutput(Error, "red");
}

function ClearInputLabel() {
    document.getElementById('input_tag').innerHTML = '> <span id="input"></span>';
}

function OpenInput(Message) {
    if (Message == null) {
        Message = "";
    }
    document.getElementById('input_tag').innerHTML = '> ' + Message + '<span id="input"></span>';
    document.getElementById('input_tag').style.webkitAnimationPlayState = "running";
    document.getElementById('input_tag').style.borderRightWidth = "4px";
    ScrollCommandToBottom();
    inputopen = true;
}

function CloseInput() {
    ClearInputLabel();
    document.getElementById('input_tag').innerHTML = '<span id="input"></span>';
    document.getElementById('input_tag').style.webkitAnimationPlayState = "paused";
    document.getElementById('input_tag').style.borderRightWidth = "0px";
    inputopen = false;
}


function StartGUI() {
    //Set GUI elements to display :)

    CloseInput();
    PromptOutput("Starting GUI...");
    setTimeout(PromptOutput, 500, "Loading Design");
    setTimeout(PromptOutput, 1000, "Loading Snazzy-Animation.css ");
    setTimeout(PromptOutput, 1500, "Displaying Design");
    setTimeout(DisplayGUI, 1700);
    setTimeout(OpenInput, 3700);
}

function DisplayGUI() {
    document.getElementById('GUI').style.height = "80%";
    document.getElementById('command_prompt').style.height = "20%";

    //Display other GUI elements.
    setTimeout(DisplayGUIelement, 2000, "toggleconsole_btn");
}

function DisplayGUIelement(ID) {
    document.getElementById(ID).style.display = "block";
    setTimeout(function () {
        document.getElementById(ID).style.opacity = "1";
    }, 500);

}


function ScrollCommandToBottom() {
    var command_prompt = document.getElementById("command_prompt");
    command_prompt.scrollTop = command_prompt.scrollHeight;
}

function CloseGUI() {

    //Hide GUI elements set display to nothing
    document.getElementById('toggleconsole_btn').style.display = "none";
    document.getElementById('toggleconsole_btn').style.bottom = "20%";
    document.getElementById('toggleconsole_btn').style.color = "red";
    document.getElementById('toggleconsole_btn').innerText = "Hide";

    document.getElementById('GUI').style.height = "0%";
    document.getElementById('command_prompt').style.height = "100%";
}
