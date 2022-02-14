public with sharing class ModelDoctor {
    public static List<Doctor__c> getDoctor() {
        List<Doctor__c> doctors = new List<Doctor__c>(
            [SELECT Id, Name, Working_Hours_End__c, Working_Hours_Start__c FROM Doctor__c]
        );
        return doctors;
    }
}
