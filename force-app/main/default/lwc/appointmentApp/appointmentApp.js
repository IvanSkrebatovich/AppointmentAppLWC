import { LightningElement, wire } from 'lwc';
import getDoctors from '@salesforce/apex/ControllerDoctors.getDoctors';

export default class AppointmentApp extends LightningElement {
    @wire(getDoctors) wiredDoctors;
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
}