import { makeAutoObservable } from "mobx";

class toolState {
    tool = null
    constructor(){
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool
    }

    setFillColor(color) {
        this.tool.fillColor = color
    }

    setSrokeColor(color) {
        this.tool.strokeColor = color
    }

    setLineWidth(width) {
        this.tool.lineWidth = width
    }
}

export default new toolState;