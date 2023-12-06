from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def task12():
    return render_template('task12.html')

@app.route("/Manual")
def model():
    return render_template('Manual.html')

@app.route("/ManualWithSeparateHandlers")
def viewdata():
    return render_template('ManualWithSeparateHandlers.html')

@app.route("/ModelBindingInParameters")
def viewbag():
    return render_template('ModelBindingInParameters.html')

@app.route("/ModelBindingInSeparateModel")
def serviceinjection():
    return render_template('ModelBindingInSeparateModel.html')

if __name__ == "__main__":
    app.run( debug=True)