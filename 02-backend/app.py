from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/')
def get_message():
    return jsonify({"message": "Code today, conquer tomorrow – every line brings you closer to your vision."})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)