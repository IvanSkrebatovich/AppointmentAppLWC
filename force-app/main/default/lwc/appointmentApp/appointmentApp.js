import { LightningElement, wire } from 'lwc';
import getDoctors from '@salesforce/apex/ControllerDoctor.getDoctors';

export default class AppointmentApp extends LightningElement {
    @wire(getDoctors) wiredDoctors;

    arrDoctor;

    value = 'choose Doctor';

    get options() {
        return [
            { label: 'Doctor1', value: 'Doctor1' },
            { label: 'Doctor2', value: 'Doctor2' },
            { label: 'Doctor3', value: 'Doctor3' },
            
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
    handleClick (){
        
    console.log(this.wiredDoctors.data.Name);
}
}