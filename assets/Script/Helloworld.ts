const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;
    @property(cc.EditBox)
    currentBox: cc.EditBox = null;
    @property(cc.EditBox)
    goalBox: cc.EditBox = null;
    @property(cc.Label)
    label: cc.Label = null;

    start () {
        this.progressBar.progress = 0.5;
        var currentValue = localStorage.getItem('current');
        var goalValue = localStorage.getItem('goal');
        this.currentBox.string = currentValue ?  currentValue : "0";
        this.goalBox.string = goalValue ? goalValue : "200000000";
        this.updateProgress();
    }

    onCurrentFinish(e: cc.EditBox) {
        localStorage.setItem('current', e.string);
        this.updateProgress();

    }

    onGoalFinish(e: cc.EditBox) {
        localStorage.setItem('goal', e.string);
        this.updateProgress();
    }

    updateProgress() {
        this.progressBar.progress = Number(this.currentBox.string) / Number(this.goalBox.string);
        this.label.string = (this.progressBar.progress * 100).toFixed(2) + "%";
        console.log(this.currentBox.string, this.goalBox.string);
    }
}
