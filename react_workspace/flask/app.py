from flask import Flask

app=Flask(__name__)
@app.route('/')
def demo():
    return "hello world "

if __name__ == '__main':
    app.run()