public with sharing class ModelDoctors {
    //----------Gets all doctors from DB----------
    public static List<Doctor__c> getDoctors() {
        List<Doctor__c> doctors = new List<Doctor__c>(
            [SELECT Id, Name, Working_Hours_End__c, Working_Hours_Start__c FROM Doctor__c]
        );
        return doctors;
    }

    //----------Creates new doctor----------
    public static Boolean createDoctor(String recordName, Time hoursStart, Time hoursEnd) {
        List<Doctor__c> doctors = new List<Doctor__c>();
        Doctor__c newDoc = new Doctor__c(Name=recordName, Working_Hours_Start__c=hoursStart, Working_Hours_End__c=hoursEnd);
        doctors.add(newDoc);
        List<Database.SaveResult> result = Database.insert(doctors, false);
        for (Database.SaveResult item : result) {
            return item.isSuccess();
        }
        return true;
     }

}
