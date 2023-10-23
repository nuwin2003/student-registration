package edu.iCET.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    String name;
    String emailAddress;
    int age;
    String address;
    String contactNumber;
    String dateOfBirth;
    String guardianName;
    String guardianAddress;
    String guardianContact;

    byte[] image;

    public void setName(String name) {
        if(name.isBlank()) return;
        this.name = name;
    }

    public void setEmailAddress(String emailAddress) {
        if(emailAddress.isBlank()) return;
        this.emailAddress = emailAddress;
    }

    public void setAge(int age) {
        if (age < 0) return;
        this.age = age;
    }

    public void setAddress(String address) {
        if(address.isBlank()) return;
        this.address = address;
    }

    public void setContactNumber(String contactNumber) {
        if(contactNumber.length() != 10 || !contactNumber.startsWith("0")) return;
        this.contactNumber = contactNumber;
    }

    public void setDateOfBirth(String dateOfBirth) {
        if(dateOfBirth.isBlank()) return;
        this.dateOfBirth = dateOfBirth;
    }

    public void setGuardianName(String guardianName) {
        if(guardianName.isBlank()) return;
        this.guardianName = guardianName;
    }

    public void setGuardianAddress(String guardianAddress) {
        if(guardianAddress.isBlank()) return;
        this.guardianAddress = guardianAddress;
    }

    public void setGuardianContact(String guardianContact) {
        if(guardianContact.length() != 10 || !guardianContact.startsWith("0")) return;
        this.guardianContact = guardianContact;
    }
}
