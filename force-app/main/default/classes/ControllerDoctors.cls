public with sharing class ControllerDoctors {
    @AuraEnabled(cacheable=true)
    public List<Doctor__c> getDoctors() {
        List<Doctor__c> doctors = ModelDoctor.getDoctors();
        return doctors;
    }
    
}
