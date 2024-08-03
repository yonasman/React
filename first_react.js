const uiElm =  React.createElement("ui",
    null,[
    React.createElement("li",null,"Orange"),React.createElement("li",null,"Banana"),React.createElement("li",null,"Mango")])

const container = document.getElementById("render");
ReactDOM.render(uiElm,container)
