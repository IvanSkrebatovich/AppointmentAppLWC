import { LightningElement, wire } from "lwc";
import getDoctors from "@salesforce/apex/ControllerDoctor.getDoctors";

export default class AppointmentApp extends LightningElement {
    listDoctor;
    newDocName;
    newDocStart;
    newDocEnd;
    displayDiv = false;

    @wire(getDoctors) wiredDoctors;
    // @wire(getDoctors) wiredDoctors({data, error}) {
    //     if (data) {
    //         this.listDoctor = data.map( doc => ({ label: doc, value: doc}));
    //     } else {
    //         console.log(error);
    //     }
    // }

    //----------Shows/Hides doctor's create template----------
    showTemplateHandler() {
        this.displayDiv = !this.displayDiv;
    }
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

    //----------This should be dropdown list of doctors----------
    value = "choose Doctor";
    get options() {
        return [
            { label: "Doctor1", value: "Doctor1" },
            { label: "Doctor2", value: "Doctor2" },
            { label: "Doctor3", value: "Doctor3" }
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
    //----------Button to check features/console.log ----------
    handleClick() {
        console.log(typeof(this.newDocName), this.newDocStart, this.newDocEnd);
    }
}
