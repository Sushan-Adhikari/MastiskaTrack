# MastiskaTrack
Copyright (c) 2023 

MastiskaTrack is a web-based application for assessing the mental health status of the user. Using sentiment analysis, the model draws 
conclusion which is then passed to a generative model which suggests a course of action based on the user's mental health status.

Our teams aim is to bridge the barrier between the help seekers and the stigma surrounding any mental health discussions.

It is a free to use, easily accesible solution catering to the initial screening phase and helping with further course of action
that needs to be carried out in order to seek help or for a overall better well-being.

Built during AI crusade(Nepal's first AI hackathon)
Contibutors: Samman Pathak, Phiroj Kumar Sah, Sushan Adhikari, Darshan Lamichhane

<a src="github.com/phirojshah"/>


## Installation

To install and run the Langchain Chatbot, follow these steps:

Clone the repository 
https://github.com/Sushan-Adhikari/MastiskaTrack.git

Create a Virtual Environment
pip install virtualenv
python<version> -m venv <virtual-environment-name>
<virtual-environment-name>\Scripts\activate

Install the dependencies using requirements.txt

pip install -r requirements.txt
streamlit run app.py
<br/
and for react UI
cd mastiska
npm install


Add your OpenAI Key by creating a .env file in the folder and add the following within it:
OPENAI_API_KEY="<your key>"



Run the App
streamlit run app.py
npm run dev

Check out top embedding models: https://huggingface.co/blog/mteb
