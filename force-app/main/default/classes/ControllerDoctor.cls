public with sharing class ControllerDoctor {
    @AuraEnabled(cacheable=true)
    public static List<Doctor__c> getDoctors() {
        List<Doctor__c> doctors = ModelDoctors.getDoctors();
        return doctors;
    }
    
}
