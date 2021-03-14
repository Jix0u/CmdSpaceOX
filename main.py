from flask import Flask
from mouse import run
# import matplotlib.pyplot as plt
# plt.switch_backend('Agg')

app = Flask(__name__)


@app.route('/mouse')
def mouse():
    run()
    return "Hello World!"

if __name__ == '__main__':
    app.run()
