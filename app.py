from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/stages")
def stages():
    return render_template("stages.html")

@app.route("/tcu")
def tcu():
    return render_template("TCU.html")

@app.route("/carros")
def carros():
    return render_template("carros.html")

if __name__ == "__main__":
    app.run(debug=True)

    #quando usamos flask com html, para definirmos uma rota para carregar um html, devemos usar o caracter/nome do decorador ao invés de digitar o caminho do documento no <a> href. Exemplo: <a href="/stages">Stages</a> ao invés de <a href="/templates/stages.html">Stages</a>