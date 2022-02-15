import { LightningElement } from 'lwc';

export default class CreateDoctor extends LightningElement {

    newDocName;
    newDocStart;
    newDocEnd;


    //----------Put doctor's name and working hours in variables----------
    docNameHandler(event) {
        this.newDocName = event.target.value; 
    }

    hoursStartHandler(event) {
        this.newDocStart = event.target.value;
    }

    hoursEndHandler(event) {
        this.newDocEnd = event.target.value;
    }

}